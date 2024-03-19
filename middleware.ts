import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import authMiddleware from 'middleware/auth'
import logoutMiddleware from 'middleware/logout'

function matchPathname(url, pathname) {
  return url.pathname.startsWith(pathname)
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  if (matchPathname(url, '/logout')) {
    return logoutMiddleware(req)
  }

  if (matchPathname(url, '/auth')) {
    return authMiddleware(req)
  }

  return NextResponse.next()
}
