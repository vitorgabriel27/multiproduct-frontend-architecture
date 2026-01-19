import type { ReactNode, ReactElement } from 'react';
import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

interface AppShellProps {
    children: ReactNode;
    title: string;
    links: { label: string; href: string; disabled?: boolean }[];
    LinkComponent?: (props: { href: string; children: ReactNode; className?: string }) => ReactElement;
}

export function AppShell({ children, title, links, LinkComponent }: AppShellProps) {
    return (
        <div className="flex h-screen">
            <Sidebar title={title} links={links} LinkComponent={LinkComponent} />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-6 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
