# Quick Start Guide

## Prerequisites Checklist

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm or yarn installed
- [ ] Supabase account created at [supabase.com](https://supabase.com)
- [ ] Git installed (optional, for version control)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Supabase client
- Tailwind CSS
- TypeScript

### 2. Configure Supabase

1. **Create a new Supabase project** at [supabase.com/dashboard](https://supabase.com/dashboard)

2. **Copy your project credentials**:
   - Go to Project Settings > API
   - Copy the "Project URL" and "anon/public" key

3. **Create `.env.local` file** in the project root:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. **Set up database tables**:
   - Go to SQL Editor in Supabase dashboard
   - Run this SQL:

   ```sql
   -- Enable UUID extension
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

   -- Users table
   CREATE TABLE public.users (
     id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
     email TEXT NOT NULL UNIQUE,
     full_name TEXT NOT NULL,
     visibility_points INTEGER DEFAULT 150,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable RLS (Row Level Security)
   ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

   -- Create policy to allow users to read their own data
   CREATE POLICY "Users can view own data" ON public.users
     FOR SELECT USING (auth.uid() = id);

   -- Create policy to allow users to update their own data
   CREATE POLICY "Users can update own data" ON public.users
     FOR UPDATE USING (auth.uid() = id);

   -- Transactions table
   CREATE TABLE public.transactions (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
     date DATE NOT NULL,
     description TEXT NOT NULL,
     amount NUMERIC(10, 2) NOT NULL,
     category TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable RLS
   ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

   -- Policy for transactions
   CREATE POLICY "Users can view own transactions" ON public.transactions
     FOR SELECT USING (auth.uid() = user_id);

   CREATE POLICY "Users can insert own transactions" ON public.transactions
     FOR INSERT WITH CHECK (auth.uid() = user_id);

   -- Consents table
   CREATE TABLE public.consents (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
     consent_type TEXT NOT NULL,
     granted BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable RLS
   ALTER TABLE public.consents ENABLE ROW LEVEL SECURITY;

   -- Policy for consents
   CREATE POLICY "Users can view own consents" ON public.consents
     FOR SELECT USING (auth.uid() = user_id);

   CREATE POLICY "Users can insert own consents" ON public.consents
     FOR INSERT WITH CHECK (auth.uid() = user_id);

   CREATE POLICY "Users can update own consents" ON public.consents
     FOR UPDATE USING (auth.uid() = user_id);
   ```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create Your First Account

1. Click "Sign up" on the login page
2. Enter your details
3. Check your email for verification (if email confirmation is enabled)
4. Sign in and explore!

## Troubleshooting

### "Invalid API key" error
- Double-check your `.env.local` file
- Make sure you copied the **anon/public** key, not the service_role key
- Restart the dev server after changing `.env.local`

### "Cannot connect to database" error
- Check your Supabase project is active
- Verify the URL is correct (should be `https://your-project.supabase.co`)
- Check your internet connection

### Styling doesn't match demo
- Clear your browser cache
- Make sure `globals.css` is properly imported in `layout.tsx`
- Check that CSS variables are loading in browser DevTools

### Sign up not working
- Check Supabase email settings (Project Settings > Authentication)
- Look at Supabase logs for errors
- Verify the users table was created correctly

## Development Tips

### Hot Reload
Next.js will automatically reload when you save files. If it doesn't:
- Check terminal for errors
- Restart the dev server (`Ctrl+C`, then `npm run dev`)

### Viewing Database
- Use Supabase Table Editor to see your data
- SQL Editor for running queries
- API logs for debugging requests

### Design System
All design tokens are in `src/app/globals.css`. To customize:
- Modify CSS variables in `:root`
- Changes will apply across the entire app
- Keep the demo look by default!

## Next Steps

1. **Test all pages**: Navigate through each section
2. **Upload CSV**: Try the Finances page CSV upload
3. **Customize**: Add your own features while maintaining design parity
4. **Deploy**: Follow the README deployment guide

## Getting Help

- Check the main README.md for detailed documentation
- Review the Design Parity Checklist
- Compare with the demo: [https://uncleearnie.github.io/Earnie-4/](https://uncleearnie.github.io/Earnie-4/)

## Common Tasks

### Add a new page
1. Create `src/app/your-page/page.tsx`
2. Add route to Sidebar navigation
3. Use `<AppShell>` wrapper
4. Match demo styling

### Modify colors
Edit `src/app/globals.css`:
```css
:root {
  --accent-primary: #86efac; /* Change this */
}
```

### Add a new component
Create in `src/components/` and import where needed. Follow existing patterns for consistency.

---

**You're ready to go! 🚀**
