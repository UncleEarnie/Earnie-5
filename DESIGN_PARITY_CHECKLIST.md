# Design Parity Verification Checklist

Compare the live app with the demo at: https://uncleearnie.github.io/Earnie-4/

## Overall Layout ✅

- [ ] Dark jungle green background (#0a0f0d)
- [ ] Radial gradient from top-left
- [ ] Maximum content width (1920px container)
- [ ] Proper spacing and padding throughout
- [ ] Glass-morphism effects consistent

## Sidebar Navigation ✅

- [ ] Fixed left sidebar, 260px wide
- [ ] Glass effect with backdrop blur
- [ ] "Uncle Earnie" branding in emerald green
- [ ] "Financial Education" subtitle in muted color
- [ ] All 10 navigation items present and ordered correctly:
  1. Home 🏠
  2. Profile 👤
  3. Wallet 💰
  4. Finances 💳
  5. Insights 📊
  6. Visibility Index 👁️
  7. Budgeting 🧮
  8. KiwiSaver 🥝
  9. Net Worth 💎
  10. Goals 🎯
- [ ] Active state shows emerald background
- [ ] Active state shows left accent bar (3px emerald)
- [ ] Hover states work correctly
- [ ] Icons match demo style
- [ ] Font size: 13px for nav items
- [ ] Proper gap between items (4px)

## Top Bar ✅

- [ ] Visibility Points display in pill shape
- [ ] "Logged in as..." dropdown button
- [ ] User name from Supabase displayed
- [ ] Sign out button in dropdown
- [ ] Dropdown has glass effect
- [ ] Menu toggle button (hidden on desktop)
- [ ] Proper spacing and alignment

## Typography ✅

- [ ] System font stack used
- [ ] H1: 48px, 800 weight
- [ ] H2: 36px, 700 weight
- [ ] H3: 22px, 600 weight
- [ ] H4: 18px, 600 weight
- [ ] Body: 14px, 400 weight
- [ ] Small text: 13px
- [ ] Tiny text: 12px
- [ ] Primary text: rgba(255,255,255,0.92)
- [ ] Secondary text: rgba(255,255,255,0.65)
- [ ] Muted text: rgba(255,255,255,0.45)
- [ ] Accent text: #86efac
- [ ] Line height: 1.5 for body text
- [ ] Line height: 1.2 for headings

## Cards & Panels ✅

- [ ] Glass effect cards (3 variants working)
- [ ] Border radius: 20px for cards
- [ ] Border: 1px solid rgba(255,255,255,0.10)
- [ ] Backdrop blur applied
- [ ] Box shadows match demo depths
- [ ] Padding: lg = 32px, md = 24px, sm = 16px
- [ ] Card headers properly styled

## Buttons ✅

- [ ] Primary: Emerald gradient background
- [ ] Primary text: Dark (#0a0f0d)
- [ ] Secondary: Transparent with border
- [ ] Border radius: 12px
- [ ] Font weight: 600
- [ ] Sizes: sm (8/16px), md (12/24px), lg (14/28px)
- [ ] Hover states work
- [ ] Disabled state (50% opacity)
- [ ] Cursor: pointer on enabled

## Chips/Pills ✅

- [ ] Full border radius (9999px)
- [ ] Padding: 4px 12px
- [ ] Font size: 12px
- [ ] Font weight: 600
- [ ] Default variant: glass background
- [ ] Accent variant: emerald background + border
- [ ] Warning variant: yellow background + border
- [ ] Danger variant: red background + border

## Dashboard Page ✅

- [ ] Hero panel with gradient overlay
- [ ] "Welcome Back" eyebrow badge
- [ ] Main heading with gradient text effect
- [ ] Subtitle text and description
- [ ] Primary and secondary buttons
- [ ] Right-side Visibility Index widget (240px wide)
- [ ] Score display (67/100)
- [ ] "Risk Visibility: Hazy" label
- [ ] Uncle Earnie's advice section
- [ ] 3 advice cards with left accent bars
- [ ] Icons in advice cards
- [ ] Quick actions grid (3 columns)
- [ ] Hero panel min-height: 420px

## Visibility Index Page ✅

- [ ] Page header with title and description
- [ ] Overall score card with circular display
- [ ] Score: 67 in large emerald text
- [ ] Four pillars listed with scores
- [ ] Progress bars for each pillar
- [ ] Color-coded levels (Strong/Steady/Developing)
- [ ] "What shaped your score" cards grid
- [ ] Icons in metric cards
- [ ] "What to improve next" recommendation
- [ ] Left accent bar on recommendation (warning color)

## Finances Page ✅

- [ ] "Upload CSV" button in header
- [ ] Net worth header card with large number
- [ ] Percentage change indicator (green arrow)
- [ ] Account tiles grid
- [ ] Account type chips (Transaction/Savings/Credit)
- [ ] Balance amounts with proper formatting
- [ ] Negative balances in red
- [ ] Spending categories section
- [ ] Category progress bars
- [ ] Percentage labels
- [ ] "Connect Your Accounts" section
- [ ] Bank provider cards (grayed out, CSV-only)
- [ ] CSV upload dropzone styling

## Profile Page ✅

- [ ] User avatar circle (120px)
- [ ] Gradient background on avatar
- [ ] User name from Supabase
- [ ] Email display
- [ ] "Demo Status" chip
- [ ] Member since date
- [ ] Visibility Points display
- [ ] Edit profile button (secondary style)
- [ ] Settings toggles (3 items)
- [ ] Toggle switches styled correctly
- [ ] Verification/KYC card
- [ ] "Demo Mode" warning chip

## Wallet Page ✅

- [ ] Large points balance display
- [ ] Stats grid (3 cards)
- [ ] Activity log cards
- [ ] Color-coded activity (green earned/red spent)
- [ ] Date formatting (NZ format)
- [ ] Left accent bars on activity items
- [ ] "How to earn more" cards grid
- [ ] Icons in earning method cards

## KiwiSaver Page ✅

- [ ] Balance overview card (2 columns)
- [ ] Current balance large display
- [ ] Projected retirement value
- [ ] Contributions breakdown (3 columns)
- [ ] Current fund information card
- [ ] "Switch Fund" button
- [ ] Fee, return, and risk display
- [ ] Partner CTA cards
- [ ] Adviser consultation CTAs

## Other Pages ✅

### Insights
- [ ] Page header
- [ ] "Coming Soon" placeholder with icon
- [ ] Centered content

### Budgeting
- [ ] Page header
- [ ] Calculator form
- [ ] Form inputs styled correctly
- [ ] Labels match demo

### Net Worth
- [ ] Page header
- [ ] "Coming Soon" placeholder with icon

### Goals
- [ ] Page header
- [ ] "Add Goal" button in header
- [ ] Goal cards grid
- [ ] Icons on cards
- [ ] Progress bars
- [ ] Percentage complete
- [ ] Target dates

## Auth Pages ✅

### Login
- [ ] Centered card with glass effect
- [ ] Uncle Earnie branding
- [ ] "Sign In" heading
- [ ] Email and password inputs
- [ ] Form inputs styled correctly
- [ ] Primary button for submit
- [ ] "Sign up" link at bottom
- [ ] Error messages styled (danger variant)

### Sign Up
- [ ] Same layout as login
- [ ] Full name field added
- [ ] "Create Account" heading
- [ ] "Sign in" link at bottom

## Responsive Behavior ✅

- [ ] Sidebar becomes overlay on mobile
- [ ] Menu toggle appears on mobile
- [ ] Sidebar overlay backdrop
- [ ] Cards stack vertically on small screens
- [ ] Grids adjust columns (auto-fit)
- [ ] Hero panel becomes single column
- [ ] Font sizes remain readable
- [ ] Buttons remain accessible

## Colors & Gradients ✅

- [ ] Background: #0a0f0d
- [ ] Glass light: rgba(255,255,255,0.06)
- [ ] Glass medium: rgba(255,255,255,0.08)
- [ ] Glass heavy: rgba(255,255,255,0.10)
- [ ] Glass border: rgba(255,255,255,0.10)
- [ ] Accent primary: #86efac
- [ ] Accent secondary: #6ee7b7
- [ ] Accent muted: rgba(134,239,172,0.15)
- [ ] Danger: #fca5a5
- [ ] Warning: #fbbf24
- [ ] Primary gradient: 135deg, #86efac to #6ee7b7
- [ ] Hero overlay gradient matches demo

## Spacing & Rhythm ✅

- [ ] Consistent 8px spacing rhythm
- [ ] xs: 8px
- [ ] sm: 12px
- [ ] md: 16px
- [ ] lg: 24px
- [ ] xl: 32px
- [ ] 2xl: 48px
- [ ] App container padding: 24px
- [ ] Card padding consistent
- [ ] Gap between elements consistent

## Shadows ✅

- [ ] sm: 0 4px 16px rgba(0,0,0,0.2)
- [ ] md: 0 8px 24px rgba(0,0,0,0.3)
- [ ] lg: 0 12px 40px rgba(0,0,0,0.35)
- [ ] Cards use md shadow
- [ ] Dropdowns use lg shadow

## Interactions ✅

- [ ] Smooth transitions (0.2s-0.3s)
- [ ] Hover states on buttons
- [ ] Hover states on nav items
- [ ] Hover states on cards (if applicable)
- [ ] Focus states on inputs
- [ ] Active states on navigation
- [ ] Cursor: pointer on interactive elements
- [ ] Progress bars animate on load

## Microcopy & Content ✅

- [ ] "Clarity First. Resilience Always. Move with Confidence."
- [ ] "Uncle Earnie's Suggested Next Steps" (not "advice")
- [ ] "Visibility Points" (consistent terminology)
- [ ] "Risk Visibility: Hazy"
- [ ] No em dashes (—) anywhere
- [ ] Confident, simple, human tone
- [ ] Button text matches demo
- [ ] Section headings match demo

## Accessibility ✅

- [ ] Proper heading hierarchy (h1, h2, h3, h4)
- [ ] Form labels associated with inputs
- [ ] Button text is descriptive
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Alt text for images (if added)
- [ ] Semantic HTML used

## Performance ✅

- [ ] Page loads quickly
- [ ] No console errors
- [ ] Images optimized (if added)
- [ ] CSS properly bundled
- [ ] No layout shift on load
- [ ] Smooth scrolling

## Functional Requirements ✅

- [ ] Authentication works (sign up/in/out)
- [ ] User name from Supabase displays
- [ ] Navigation between pages works
- [ ] Active page highlighted in sidebar
- [ ] User menu dropdown functions
- [ ] Form inputs accept text
- [ ] Buttons are clickable
- [ ] Links navigate correctly

---

## Final Verification

Open the app and the demo side-by-side. Compare:

1. **Overall impression**: Does it "feel" the same?
2. **Color palette**: Same dark green theme?
3. **Typography**: Same sizes and weights?
4. **Spacing**: Same breathing room?
5. **Components**: Same glass effects?
6. **Navigation**: Same structure?
7. **Content**: Same tone and terminology?

If you answered "yes" to all 7, you have design parity! ✨

---

**Last updated**: March 2, 2026
