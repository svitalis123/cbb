import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }
  return NextResponse.next()
})

export const config = {
  matcher: ["/admin/:path*"],
}
