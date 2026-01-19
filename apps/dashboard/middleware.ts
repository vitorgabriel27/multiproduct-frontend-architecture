import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Definir produto com base no path
    if (pathname.startsWith('/finance')) {
        req.nextUrl.pathname = pathname.replace('/finance', '/products/finance');
    } else if (pathname.startsWith('/operations')) {
        req.nextUrl.pathname = pathname.replace('/operations', '/products/operations');
    } else {
        req.nextUrl.pathname = '/'; // fallback
    }

    return NextResponse.rewrite(req.nextUrl);
}

// Aplica a todas as rotas
export const config = {
    matcher: ['/finance/:path*', '/operations/:path*'],
};
