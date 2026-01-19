import Link from 'next/link';
import './global.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
          <h1 className="text-xl font-bold mb-6">Finance Dashboard</h1>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="p-2 rounded-sm hover:bg-gray-100">Overview</Link>
            <Link href="/dashboard" className="p-2 rounded-sm hover:bg-gray-100">Dashboard</Link>
            <a href="#" className="p-2 rounded-sm hover:bg-gray-100">Settings</a>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Olá, Usuário</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </header>

          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
