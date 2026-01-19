import './global.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { AppShell } from '@multiproduct/ui';

export default function RootLayout({ children }: { children: ReactNode }) {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Tasks', href: '/tasks' },
  ];

  return (
    <html lang="en">
      <body>
        <AppShell
          title="Operations Dashboard"
          links={links}
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
