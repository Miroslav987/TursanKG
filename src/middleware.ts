
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {


  if (true && req.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/', req.url));
  }


  return NextResponse.next(); 
}

export const config = {
  matcher: [ '/profile/:path*'],

}