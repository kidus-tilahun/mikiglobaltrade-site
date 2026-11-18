# Project Architecture & Rules

- **Framework:** Next.js (App Router) with TypeScript (strict mode).
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";` in `globals.css`). Do NOT create a `tailwind.config.ts` or PostCSS config.
- **Lead Capture / Forms:** All contact, quote, or inquiry forms must submit via a Next.js Server Action or Route Handler (`/api/lead`) that sends a formatted Markdown message directly to a Telegram Bot using `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` from `.env.local`.
- **Design Standard:** High-converting, modern B2B/corporate UI, mobile-first, accessible, fast-loading, with clear CTAs, social proof placeholders, and SEO metadata generated from the company profile.
- **Execution:** Write clean, modular components under `src/components/`. Do not leave `TODO` placeholders in UI copy—extract real copy from `@docs/company-profile`.
