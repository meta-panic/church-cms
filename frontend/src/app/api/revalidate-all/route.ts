import { EXISTING_URLS } from "@/configuration/navigation";
import { revalidatePath } from "next/cache";


/**
 * Revalidates all pathes in the Next.js application.
 *
 * This API route allows you to programmatically revalidate all page.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Response} - A JSON response indicating the result of the revalidation.
 *
 * @example
 * // Example usage:
 * // GET /api/revalidate-all
 * // Response:
 * // {
 * //   "revalidated": true,
 * //   "now": 1640995200000
 * // }
 */
export async function GET() {
  try {
    EXISTING_URLS.forEach(path => {
      revalidatePath(path);
      // eslint-disable-next-line no-console
      console.info(`Path: "${path}" just got revalidated`);
    });
    return Response.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: `Something went wrong - ${err}`,
    });
  }
}
