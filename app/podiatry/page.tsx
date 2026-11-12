import type { Metadata } from "next";
import { PracticePage, practiceMetadata } from "@/components/PracticePage";
import { getPracticeType } from "@/lib/practice-types";

const type = getPracticeType("podiatry")!;

export const metadata: Metadata = practiceMetadata(type);

export default function Podiatry() {
  return <PracticePage type={type} />;
}
