import { root } from "@/utils/isRoot";

const CRITICAL_PAGES = [root];


async function checkPage(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Page ${url} returned status ${response.status}`);
  }

  const html = await response.text();

  const requiredContent = ["ДОБРО ПОЖАЛОВАТЬ"];
  const hasRequiredContent = requiredContent.some(phrase => html.includes(phrase));

  if (!hasRequiredContent) {
    throw new Error(`Page ${url} is missing required content`);
  }

  // Check for error boundary using data-* attribute
  const hasErrorBoundary = html.includes("data-error-boundary=\"true\"");

  if (hasErrorBoundary) {
    throw new Error(`Page ${url} is rendering an error boundary`);
  }
}

export async function GET() {
  try {
    for (const page of CRITICAL_PAGES) {
      const NEXT_PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
      await checkPage(`http://${NEXT_PUBLIC_FRONTEND_URL}${page}`);
    }

    return Response.json(
      {
        status: "healthy",
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error("Health check failed:", error.message);
      return Response.json(
        {
          status: "unhealthy",
          error: error.message,
        },
        { status: 500 },
      );
    }

    return Response.json(
      {
        status: "unhealthy",
        error: "some error happened",
      },
      { status: 500 },
    );
  }
} 
