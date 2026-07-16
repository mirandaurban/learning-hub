# Atlas — Knowledge Map App

Aplicación standalone para consolidar y explorar conocimiento. Independiente del portfolio.

## Estructura

```
atlas-app/
├── src/
│   ├── content/
│   │   ├── assets/
│   │   └── ...
│   ├── components/
│   │   ├── Sidebar.astro
│   │   ├── NoteCard.astro
│   │   ├── TagCloud.astro
│   │   └── SearchBar.astro
│   ├── layouts/
│   │   ├── AppLayout.astro
│   │   └── NoteLayout.astro
│   ├── pages/
│   │   ├── index.astro       (dashboard)
│   │   └── [...slug].astro   (notas individuales)
│   ├── lib/
│   │   ├── icon.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

## Setup rápido

```bash
# 1. Instala dependencias
npm install

# 2. Ejecuta
npm run dev
# Abre http://localhost:3000
```

## Características

- **Dashboard** con stats y búsqueda
- **Cards** modulares por nota
- **Filtros** por área y tags
- **Búsqueda** en tiempo real
- **Conexiones** entre notas
- **Áreas** agrupadas
- **Tags cloud** interactivo
- **Notas individuales** en página propia
- **Diseño app-like** responsivo
  **Dark/Light mode**

## Áreas disponibles

- Computer Science
- Machine Learning
- Matemáticas
- Filosofía
- Geopolítica
- Biología
- Economía
- Apuntes Tec
- Otros

## Cómo agregar notas

```bash
# Crea archivos en src/content/
# Ejemplo: src/content/binary-search.md
```

Frontmatter:

```yaml
---
title: Binary Search
description: Algoritmo O(log n)
area: Computer Science
tags: [algorithms, search]
date: 2024-07-14

relatedConcepts:
  - Big O Notation
  - Divide and Conquer

courses:
  - name: MIT 6.006
    link: https://ocw.mit.edu/...

books:
  - title: CLRS
    author: Cormen et al.
    link: https://amazon.com/...

projects:
  - name: My Algorithms Repo
    link: https://github.com/...

---
Tu contenido en markdown...
```

## Notas importantes

- Todos los links deben ser URLs completas (http/https)
- Las áreas deben ser exactas (case-sensitive)
- Tags son libres (cualquier palabra)
- `relatedConcepts` apunta a otros slugs de Atlas
- Archivos deben estar en `src/content/atlas/` (sin subcarpetas por ahora)

## Deploy

```bash
# Build
npm run build

# Deploy a Vercel
vercel deploy
```
