// products/finance/app/layout.tsx
import './global.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { AppShell } from '@multiproduct/ui';
import { financeMenu } from '../config/menu';

export default function FinanceLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AppShell
                    title="Finance Dashboard"
                    links={financeMenu}
                    LinkComponent={({ href, children, className }) => (
                        <Link href={href} className={className}>
                            {children}
                        </Link>
                    )}
                >
                    {children}
                </AppShell>
            </body>
        </html>
    );
}
