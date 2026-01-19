# Stage 1 — Shared Layout

Branch: `stage-1-shared-layout`

## Objetivo

Neste stage, o foco é fazer a **primeira refatoração segura** do monorepo:

* Extrair o layout comum das aplicações (`finance-dashboard` e `operations-dashboard`) para um **pacote compartilhado**.
* Mostrar os **ganhos imediatos** da abordagem DRY.
* Estabelecer **separação de responsabilidades** e boundary entre apps e infra.

---

## O que foi feito

1. Criado o package `@multiproduct/ui` para abrigar o layout compartilhado.
2. Refatorado `RootLayout`(`AppShell`) das aplicações para consumir o layout do package.
3. Configurado Tailwind e CSS global no pacote compartilhado.
4. Garantido que os estilos funcionem tanto no `finance-dashboard` quanto no `operations-dashboard`.
5. Demonstração de como compartilhar **componentes, estilos e variáveis globais** entre apps.

---

## Conceitos aplicados

* **DRY (Don't Repeat Yourself):** evita duplicação de layout e estilos entre apps.
* **Separação de responsabilidades:** cada app mantém sua lógica e roteamento, mas consome layout comum.
* **Boundary entre app e infra:** `@multiproduct/ui` atua como boundary clara, facilitando manutenção e escalabilidade.

---

## Estrutura

```text
apps/
├─ finance-dashboard/
│  └─ src/
│     └─ app/ (pages específicas da aplicação)
├─ operations-dashboard/
│  └─ src/
│     └─ app/ (pages específicas da aplicação)

packages/
└─ ui/
   ├─ src/
   │  ├─ layout/RootLayout.tsx
   │  ├─ global.css
   │  └─ components/...
   └─ package.json
```

---

## Como rodar

Certifique-se de ter **pnpm** instalado:

```bash
pnpm install
pnpm nx serve finance-dashboard
pnpm nx serve operations-dashboard
```

> Ambas as aplicações devem renderizar o layout compartilhado corretamente.

---

## Próximos passos

* Criar páginas internas para cada aplicação (Stage 1.1)
* Introduzir **componentes compartilhados adicionais** no pacote `ui`
* Preparar para **Stage 2**, onde começaremos a trabalhar com multi-product architecture e compartilhamento de features entre apps.