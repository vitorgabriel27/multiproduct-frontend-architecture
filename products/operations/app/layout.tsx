import './global.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { AppShell } from '@multiproduct/ui';
import { operationsMenu } from '../config/menu';

export default function OperationsLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
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
            </body>
        </html>
    );
}
