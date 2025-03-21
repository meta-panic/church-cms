import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";


/**
 * Revalidates a specified path in the Next.js application.
 *
 * This API route allows you to programmatically revalidate a page.
 * It uses the `revalidatePath` function to trigger the revalidation
 * for the specified path.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Response} - A JSON response indicating the result of the revalidation.
 *
 * @example
 * // Example usage:
 * // GET /api/revalidate?path=%2Fbeta
 * // Response:
 * // {
 * //   "revalidated": true,
 * //   "now": 1640995200000
 * // }
 */
export async function GET(request: NextRequest) {
  const token = process.env.NEXT_REVALIDATION_TOKEN;
  const authToken = request.headers.get("x-reval-token") || request.nextUrl.searchParams.get("token");

  if (!token || token !== authToken) {
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: "Invalid or missing authorization token",
      },
      { status: 401 },
    );
  }

  const paths = request.nextUrl.searchParams.getAll("path");

  if (paths.length > 0) {
    paths.forEach(path => revalidatePath(path));

    // eslint-disable-next-line no-console
    console.info(`Paths revalidated: ${paths.join(", ")}`);
    return Response.json({
      revalidated: true,
      paths: paths,
      now: Date.now(),
      tokenValid: true,
    });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing paths to revalidate",
    tokenValid: true,
  });
}
