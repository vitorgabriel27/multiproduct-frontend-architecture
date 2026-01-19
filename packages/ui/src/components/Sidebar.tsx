import type { ReactNode, ReactElement } from 'react';

interface SidebarProps {
    links: { label: string; href: string; disabled?: boolean }[];
    title: string;
    LinkComponent?: (props: { href: string; children: ReactNode; className?: string }) => ReactElement;
}

export function Sidebar({ links, title, LinkComponent }: SidebarProps) {
    return (
        <aside className="w-64 bg-secondary border-r border-gray-200 p-4 flex flex-col">
            <h1 className="text-xl font-bold mb-6">{title}</h1>
            <nav className="flex flex-col gap-2">
                {links.map((link) =>
                    link.disabled ? (
                        <button
                            key={link.label}
                            disabled
                            className="p-2 flex flex-start rounded-sm text-gray-400 cursor-not-allowed"
                        >
                            {link.label}
                        </button>
                    ) : LinkComponent ? (
                        <LinkComponent
                            key={link.label}
                            href={link.href}
                            className="p-2 rounded-sm hover:bg-gray-100"
                        >
                            {link.label}
                        </LinkComponent>
                    ) : (
                        <a key={link.label} href={link.href} className="p-2 rounded-sm hover:bg-gray-100">
                            {link.label}
                        </a>
                    )
                )}
            </nav>
        </aside>
    );
}
