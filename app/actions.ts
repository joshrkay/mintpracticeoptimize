"use server";

import { deliver } from "@/lib/deliver";
import { getQuestionnaire } from "@/lib/questionnaire";
import { site } from "@/lib/site";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  values?: Record<string, string[]>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 5000;
const FAILED = `We couldn't send that just now. Please try again, or email us at ${site.email}.`;

function read(formData: FormData) {
  const values: Record<string, string[]> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value !== "string" || key.startsWith("$ACTION")) continue;
    const trimmed = value.trim().slice(0, MAX_LEN);
    if (trimmed) (values[key] ??= []).push(trimmed);
  }
  return values;
}

export async function submitQuestionnaire(
  slug: string,
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const questionnaire = getQuestionnaire(slug);
  if (!questionnaire) return { status: "error", message: "Unknown questionnaire." };

  const values = read(formData);
  if (values.website) return { status: "success" }; // honeypot

  const lines: string[] = [];
  for (const section of questionnaire.sections) {
    lines.push(`\n## ${section.title}`);
    for (const q of section.questions) {
      let answer = values[q.id] ?? [];
      if (q.type === "single" || q.type === "multi") {
        answer = answer.filter((a) => q.options.includes(a));
      }
      if (q.required && answer.length === 0) {
        return { status: "error", message: `Please answer: ${q.label}`, values };
      }
      if (q.type === "email" && answer[0] && !EMAIL_RE.test(answer[0])) {
        return { status: "error", message: "Please enter a valid email address.", values };
      }
      lines.push(`${q.label}\n  ${answer.length ? answer.join(", ") : "(no answer)"}`);
    }
  }

  const practice = values.practice_name?.[0] ?? "Unknown practice";
  const sent = await deliver({
    subject: `${questionnaire.specialty} questionnaire: ${practice}`.replace(/[\r\n]+/g, " "),
    text: lines.join("\n").trim(),
    replyTo: values.contact_email?.[0],
  });
  return sent ? { status: "success" } : { status: "error", message: FAILED, values };
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = read(formData);
  if (values.website) return { status: "success" }; // honeypot

  const name = values.name?.[0];
  const email = values.email?.[0];
  if (!name || !email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter your name and a valid email address.", values };
  }

  const sent = await deliver({
    subject: `Website inquiry: ${values.practice?.[0] ?? name}`.replace(/[\r\n]+/g, " "),
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${values.phone?.[0] ?? ""}`,
      `Practice: ${values.practice?.[0] ?? ""}`,
      `Specialty: ${values.specialty?.[0] ?? ""}`,
      "",
      values.message?.[0] ?? "",
    ].join("\n"),
    replyTo: email,
  });
  return sent ? { status: "success" } : { status: "error", message: FAILED, values };
}
