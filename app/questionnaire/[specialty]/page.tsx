import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuestionnaireForm } from "@/components/forms";
import { Container, PageHero } from "@/components/ui";
import { getQuestionnaire, specialtySlugs } from "@/lib/questionnaire";

// Unknown slugs are a real 404, not a page rendered on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return specialtySlugs.map((specialty) => ({ specialty }));
}

export async function generateMetadata({
  params,
}: PageProps<"/questionnaire/[specialty]">): Promise<Metadata> {
  const questionnaire = getQuestionnaire((await params).specialty);
  return {
    title: questionnaire ? `${questionnaire.specialty} questionnaire` : "Questionnaire",
    // Sent to practices by direct link; keep it out of search results.
    robots: { index: false, follow: false },
  };
}

export default async function QuestionnairePage({ params }: PageProps<"/questionnaire/[specialty]">) {
  const questionnaire = getQuestionnaire((await params).specialty);
  if (!questionnaire) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${questionnaire.specialty} practice questionnaire`}
        title="A few questions before we meet."
        lede="This takes about ten minutes. Best guesses are fine, and you can skip anything you are unsure of. Please do not include any patient information."
      />
      <Container className="max-w-3xl py-14 sm:py-20">
        <QuestionnaireForm questionnaire={questionnaire} />
      </Container>
    </>
  );
}
