# TICP: Toplorgical Insurance Compliance Platform

TICP is a modern, responsive web application for digital insurance compliance, built for Nigeria's NIIRA 2025 initiative. It provides dashboards, reporting, and certificate management for insurers, regulators, and other stakeholders.

## Features
- **Dashboard**: Central hub for users with quick access to reports, certificates, claims, and settings.
- **Responsive UI**: Mobile-first design using Tailwind CSS and shadcn/ui components.
- **Authentication**: Login, registration, and password recovery flows.
- **Role-based Layouts**: Navbar and Footer are hidden on dashboard routes for a focused workspace.
- **Modern Navigation**: Responsive sidebar/drawer for dashboard navigation, with animated transitions.
- **Forms & Validation**: Built with React Hook Form and Zod for robust form handling.
- **Data Fetching**: Uses TanStack React Query for efficient server state management.
- **Reusable UI Components**: Accordion, dialogs, tooltips, toasts, and more.

## Tech Stack
- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router v6](https://reactrouter.com/)
- [TanStack React Query](https://tanstack.com/query/latest)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   bun install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   # or
   bun run dev
   ```
3. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure
- `src/App.tsx` — Main app entry, handles routing and layout logic.
- `src/pages/` — Page components (Home, About, Dashboard, etc).
- `src/components/` — UI and layout components, including dashboard navigation and layout.
- `src/components/dashboard/DashboardLayout.tsx` — Responsive dashboard shell with animated navigation.
- `public/` — Static assets and icons.

## Customization
- **Tailwind config:** See `tailwind.config.ts` for theme and color settings.
- **UI components:** Easily extend or replace shadcn/ui components in `src/components/ui/`.

## License
MIT
