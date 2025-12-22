import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "wedding_auth";
const COOKIE_VALUE = "authenticated";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow access to login page
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Allow access to authentication API endpoints
  if (pathname.startsWith("/api/auth") || pathname.startsWith("/api/logout")) {
    return NextResponse.next();
  }

  // Allow static assets and Next.js internal routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check for authentication cookie
  const authCookie = request.cookies.get(COOKIE_NAME);

  if (!authCookie || authCookie.value !== COOKIE_VALUE) {
    // Not authenticated - redirect to login
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Authenticated - allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
