import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PracticePage, practiceMetadata } from "@/components/PracticePage";
import { getPracticeType, practiceTypes } from "@/lib/practice-types";

// Unknown addresses are a real 404. /podiatry has its own file and takes precedence over this route.
export const dynamicParams = false;

export function generateStaticParams() {
  return practiceTypes.filter((t) => t.slug !== "podiatry").map((t) => ({ practice: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[practice]">): Promise<Metadata> {
  const t = getPracticeType((await params).practice);
  return t ? practiceMetadata(t) : {};
}

export default async function Page({ params }: PageProps<"/[practice]">) {
  const t = getPracticeType((await params).practice);
  if (!t) notFound();
  return <PracticePage type={t} />;
}
