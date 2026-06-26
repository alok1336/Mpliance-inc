import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const session = req.auth;

  const pathname =
    req.nextUrl.pathname;

  // Admin

  if (
    pathname.startsWith("/admin")
  ) {
    if (
      !session ||
      session.user.role !== "ADMIN"
    ) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }
  }

  // Dealer

  if (
    pathname.startsWith(
      "/dealer/dashboard"
    )
  ) {
    if (
      !session ||
      session.user.role !==
        "DEALER"
    ) {
      return NextResponse.redirect(
        new URL("/dealer/login", req.url)
      );
    }

    const expiry =
      session.user
        .subscriptionExpiry;

    if (
      expiry &&
      new Date(expiry) <
        new Date()
    ) {
      return NextResponse.redirect(
        new URL(
          "/dealer/renew",
          req.url
        )
      );
    }
  }

  // Cart

  if (
    pathname.startsWith("/cart")
  ) {
    if (!session) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/dealer/dashboard/:path*",
    "/cart/:path*",
  ],
};