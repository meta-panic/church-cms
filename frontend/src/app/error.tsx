"use client";

import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";


export default function ErrorBoundary(
  { error }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {

  return <DefaultError errorMessage={error.message} />;
}
