# @multiproduct/ui

React-first UI components for multiproduct apps.

## Design goals
- Framework-agnostic: no direct Next.js imports.
- Composition-friendly: pass routing components (e.g., Next `Link`) from apps.
- Minimal dependencies: React/ReactDOM as peers; Tailwind classes used but not bundled.

## Components
- `Header`: Top bar with user avatar placeholder.
- `Sidebar`: Navigation with support for disabled links.
- `AppShell`: Layout that composes `Header` and `Sidebar` without `html/body` wrappers.

## Usage with Next.js
```tsx
// apps/*/src/app/layout.tsx
import './global.css';
import { AppShell } from '@multiproduct/ui';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<AppShell
					title="Dashboard"
					links={[
						{ label: 'Home', href: '/' },
						{ label: 'Tasks', href: '/tasks' },
						{ label: 'Reports', href: '/reports', disabled: true },
					]}
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
```

## Development
```bash
pnpm nx build ui
```
