import './global.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { AppShell } from '@multiproduct/ui';
import { operationsMenu } from '../config/menu';

// Pure component for product shell (without html/body)
export function OperationsShell({ children }: { children: ReactNode }) {
    return (
        <AppShell
            title="Operations Dashboard"
            links={operationsMenu}
            LinkComponent={({ href, children, className }) => (
                <Link href={href} className={className}>
                    {children}
                </Link>
            )}
        >
            {children}
        </AppShell>
    );
}

export default function OperationsLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <OperationsShell>{children}</OperationsShell>
            </body>
        </html>
    );
}
