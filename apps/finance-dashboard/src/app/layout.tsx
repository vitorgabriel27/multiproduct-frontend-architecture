import './global.css';
import Link from 'next/link';
import { AppShell } from '@multiproduct/ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Overview', href: '#', disabled: true },
    { label: 'Reports', href: '#', disabled: true },
    { label: 'Settings', href: '#', disabled: true },
  ];

  return (
    <html lang="en">
      <body>
        <AppShell
          title="Finance Dashboard"
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
