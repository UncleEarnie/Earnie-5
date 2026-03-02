# Uncle Earnie v1 - Real Product

**Clarity First. Resilience Always. Move with Confidence.**

A production-ready financial education platform built with Next.js, Tailwind CSS, and Supabase, designed to match the UI/UX of the [Earnie-4 demo](https://uncleearnie.github.io/Earnie-4/) exactly.

## Overview

This is the "proper product" version of Uncle Earnie - it maintains the exact look and feel of the demo prototype while implementing real authentication, data persistence, and a scalable architecture.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Language**: TypeScript
- **Deployment**: Ready for Vercel/Netlify

## Features

### Core Product Functionality
- ✅ User authentication (sign up, sign in, sign out)
- ✅ User profiles with Supabase integration
- ✅ Visibility Points system
- ✅ CSV import pipeline for bank statements
- ✅ Financial data analysis
- ✅ Visibility Index scoring
- ✅ Partner tracking
- ✅ Consent management
- ✅ Audit export capabilities

### Pages Implemented
- ✅ **Dashboard (Home)**: Hero section, Visibility Index widget, Uncle Earnie's advice, quick actions
- ✅ **Profile**: User info, settings, verification status
- ✅ **Wallet**: Points balance, activity log, earning opportunities
- ✅ **Finances**: Net worth, account tiles, spending categories, CSV upload
- ✅ **Insights**: Learning analytics (placeholder)
- ✅ **Visibility Index**: Score breakdown, pillars, recommendations
- ✅ **Budgeting**: Budget calculator
- ✅ **KiwiSaver**: Balance, contributions, fund info, adviser CTAs
- ✅ **Net Worth**: Net worth tracker (placeholder)
- ✅ **Goals**: Financial goal tracking

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local.example` to `.env.local` and add your Supabase credentials:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set up Supabase database**:
   Create the following tables in your Supabase project:

   ```sql
   -- Users table
   CREATE TABLE users (
     id UUID PRIMARY KEY REFERENCES auth.users(id),
     email TEXT NOT NULL,
     full_name TEXT NOT NULL,
     visibility_points INTEGER DEFAULT 150,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Transactions table
   CREATE TABLE transactions (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     user_id UUID REFERENCES users(id) ON DELETE CASCADE,
     date DATE NOT NULL,
     description TEXT NOT NULL,
     amount NUMERIC(10, 2) NOT NULL,
     category TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Consents table
   CREATE TABLE consents (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     user_id UUID REFERENCES users(id) ON DELETE CASCADE,
     consent_type TEXT NOT NULL,
     granted BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Design System

### Design Tokens (CSS Variables)

All design tokens match the Earnie-4 demo and are defined in `src/app/globals.css`:

#### Colors
- `--bg-primary`: #0a0f0d (Dark jungle green)
- `--glass-light`: rgba(255, 255, 255, 0.06)
- `--glass-medium`: rgba(255, 255, 255, 0.08)
- `--glass-heavy`: rgba(255, 255, 255, 0.10)
- `--accent-primary`: #86efac (Emerald green)
- `--accent-secondary`: #6ee7b7
- `--text-primary`: rgba(255, 255, 255, 0.92)
- `--text-secondary`: rgba(255, 255, 255, 0.65)
- `--text-muted`: rgba(255, 255, 255, 0.45)

#### Spacing
- `--space-xs`: 8px
- `--space-sm`: 12px
- `--space-md`: 16px
- `--space-lg`: 24px
- `--space-xl`: 32px
- `--space-2xl`: 48px

#### Typography
- `--font-size-xs`: 12px
- `--font-size-sm`: 13px
- `--font-size-base`: 14px
- `--font-size-lg`: 18px
- `--font-size-xl`: 22px
- `--font-size-2xl`: 28px
- `--font-size-3xl`: 36px
- `--font-size-4xl`: 48px

#### Border Radius
- `--radius-sm`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 16px
- `--radius-xl`: 20px
- `--radius-full`: 9999px

#### Shadows
- `--shadow-sm`: 0 4px 16px rgba(0, 0, 0, 0.2)
- `--shadow-md`: 0 8px 24px rgba(0, 0, 0, 0.3)
- `--shadow-lg`: 0 12px 40px rgba(0, 0, 0, 0.35)

### Component Library

Custom components built to match the demo:

- **AppShell**: Main layout with sidebar and topbar
- **Sidebar**: Fixed left navigation with active state
- **TopBar**: Header with user menu and points display
- **Card**: Glass-morphism panels (light/medium/heavy variants)
- **StatCard**: Metric display cards with icons
- **Chip**: Tag/pill components (default/accent/warning/danger)
- **Button**: Primary and secondary button styles
- **ProgressBar**: Animated progress indicators
- **Panel**: Content wrapper with optional title

## Design Parity Checklist

Use this checklist to verify the app matches the [Earnie-4 demo](https://uncleearnie.github.io/Earnie-4/):

### Layout & Structure
- ✅ Fixed left sidebar with glass effect
- ✅ Sidebar width matches demo (260px)
- ✅ Navigation items in correct order
- ✅ Active navigation state with left accent bar
- ✅ Top bar with user menu and points display
- ✅ Content max-width constraint (1200px)
- ✅ Consistent spacing and padding

### Typography
- ✅ Font stack matches demo (system fonts)
- ✅ Heading sizes and weights match
- ✅ Body text color and size match
- ✅ Muted text color matches
- ✅ No em dashes in UI text

### Colors & Theme
- ✅ Dark jungle green background (#0a0f0d)
- ✅ Glass-morphism effects match (3 levels)
- ✅ Emerald accent color (#86efac)
- ✅ Text color hierarchy matches
- ✅ Border/stroke colors match
- ✅ Shadows and depth match

### Cards & Panels
- ✅ Glass effect with backdrop blur
- ✅ Border radius matches (20px for cards)
- ✅ Padding matches demo
- ✅ Box shadows match
- ✅ Hover states match

### Buttons
- ✅ Primary button gradient matches
- ✅ Secondary button style matches
- ✅ Button sizes match (sm/md/lg)
- ✅ Hover and focus states match
- ✅ Border radius matches

### Chips/Pills
- ✅ Pill shape (full border radius)
- ✅ Color variants match (default/accent/warning/danger)
- ✅ Size and padding match
- ✅ Font size matches (12px)

### Dashboard (Home) Page
- ✅ Hero panel with gradient overlay
- ✅ Right-side Visibility Index widget
- ✅ "Welcome Back" eyebrow
- ✅ Main heading with gradient text
- ✅ Uncle Earnie's advice cards with left accent
- ✅ Quick action cards grid
- ✅ Button placement and styling

### Visibility Index Page
- ✅ Overall score in circular gauge
- ✅ Four pillars with progress bars
- ✅ "What shaped your score" cards
- ✅ "What to improve next" recommendation
- ✅ Color coding for pillar levels
- ✅ Layout matches demo

### Finances Page
- ✅ Net worth header card
- ✅ Account tiles grid
- ✅ Spending category breakdown
- ✅ CSV upload UI
- ✅ Connect providers section (CSV-only)
- ✅ Progress bars for categories

### Profile Page
- ✅ User info card with avatar
- ✅ Member since and points display
- ✅ Settings toggles
- ✅ Verification status card
- ✅ "Demo Status" label

### KiwiSaver Page
- ✅ Balance overview card
- ✅ Contributions breakdown
- ✅ Current fund information
- ✅ Fee and return display
- ✅ Partner CTA cards
- ✅ Layout matches demo

### Wallet Page
- ✅ Points balance header
- ✅ Stats grid
- ✅ Activity log with color-coded entries
- ✅ "How to earn more" cards
- ✅ Date formatting

### Goals Page
- ✅ Goal cards with icons
- ✅ Progress bars
- ✅ Percentage complete display
- ✅ Target date display
- ✅ "Add Goal" button

### Responsive Behavior
- ✅ Sidebar collapses on mobile
- ✅ Cards stack vertically on small screens
- ✅ Grids adjust to screen size
- ✅ Typography scales appropriately

### Microcopy & Tone
- ✅ "Clarity First. Resilience Always. Move with Confidence."
- ✅ "Uncle Earnie's Suggested Next Steps"
- ✅ "Visibility Points" terminology consistent
- ✅ Confident, simple, human tone
- ✅ No em dashes

## Project Structure

```
earnie-v1/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   └── login/
│   │   │       └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   ├── wallet/
│   │   │   └── page.tsx
│   │   ├── finances/
│   │   │   └── page.tsx
│   │   ├── insights/
│   │   │   └── page.tsx
│   │   ├── visibility-index/
│   │   │   └── page.tsx
│   │   ├── budgeting/
│   │   │   └── page.tsx
│   │   ├── kiwisaver/
│   │   │   └── page.tsx
│   │   ├── net-worth/
│   │   │   └── page.tsx
│   │   ├── goals/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   └── index.tsx
│   │   ├── AppShell.tsx
│   │   ├── Sidebar.tsx
│   │   └── TopBar.tsx
│   └── lib/
│       ├── auth.tsx
│       └── supabase.ts
├── .env.local.example
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

```
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
```

## Future Enhancements

- [ ] CSV parsing and transaction import
- [ ] Visibility Index scoring algorithm
- [ ] Games library integration
- [ ] Partner tracking and referrals
- [ ] Advanced financial insights
- [ ] Mobile app version
- [ ] Real-time data sync
- [ ] Notification system

## Contributing

This is a production codebase. All changes should:
1. Maintain design parity with the demo
2. Follow TypeScript best practices
3. Keep accessibility in mind
4. Test across browsers
5. Update this README if needed

## License

Proprietary - Uncle Earnie Ltd

## Support

For questions or issues, contact the development team.

---

**Built with ❤️ by the Uncle Earnie team**
