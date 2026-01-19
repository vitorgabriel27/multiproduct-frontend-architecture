'use client';

import './global.css';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AppShell } from '@multiproduct/ui';

const financeMenu = [
  { label: 'Home', href: '/finance' },
  { label: 'Dashboard', href: '/finance/dashboard' },
];

const operationsMenu = [
  { label: 'Home', href: '/operations' },
  { label: 'Tasks', href: '/operations/tasks' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const product = pathname.split('/')[1] as 'finance' | 'operations' | undefined;

  const menuConfig = {
    finance: { title: 'Finance Dashboard', links: financeMenu },
    operations: { title: 'Operations Dashboard', links: operationsMenu },
  };

  const config = product && product in menuConfig ? menuConfig[product as keyof typeof menuConfig] : null;

  return (
    <html lang="en">
      <body>
        {config ? (
          <AppShell
            title={config.title}
            links={config.links}
            LinkComponent={({ href, children, className }) => (
              <Link href={href} className={className}>
                {children}
              </Link>
            )}
          >
            {children}
          </AppShell>
        ) : (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <nav className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <h1 className="text-2xl font-bold text-gray-900">Multiproduct Dashboard</h1>
              </div>
            </nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/finance" className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-bold text-blue-600 mb-2">💰 Finance</h2>
                  <p className="text-gray-600">Access your finance dashboard and manage financial data.</p>
                </Link>
                <Link href="/operations" className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-bold text-green-600 mb-2">⚙️ Operations</h2>
                  <p className="text-gray-600">Manage operations and track tasks.</p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
