# Stage 2 — Products Folder

Branch: `stage-2-products-folder`

## 🎯 Objetivo

No Stage 2, evoluímos a arquitetura para **introduzir produtos isolados**.  
Cada produto terá seu próprio **layout, menu e regras de negócio**, mas ainda reutiliza o **layout compartilhado** (`AppShell`) do Stage 1.  

O foco é:

- Mudança mental: pensar em frontend orientado a produto.
- Separação de responsabilidades.
- Preparar o terreno para features compartilháveis entre produtos.

---

## 🧠 Conceitos

- **Domain-driven front-end**
- **Configuração orientada a produto**
- **Boundary clara entre app e infra**
- **Menus e layouts configuráveis por produto**

---

## 📁 Estrutura do Stage 2

```text
products/
├─ finance/
│  ├─ app/
│  │   └─ layout.tsx           # Layout específico do produto
│  ├─ config/
│  │   └─ menu.ts              # Menu específico do produto
├─ operations/
│  ├─ app/
│  │   └─ layout.tsx           # Layout específico do produto
│  ├─ config/
│  │   └─ menu.ts              # Menu específico do produto
packages/
├─ ui/                          # AppShell compartilhado do Stage 1

⚠️ Por enquanto, os produtos não possuem páginas ou funcionalidades internas. Este stage serve apenas para mostrar a organização mental e a separação por produto.