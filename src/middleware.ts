import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get('locale')?.value ?? "en";
  const routeLocale = request.nextUrl.locale ?? "en";
  if (cookieLocale !== routeLocale) {
    return NextResponse.redirect(new URL(`/${cookieLocale === 'en' ? '' : cookieLocale}`, request.url))
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
    '/',
    '/:locale',
  ],
}
