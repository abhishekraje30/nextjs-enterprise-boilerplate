import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest) {
  console.log(req)
  const secret = process.env.AUTH_SECRET || ""
  const token = await getToken({ req, secret, salt: "YOUR_SALT_VALUE" })
  const { pathname } = req.nextUrl

  // Define protected routes
  const protectedRoutes = ["/protected"]

  // Check if the user is authenticated
  const isAuthenticated = !!token

  // Redirect unauthenticated users trying to access protected routes
  if (protectedRoutes.includes(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("api/auth/signin", req.url))
  }

  // Allow access to public routes
  return NextResponse.next()
}

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
