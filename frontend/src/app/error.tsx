"use client";

import Section from "@/components/atoms/section/Section";
import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";


export default function ErrorBoundary(
  { error }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {

  return <Section><DefaultError errorMessage={error.message} /></Section>;
}
