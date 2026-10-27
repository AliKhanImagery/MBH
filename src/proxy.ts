import { NextResponse, type NextRequest } from "next/server";
import { isSpamPath } from "@/lib/spam-paths";

export function proxy(request: NextRequest) {
  if (isSpamPath(request.nextUrl.pathname)) {
    return new NextResponse("410 Gone — this page has been permanently removed.", {
      status: 410,
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  }
  return NextResponse.next();
}

export const config = {
  // Skip Next internals, API routes and anything with a file extension.
  matcher: ["/((?!_next/|api/|.*\\.[^/]+$).*)"],
};
