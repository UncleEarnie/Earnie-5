# Mortgage Maze - Customization Guide

## Quick Customizations

### 1. Change Game Title or Description

**File:** `/src/app/home/page.tsx`

Find this section:
```jsx
<h3 style={{ color: 'var(--accent-primary)', margin: 0, fontSize: '20px' }}>Mortgage Maze</h3>
```

Change to:
```jsx
<h3 style={{ color: 'var(--accent-primary)', margin: 0, fontSize: '20px' }}>Mortgage Mastery</h3>
```

Also update description:
```jsx
<p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', flex: 1 }}>
  Navigate mortgage decisions...
</p>
```

### 2. Change Button Text

**File:** `/src/app/home/page.tsx`

Find and modify:
```jsx
<button onClick={() => setGameModalOpen(true)} ...>
  Play Now →
</button>
```

Change to:
```jsx
<button onClick={() => setGameModalOpen(true)} ...>
  Start Game →
</button>
```

### 3. Add Another Game Card

**File:** `/src/app/home/page.tsx`

Duplicate the Mortgage Maze card div and modify:
```jsx
<div style={{...}}>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
    <span style={{ fontSize: '32px', marginRight: 'var(--space-md)' }}>💰</span>
    <h3 style={{ color: 'var(--accent-primary)', margin: 0, fontSize: '20px' }}>Budget Quest</h3>
  </div>
  <p>Description for new game...</p>
  <button onClick={() => setBudgetQuestModalOpen(true)}>
    Play Now →
  </button>
</div>
```

Then add state and modal for new game.

### 4. Change Game Colors

**File:** `/public/games/mortgage-maze/styles.css`

Change at the top:
```css
:root {
  --accent-primary: #86efac;  /* Change to any color */
  --bg-primary: #0a0f0d;      /* Change background */
  --text-primary: rgba(255, 255, 255, 0.95);  /* Change text */
  /* ... other variables */
}
```

Examples:
- Teal: `#14b8a6`
- Blue: `#3b82f6`
- Purple: `#a855f7`
- Pink: `#ec4899`

### 5. Change Game Mode Names

**File:** `/public/games/mortgage-maze/app.js`

Find in `renderLanding()`:
```javascript
<button class="mode-btn primary" data-action="mode" data-mode="quick">⚡ Quick Mode (5 min)</button>
<button class="mode-btn" data-action="mode" data-mode="deep">🔍 Deep Mode (10 min)</button>
```

Change to:
```javascript
<button class="mode-btn primary" data-action="mode" data-mode="quick">⚡ Beginner Path</button>
<button class="mode-btn" data-action="mode" data-mode="deep">🔍 Advanced Challenge</button>
```

### 6. Change Setup Options

**File:** `/public/games/mortgage-maze/app.js`

Find constants:
```javascript
const PERSONAS = ['First-time buyer', 'Upgrading homeowner', 'Investor'];
const DEPOSIT_BANDS = ['<10%', '10-15%', '15-20%', '20%+'];
const TIME_PRESSURES = ['High pressure', 'Moderate', 'No rush'];
```

Modify:
```javascript
const PERSONAS = ['First-time Homebuyer', 'Current Owner', 'Real Estate Investor', 'Relocating Professional'];
const DEPOSIT_BANDS = ['Save Mode', 'Quick Entry', 'Strong Position', 'Premium Start'];
const TIME_PRESSURES = ['ASAP', 'Next 6 Months', 'Flexible Timeline'];
```

## Intermediate Customizations

### 7. Add a New Room

**File:** `/public/games/mortgage-maze/app.js`

Add to `ROOMS` object:
```javascript
const ROOMS = {
  // ... existing rooms ...
  propertyInsurance: {
    id: 'propertyInsurance',
    title: 'Property Insurance Decision',
    description: 'Your broker recommends different insurance options. What\'s your approach?',
    choices: [
      { id: 'c1', text: 'Get quotes from multiple insurers', hint: 'Thorough 📋' },
      { id: 'c2', text: 'Use the broker\'s recommended insurer', hint: 'Trust-based 🤝' },
    ],
  },
};
```

Add room to sequence:
```javascript
const MAZE_SEQUENCE_DEEP = [
  'start',
  'depositDecision',
  'loanTermDecision',
  'rateShock1',
  'incomeChange',
  'propertyInsurance',  // ← Add here
  'breakFeeAwareness',
  'refiDecision',
  'bufferCheck',
  'endgame',
];
```

### 8. Adjust Scoring Logic

**File:** `/public/games/mortgage-maze/app.js`

In `calculateDeltas()` method, add:
```javascript
if (roomId === 'propertyInsurance' && choiceId === 'c1') {
  deltas.knowledge += 12;
  deltas.riskFog -= 3;
} else if (choiceId === 'c2') {
  deltas.confidenceBias += 5;
}
```

For more points, change values:
```javascript
deltas.knowledge += 20;  // Increased from 12
deltas.riskFog -= 10;    // Increased from -3
```

### 9. Change Maze Visualization

**File:** `/public/games/mortgage-maze/app.js`

In `drawMazeVisualization()` method:
```javascript
// Change node color
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';  // ← Change to different color
// Example: pink nodes
ctx.fillStyle = 'rgba(236, 72, 153, 0.2)';

// Change player glow
ctx.fillStyle = '#86efac';  // ← Change player color
// Example: blue glow
ctx.fillStyle = '#3b82f6';
```

### 10. Add Hint Tooltips

**File:** `/src/app/home/page.tsx`

In tips section, add more tips:
```jsx
<li style={{ marginBottom: 'var(--space-sm)' }}>
  🎓 <strong>Learn Best Practices</strong> by trying both modes
</li>
```

## Advanced Customizations

### 11. Add Post-Game Actions

**File:** `/src/app/home/page.tsx` and `/public/games/mortgage-maze/app.js`

Add score tracking:
```javascript
// In app.js, when game completes:
window.parent.postMessage({
  type: 'MORTGAGE_MAZE_COMPLETE',
  score: this.gameState.visibilityIndex,
  mode: this.gameState.mode,
}, '*');
```

Then in home page, listen:
```javascript
const handleMessage = (event: MessageEvent) => {
  if (event.data.type === 'MORTGAGE_MAZE_HEIGHT') {
    setIframeHeight(event.data.height + 40);
  } else if (event.data.type === 'MORTGAGE_MAZE_COMPLETE') {
    console.log('Game complete! Score:', event.data.score);
    // Could save to database here
  }
};
```

### 12. Modify Results Display

**File:** `/public/games/mortgage-maze/app.js`

In `renderResults()`:
```javascript
// Add custom outcome message based on score
const getOutcomeMessage = (score) => {
  if (score >= 80) return 'Excellent - You have strong mortgage visibility!';
  if (score >= 60) return 'Good - You understand most mortgage concepts';
  if (score >= 40) return 'Fair - Consider reviewing key mortgage terms';
  return 'Learning - Focus on core mortgage knowledge';
};

// Use in results:
<p style={{ fontSize: '16px', color: 'var(--accent-primary)' }}>
  ${getOutcomeMessage(visibilityIndex)}
</p>
```

### 13. Add Difficulty Levels

**File:** `/public/games/mortgage-maze/app.js`

Add new mode:
```javascript
const MAZE_SEQUENCE_HARDCORE = [
  'start',
  'depositDecision',
  'loanTermDecision',
  'rateShock1',
  'incomeChange',
  'breakFeeAwareness',
  'refiDecision',
  'rateShock2',  // Additional shock
  'marketCrash',  // New room
  'bufferCheck',
  'endgame',
];
```

Then update landing screen to show 3 buttons.

### 14. Persist Score to Database

This requires backend integration. For simple persistence:

**Step 1:** Create Supabase table
```sql
CREATE TABLE game_scores (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  game_type TEXT,
  mode TEXT,
  score INTEGER,
  timestamp TIMESTAMP DEFAULT NOW()
);
```

**Step 2:** Add API route `/src/app/api/game-score/route.ts`
```typescript
export async function POST(req: Request) {
  const { userId, score, mode } = await req.json();
  // Save to database
  return Response.json({ success: true });
}
```

**Step 3:** Update game to send score
```javascript
async sendScore(visibilityIndex) {
  const response = await fetch('/api/game-score', {
    method: 'POST',
    body: JSON.stringify({
      userId: currentUser.id,
      score: visibilityIndex,
      mode: this.gameState.mode,
    }),
  });
}
```

## Testing Custom Changes

After any customization:

1. **Reload game in dev server:**
   ```bash
   npm run dev
   # Changes should hot-reload
   ```

2. **Test in browser:**
   - Close and reopen modal
   - Play through game
   - Verify changes appear

3. **Check console:**
   - F12 → Console tab
   - Look for errors
   - Verify scoring works

4. **Responsive test:**
   - Test on mobile
   - Test on desktop
   - Verify layout intact

## Common Issues & Solutions

### Game won't load after edit
- **Check:** JavaScript syntax errors
- **Solution:** Verify brackets and quotes in app.js
- **Debug:** Open DevTools Console, look for error messages

### Styling looks broken
- **Check:** CSS syntax
- **Solution:** Verify closing braces in styles.css
- **Debug:** Inspect elements with DevTools

### Scores don't calculate
- **Check:** calculateDeltas() method
- **Solution:** Verify room IDs match exactly
- **Debug:** Add console.log in calculateDeltas()

### New room doesn't appear
- **Check:** Room added to sequence array
- **Solution:** Add room ID to MAZE_SEQUENCE_QUICK/DEEP
- **Debug:** Check console for undefined room errors

## Deployment

After customizing:

```bash
# 1. Test locally
npm run dev

# 2. Commit changes
git add -A
git commit -m "Customize Mortgage Maze game"

# 3. Push to GitHub
git push

# 4. Vercel auto-deploys
# Check Vercel dashboard for deployment status

# 5. Test in production
# Visit your live site and verify changes
```

## Documentation

When making significant changes:

1. **Update MORTGAGE_MAZE_GUIDE.md** if mechanics change
2. **Update MORTGAGE_MAZE_SUMMARY.md** for high-level changes
3. **Add comments in code** for complex logic
4. **Document new rooms** with description of impact on scoring

## Getting Help

Reference files:
- Game logic: `/public/games/mortgage-maze/app.js` (MortgageMazeGame class)
- Styling: `/public/games/mortgage-maze/styles.css` (CSS reference)
- Integration: `/src/app/home/page.tsx` (React component)
- Documentation: `MORTGAGE_MAZE_GUIDE.md` (detailed guide)

---

**Happy customizing! 🎨**
