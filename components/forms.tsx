"use client";

import { useActionState } from "react";
import { submitContact, submitQuestionnaire, type FormState } from "@/app/actions";
import type { Question, Questionnaire } from "@/lib/questionnaire/types";
import { GrowingMint } from "./mint";

const initial: FormState = { status: "idle" };
const inputClass =
  "mt-2 block w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted/60 focus:border-mint";

function Honeypot() {
  return (
    <div aria-hidden="true" className="hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

function Alert({ state }: { state: FormState }) {
  if (state.status !== "error") return null;
  return (
    <p role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-900">
      {state.message}
    </p>
  );
}

function Success({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div role="status" className="flex items-center gap-6 rounded-3xl border border-line bg-mint-soft p-8">
      <GrowingMint className="grow-on-load relative w-24 shrink-0" />
      <div>
        <h2 className="font-display text-3xl">{title}</h2>
        <p className="mt-2 text-lg text-muted">{children}</p>
      </div>
    </div>
  );
}

function SubmitButton({ pending, children }: { pending: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-mint-deep px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-forest disabled:opacity-60"
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

function Field({ q, values }: { q: Question; values?: string[] }) {
  const mark = q.required ? <span className="text-mint-deep"> *</span> : null;

  if (q.type === "single" || q.type === "multi") {
    return (
      <fieldset>
        <legend className="font-medium">
          {q.label}
          {mark}
        </legend>
        {q.type === "multi" && <p className="mt-1 text-sm text-muted">Select all that apply.</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {q.options.map((option, i) => (
            <label
              key={option}
              className="cursor-pointer rounded-full border border-line bg-white px-4 py-2 text-[15px] transition-colors hover:border-mint has-checked:border-mint-deep has-checked:bg-mint-soft has-checked:font-medium has-focus-visible:outline-2 has-focus-visible:outline-mint"
            >
              <input
                type={q.type === "single" ? "radio" : "checkbox"}
                name={q.id}
                value={option}
                required={q.required && q.type === "single" && i === 0}
                defaultChecked={values?.includes(option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  return (
    <label className="block font-medium">
      {q.label}
      {mark}
      {q.type === "textarea" ? (
        <textarea name={q.id} rows={4} required={q.required} defaultValue={values?.[0]} className={inputClass} />
      ) : (
        <input type={q.type} name={q.id} required={q.required} defaultValue={values?.[0]} className={inputClass} />
      )}
    </label>
  );
}

export function QuestionnaireForm({ questionnaire }: { questionnaire: Questionnaire }) {
  const [state, action, pending] = useActionState(
    submitQuestionnaire.bind(null, questionnaire.slug),
    initial,
  );

  if (state.status === "success") {
    return (
      <Success title="Thank you. We have your answers.">
        We will review them before we meet, so our time together goes to your practice and not to
        basics.
      </Success>
    );
  }

  return (
    <form action={action} className="space-y-12">
      <Honeypot />
      {questionnaire.sections.map((section, i) => (
        <section key={section.id} aria-labelledby={`s-${section.id}`}>
          <p className="text-sm font-semibold text-mint-deep">
            Part {i + 1} of {questionnaire.sections.length}
          </p>
          <h2 id={`s-${section.id}`} className="mt-1 font-display text-2xl">
            {section.title}
          </h2>
          <div className="mt-6 space-y-7">
            {section.questions.map((q) => (
              <Field key={q.id} q={q} values={state.values?.[q.id]} />
            ))}
          </div>
        </section>
      ))}
      <Alert state={state} />
      <SubmitButton pending={pending}>Send my answers</SubmitButton>
    </form>
  );
}

const contactFields: Question[] = [
  { id: "name", label: "Your name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "practice", label: "Practice name", type: "text" },
  { id: "specialty", label: "Specialty", type: "text" },
  { id: "message", label: "What would you most like to improve?", type: "textarea" },
];

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return <Success title="Thanks. We will be in touch.">Expect a reply from us shortly.</Success>;
  }

  return (
    <form action={action} className="space-y-6">
      <Honeypot />
      {contactFields.map((q) => (
        <Field key={q.id} q={q} values={state.values?.[q.id]} />
      ))}
      <Alert state={state} />
      <SubmitButton pending={pending}>Send message</SubmitButton>
    </form>
  );
}
