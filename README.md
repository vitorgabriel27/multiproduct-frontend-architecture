# Stage 1 — Shared Layout

Branch: `stage-1-shared-layout`

## Objetivo

Neste stage, o foco é fazer a **primeira refatoração segura** do monorepo:

* Extrair o layout comum das aplicações (`finance-dashboard` e `operations-dashboard`) para um **pacote compartilhado**.
* Mostrar os **ganhos imediatos** da abordagem DRY.
* Estabelecer **separação de responsabilidades** e boundary entre apps e infra.

---

## O que foi implementado

### 1. Package `@multiproduct/ui` - Biblioteca compartilhada

Uma biblioteca React-first que centraliza todos os componentes comuns:

#### Layout Components
- **`AppShell`**: Layout principal que compõe Header + Sidebar + conteúdo
- **`Header`**: Barra superior com avatar do usuário
- **`Sidebar`**: Navegação lateral com suporte para links desabilitados
  - Aceita `LinkComponent` prop para integração com Next.js Link

#### shadcn/ui Components (centralizados)
- `Avatar` - Avatar de usuário com fallback
- `Badge` - Badges para status e labels
- `Button` - Botão com variantes (default, destructive, outline, etc)
- `Card` - Cards para conteúdo estruturado (Card, CardHeader, CardTitle, CardContent, CardFooter)
- `Separator` - Separadores visuais

#### Utilities
- `cn()` - Helper para merge de classes Tailwind (clsx + tailwind-merge)

### 2. Integração com Next.js App Router

Ambas as aplicações (`finance-dashboard` e `operations-dashboard`) consomem os componentes compartilhados:

```tsx
import { AppShell } from '@multiproduct/ui';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell
          title="Dashboard"
          links={[...]}
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

### 3. Configurações otimizadas

- **TypeScript**: Strict mode com ESM (nodenext)
- **Tailwind**: JIT mode escaneando componentes compartilhados
- **Nx**: Build cache e task orchestration
- **pnpm**: Workspaces com protocolo `workspace:*`

---

## Estrutura

```text
apps/
├─ finance-dashboard/          # App Next.js para finanças
│  ├─ src/
│  │  └─ app/
│  │     ├─ layout.tsx         # Usa AppShell de @multiproduct/ui
│  │     ├─ page.tsx
│  │     └─ dashboard/page.tsx
│  └─ tailwind.config.js       # Escaneia packages/ui
│
├─ operations-dashboard/       # App Next.js para operações
│  ├─ src/
│  │  └─ app/
│  │     ├─ layout.tsx         # Usa AppShell de @multiproduct/ui
│  │     ├─ page.tsx
│  │     └─ tasks/page.tsx
│  └─ tailwind.config.js       # Escaneia packages/ui
│
packages/
└─ ui/                         # Biblioteca compartilhada
   ├─ src/
   │  ├─ components/
   │  │  ├─ Header.tsx
   │  │  ├─ Sidebar.tsx
   │  │  └─ ui/               # shadcn/ui components
   │  │     ├─ avatar.tsx
   │  │     ├─ badge.tsx
   │  │     ├─ button.tsx
   │  │     ├─ card.tsx
   │  │     └─ separator.tsx
   │  ├─ layout/
   │  │  ├─ AppShell.tsx      # Layout principal
   │  │  └─ RootLayout.tsx    # Alias para AppShell (deprecated)
   │  ├─ lib/
   │  │  └─ utils.ts          # Função cn() e helpers
   │  └─ index.ts             # Barrel exports
   ├─ dist/                   # Build output (JS + types)
   └─ package.json
```

---

## Princípios de Design

### React-first, Framework-agnostic
- Componentes não dependem de Next.js diretamente
- Integração via composition (ex: `LinkComponent` prop)
- Pode ser usado em outros frameworks React (Remix, etc)

### Centralização de componentes UI
- **Antes**: componentes shadcn duplicados em cada app
- **Agora**: uma única source of truth em `@multiproduct/ui`
- Mudanças afetam todos os apps automaticamente

### Type-safety e ESM
- TypeScript strict mode
- Module resolution: `nodenext` (ESM puro)
- Imports com `.js` extension para compatibilidade

### Tailwind JIT otimizado
- Apps escaneiam `packages/ui/src/**/*.tsx`
- Classes geradas on-demand
- Zero duplicação de CSS

---

## Como usar

### Instalação

```bash
pnpm install
```

### Desenvolvimento

```bash
# Finance Dashboard
pnpm nx dev finance-dashboard

# Operations Dashboard
pnpm nx dev operations-dashboard

# Build da biblioteca compartilhada
pnpm nx build ui
```

### Importando componentes

```tsx
// Layout e componentes customizados
import { AppShell, Header, Sidebar } from '@multiproduct/ui';

// shadcn/ui components
import { Card, CardHeader, CardTitle, CardContent } from '@multiproduct/ui';
import { Button } from '@multiproduct/ui';
import { Avatar, AvatarImage, AvatarFallback } from '@multiproduct/ui';

// Utilities
import { cn } from '@multiproduct/ui';
```

### Adicionando novos componentes shadcn

1. Gere o componente normalmente com shadcn CLI em qualquer app
2. Mova o arquivo para `packages/ui/src/components/ui/`
3. Atualize imports de `@/lib/utils` para `../../lib/utils.js`
4. Exporte no `packages/ui/src/index.ts`
5. Rebuild: `pnpm nx build ui`
6. Remova componente duplicado dos apps

---

## Benefícios alcançados

✅ **Zero duplicação** de componentes UI entre apps  
✅ **Single source of truth** para design system  
✅ **Type-safety** end-to-end com TypeScript  
✅ **Performance** com Nx build cache e Tailwind JIT  
✅ **Developer Experience** com imports limpos e autocomplete  
✅ **Manutenibilidade** - mudanças propagam automaticamente  
✅ **Escalabilidade** - novos apps reutilizam tudo instantaneamente

---

## Tecnologias

- **Nx** - Monorepo build system e task orchestration
- **Next.js 16** - App Router para ambos os apps
- **React 19** - Framework de UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **pnpm** - Fast, disk space efficient package manager
- **Radix UI** - Primitives para componentes acessíveis