# 📂 Document Manager App (Frontend)

A responsive document management interface built with Next.js, TypeScript, Tailwind CSS, and mock API endpoints. Designed for both admin and user roles.

## 🔧 Features

- 🔐 Signup / Login with role-based routing
- 👨‍💼 Admin: manage users (view, update role, delete)
- 📤 Upload documents (title, description, file)
- 🤖 Ask Questions via Q&A interface
- 🚦 Ingestion page
- 🎨 Responsive layout with mobile sidebar
- ✅ Toast notifications and animations

## 🛠️ Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hot Toast

## 🧪 Mock API

Used mock DB (`lib/mockDb.ts`) with custom API routes inside `app/api`.

## 🚀 Getting Started

```bash
git clone https://github.com/gokul537/doc-manager-app.git
cd doc-manager-app
npm install
npm run dev
