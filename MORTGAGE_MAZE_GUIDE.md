# Mortgage Maze Game Integration Guide

## Overview

Mortgage Maze is an interactive mini-game built into the Earnie 5 platform. It helps users explore mortgage decisions in a fog-of-war scenario and receive a Mortgage Visibility Index score.

## Files Added

### Game Files
- **`/public/games/mortgage-maze/index.html`** - Main game HTML
- **`/public/games/mortgage-maze/styles.css`** - Game styling (dark theme)
- **`/public/games/mortgage-maze/app.js`** - Game logic and state management

### Integration Files
- **`/src/app/home/page.tsx`** - New authenticated home page with game card and modal

### Modified Files
- **`/src/app/page.tsx`** - Updated to redirect to `/home` instead of `/dashboard`

## How It Works

### 1. Game Structure

The game has 4 main screens:

#### Landing Screen
- Title and description
- Two mode buttons: Quick Mode (5 min) and Deep Mode (10 min)

#### Setup Screen
- Select persona (First-time buyer, Upgrading homeowner, Investor)
- Select deposit band (<10%, 10-15%, 15-20%, 20%+)
- Select time pressure (High pressure, Moderate, No rush)

#### Game Screen
- Left side: Maze visualization showing progress with fog of war effect
- Right side: Decision panel with 2-4 choices per room
- Bottom: Progress tracker
- Stats shown: Knowledge, Buffer months, Risk Fog

#### Results Screen
- Mortgage Visibility Index score (0-100)
- Three subscores: Visible, Partial, Hidden
- Outcome snapshot (monthly payment range, buffer months, resilience, refi readiness)
- Next steps checklist
- Copy to clipboard button
- Play again button

### 2. Game Mechanics

**Rooms & Decisions:**
- Quick Mode: 5 rooms (5 minute playthrough)
- Deep Mode: 9 rooms (10 minute playthrough)
- Each room has 2-4 choices with hints

**Stat System:**
- `knowledge`: Increases when player gathers information (0-100)
- `bufferMonths`: Emergency fund coverage (0-12 months)
- `riskFog`: Uncertainty about mortgage terms (0-100)
- `confidenceBias`: Overconfidence indicator (0-100)
- `cashflow`: Resilience score (0-100)

**Scoring:**
- Start with 50 points
- Add points for: knowledge, buffers, informed decisions
- Subtract points for: risk fog, confidence bias, panic decisions
- Final score: 0-100 (Mortgage Visibility Index)

### 3. Modal Integration

The game opens in a modal overlay on the home page:

```
User clicks "Play Now" button
    ↓
Modal opens with iframe pointing to /games/mortgage-maze/index.html
    ↓
Game runs inside iframe (sandboxed for security)
    ↓
User can close with:
  - Close button (✕)
  - Escape key
  - Click outside modal
```

**PostMessage Communication:**
- Game sends `MORTGAGE_MAZE_HEIGHT` messages to parent
- Parent listens and adjusts iframe height dynamically
- Fallback: Fixed 85vh height on mobile

## Features

### Accessibility
- ✅ Modal has focus trap (Escape to close)
- ✅ Close button is keyboard accessible
- ✅ Semantic HTML structure
- ✅ Color contrast meets WCAG AA standards

### Responsive Design
- ✅ Desktop: 1100px max width, 85vh height
- ✅ Tablet: Full width with padding
- ✅ Mobile: Full screen, optimized touch targets

### Styling
- ✅ Matches Earnie dark theme (`#0a0f0d`)
- ✅ Uses same accent color (`#86efac`)
- ✅ Glass morphism effects
- ✅ Smooth animations (fade in, slide up)

### Data Privacy
- ✅ No backend API calls
- ✅ All data stays in browser memory
- ✅ No analytics or tracking
- ✅ Iframe is sandboxed

## Customization

### Add New Rooms

Edit `/public/games/mortgage-maze/app.js`:

```javascript
const ROOMS = {
  newRoom: {
    id: 'newRoom',
    title: 'Room Title',
    description: 'Room description with context',
    choices: [
      { id: 'c1', text: 'Choice 1 text', hint: 'Hint emoji' },
      { id: 'c2', text: 'Choice 2 text', hint: 'Hint emoji' },
    ],
  },
  // ... more rooms
};
```

Add the room ID to the sequence:

```javascript
const MAZE_SEQUENCE_DEEP = [
  'start',
  'depositDecision',
  'loanTermDecision',
  'rateShock1',
  'newRoom', // ← Add here
  'incomeChange',
  // ...
];
```

### Adjust Stat Deltas

In `calculateDeltas()` method, modify point changes:

```javascript
calculateDeltas(roomId, choiceId) {
  const deltas = {
    cashflow: 0,
    bufferMonths: 0,
    riskFog: 0,
    confidenceBias: 0,
    knowledge: 0,
  };

  if (roomId === 'myRoom' && choiceId === 'c1') {
    deltas.knowledge += 15; // Increase reward
  }

  return deltas;
}
```

### Change Colors

Edit `/public/games/mortgage-maze/styles.css`:

```css
:root {
  --accent-primary: #86efac; /* Change game highlight color */
  --bg-primary: #0a0f0d; /* Change background */
  /* ... other variables */
}
```

## Testing

### Local Testing

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to home:**
   - Sign in at `http://localhost:3000/auth/login`
   - You'll be redirected to `http://localhost:3000/home`

3. **Play the game:**
   - Click "Play Now" button on the Mortgage Maze card
   - Modal should open with the game
   - Test both Quick and Deep modes

4. **Test Interactions:**
   - Close button (✕) should close modal
   - Escape key should close modal
   - Clicking outside should close modal
   - All buttons should be clickable
   - Copy to clipboard should work in results screen

### Browser DevTools

1. **Open DevTools** (F12)
2. **Go to Console tab**
3. **Test postMessage communication:**
   ```javascript
   // In console, simulate message from iframe:
   window.postMessage({ type: 'MORTGAGE_MAZE_HEIGHT', height: 800 }, '*');
   ```

## Troubleshooting

### Game Won't Load

**Problem:** Modal opens but iframe is blank
**Solution:**
- Check that `/public/games/mortgage-maze/` files exist
- Verify paths are correct in iframe `src` attribute
- Check browser console for errors

### Styling Doesn't Match

**Problem:** Game styling looks different than homepage
**Solution:**
- Game has its own CSS in `/public/games/mortgage-maze/styles.css`
- Update CSS variables at top of that file to match main theme

### Modal Won't Close

**Problem:** Can't close modal with Escape or close button
**Solution:**
- Check that event listeners are attached in `useEffect`
- Verify `onClose` callback is passed correctly
- Test in browser console: `document.addEventListener('keydown', console.log)`

### PostMessage Not Working

**Problem:** Iframe height doesn't adjust dynamically
**Solution:**
- Check iframe has `sandbox` attribute with `allow-scripts`
- Verify game sends messages with correct format
- Add logging in parent component:
  ```javascript
  window.addEventListener('message', (event) => {
    console.log('Message received:', event.data);
  });
  ```

## Deployment

### Vercel
- Game files in `/public` are automatically served as static assets
- No special configuration needed
- Iframe works because same-origin (`/games/...` path)

### Other Hosting
- Ensure `/public` directory is served
- CORS should not be an issue (same-origin iframe)
- No environment variables needed for game

## Future Enhancements

- [ ] Save game scores to database
- [ ] Leaderboard system
- [ ] More game modes (scenario-based, endless mode)
- [ ] Additional mini-games (Budget Quest, Investment Island, etc.)
- [ ] Achievement badges
- [ ] Social sharing of results
- [ ] Game telemetry and analytics
- [ ] Personalized recommendations based on score

## Files Summary

```
Earnie 5/
├── public/
│   └── games/
│       └── mortgage-maze/
│           ├── index.html          (Game container)
│           ├── styles.css          (Game styling)
│           └── app.js              (Game logic)
├── src/
│   └── app/
│       ├── page.tsx                (Updated: redirects to /home)
│       ├── home/
│       │   └── page.tsx            (New: home with game card)
│       └── ...existing pages
```

## Questions?

Refer to:
- Game mechanics: `/public/games/mortgage-maze/app.js` (MortgageMazeGame class)
- Styling: `/public/games/mortgage-maze/styles.css` (CSS variables)
- Integration: `/src/app/home/page.tsx` (GameModal component)
