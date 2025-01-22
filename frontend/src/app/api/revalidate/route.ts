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
  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path);
    // eslint-disable-next-line no-console
    console.info(`Path: "${path}" just got revalidated`);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
