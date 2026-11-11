export type Question = {
  id: string;
  label: string;
  help?: string;
  required?: boolean;
} & (
  | { type: "text" | "email" | "tel" | "textarea" }
  | { type: "single" | "multi"; options: string[] }
);

export type Section = {
  id: string;
  title: string;
  intro?: string;
  questions: Question[];
};

export type Questionnaire = {
  slug: string;
  specialty: string;
  sections: Section[];
};
