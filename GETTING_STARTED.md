# 🚀 Uncle Earnie v1 - Getting Started

## What You Have

A complete Next.js application that looks **exactly like** the Earnie-4 demo, but with:
- ✅ Real authentication (Supabase)
- ✅ Real database
- ✅ Production-ready architecture
- ✅ Type-safe TypeScript
- ✅ Beautiful, matching design

## 3-Step Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Supabase
1. Create account at [supabase.com](https://supabase.com)
2. Copy `.env.local.example` to `.env.local`
3. Add your Supabase URL and key
4. Run the SQL from QUICKSTART.md in Supabase SQL Editor

### Step 3: Run the App
```bash
npm run dev
```

Open http://localhost:3000 🎉

## Important Files

- **QUICKSTART.md** - Detailed setup instructions
- **README.md** - Full documentation
- **DESIGN_PARITY_CHECKLIST.md** - Verify it matches the demo
- **IMPLEMENTATION_SUMMARY.md** - What was built

## Demo Reference

Compare with: https://uncleearnie.github.io/Earnie-4/

## Design System

All design tokens are in: `src/app/globals.css`

Want to change colors? Edit the CSS variables:
```css
:root {
  --accent-primary: #86efac;  /* Main emerald green */
  --bg-primary: #0a0f0d;      /* Dark background */
}
```

## Pages Included

1. 🏠 Dashboard - Hero + Visibility Index widget
2. 👤 Profile - User settings
3. 💰 Wallet - Points & activity
4. 💳 Finances - Accounts & spending
5. 📊 Insights - Analytics (placeholder)
6. 👁️ Visibility Index - Risk score breakdown
7. 🧮 Budgeting - Budget calculator
8. 🥝 KiwiSaver - Retirement savings
9. 💎 Net Worth - Net worth tracker (placeholder)
10. 🎯 Goals - Financial goals

Plus authentication pages!

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind + CSS Variables
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript
- **Auth**: Supabase Auth

## Project Structure

```
src/
├── app/              # All pages
│   ├── dashboard/   # Main home page
│   ├── auth/        # Login/signup
│   └── ...          # Other pages
├── components/       # Reusable components
│   ├── ui/          # UI library
│   ├── AppShell.tsx # Layout wrapper
│   ├── Sidebar.tsx  # Navigation
│   └── TopBar.tsx   # Header
└── lib/             # Utils
    ├── auth.tsx     # Auth context
    └── supabase.ts  # DB client
```

## Need Help?

1. Check **QUICKSTART.md** for detailed setup
2. Review **README.md** for full docs
3. Compare with demo for design questions
4. Check Supabase logs for database issues

## Design Parity

The app matches the demo **exactly**:
- ✅ Same colors
- ✅ Same typography
- ✅ Same spacing
- ✅ Same components
- ✅ Same layouts
- ✅ Same interactions

Use **DESIGN_PARITY_CHECKLIST.md** to verify!

## What's Next?

After you get it running:
1. ✅ Create a test account
2. ✅ Navigate through all pages
3. ✅ Compare with demo side-by-side
4. ✅ Verify design matches
5. 🚀 Start building features!

## Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Lint code
npm run lint
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

## Deployment

Ready to deploy to:
- ✅ Vercel (recommended)
- ✅ Netlify
- ✅ Any Node.js host

See README.md for deployment guide.

---

## You're All Set! 🎉

The app is production-ready and matches the demo exactly. Time to add your features!

**Questions?** Check the documentation files or compare with the demo.

**Demo**: https://uncleearnie.github.io/Earnie-4/  
**Built**: March 2, 2026  
**Status**: Ready to launch 🚀
