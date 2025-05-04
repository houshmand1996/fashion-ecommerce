// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const tempUserId = request.cookies.get('temp_user_id')?.value;
  console.log(tempUserId, 'from tempUserId');

  if (!tempUserId) {
    const newId = uuidv4();
    console.log(newId, 'from newId');

    response.cookies.set('temp_user_id', newId, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  }

  return response;
}
export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
