import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "wedding_auth";
const COOKIE_VALUE = "authenticated";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    // Get the password from environment variable
    const correctPassword = process.env.WEDDING_SITE_PASSWORD;

    if (!correctPassword) {
      console.error("WEDDING_SITE_PASSWORD environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Verify password
    if (password !== correctPassword) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    // Password is correct - create response and set cookie
    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );

    // Set HttpOnly cookie
    response.cookies.set({
      name: COOKIE_NAME,
      value: COOKIE_VALUE,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
