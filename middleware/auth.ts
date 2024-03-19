import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { faker } from '@faker-js/faker'
import { userCookieKey, cookieSep } from 'libs/session'
import { sleep } from "libs/utils";

export default async function middleware(req: NextRequest) {
  let token = ''
  try {
    const userInfo = await sleep({
      login: faker.internet.userName()
    }, 300);

    token = (userInfo as { login: string }).login
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { message: err.toString() },
      {
        status: 500
      }
    )
  }

  if (!token) {
    return NextResponse.json(
      { message: 'Authorization failed' },
      {
        status: 400
      }
    )
  }

  const user = {
    name: token,
    encrypted: token
  }

  const url = req.nextUrl.clone()
  url.pathname = '/'

  const res = NextResponse.redirect(url)

  res.cookies.set(
    userCookieKey,
    `${user.name}${cookieSep}${user.encrypted}; Secure; HttpOnly`
  )

  return res
}
