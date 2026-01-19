Perfeito! Vamos criar um **README claro e didático** para o **Stage-0** do workshop. Ele deve servir para quem está começando, mostrando o objetivo, como rodar o projeto e contextualizando a duplicação das apps.

Aqui está uma sugestão:

---

# Stage-0: Setup Inicial do Workshop Multi-Product Frontend

Este é o **Stage-0** da arquitetura frontend multi-product.
O objetivo desta etapa é **configurar o ambiente inicial** com duas aplicações Next.js separadas, estilizadas com Tailwind CSS, dentro de um monorepo Nx.

---

## 📌 Objetivos deste stage

* Criar um **monorepo Nx** chamado `frontend-multiproduct`
* Criar duas aplicações Next.js independentes:

  * `finance-dashboard`
  * `operations-dashboard`
* Configurar **Tailwind CSS** em ambas as aplicações
* Criar um **layout base duplicado** com Sidebar, Header e Main Content
* Criar **páginas internas simples** para cada aplicação
* Demonstrar **duplicação de código**, preparando o workshop para a **refatoração Stage-1**

---

## 🏗 Estrutura do Stage-0

```
apps/
├── finance-dashboard/
│   ├── src/app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── dashboard/page.tsx
│   │   └── global.css
├── operations-dashboard/
│   ├── src/app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── tasks/page.tsx
│   │   └── global.css
```

---

## ⚡ Como rodar

1. Instale dependências (recomendado: `pnpm`):

```bash
pnpm install
```

2. Inicie o **finance-dashboard**:

```bash
nx dev finance-dashboard
```

3. Inicie o **operations-dashboard**:

```bash
nx dev operations-dashboard
```

4. Acesse no navegador:

* Finance Dashboard: `http://localhost:4200`
* Operations Dashboard: `http://localhost:4201` (ou porta indicada pelo Nx)

---

## 📝 Observações

* Ambos os apps têm **layouts duplicados intencionalmente**.
* As páginas internas (`/dashboard` e `/tasks`) mostram conteúdo mínimo para exemplificar navegação.
* Links de páginas não criadas estão **desabilitados** no sidebar.
* Esse stage prepara o terreno para a **refatoração Stage-1**, onde componentes serão compartilhados entre os apps.

---

## 🎯 Próximo passo

* Refatorar o layout duplicado para **componentes compartilhados**
* Implementar **UI comum** para os dashboards
* Explorar **multi-product architecture** no workshop
