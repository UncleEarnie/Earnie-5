# Mortgage Maze - Testing Checklist

## Pre-Deployment Testing

Run this checklist locally before pushing to production.

### 1. File Structure ✓
- [ ] `/public/games/mortgage-maze/index.html` exists
- [ ] `/public/games/mortgage-maze/styles.css` exists
- [ ] `/public/games/mortgage-maze/app.js` exists
- [ ] `/src/app/home/page.tsx` exists
- [ ] `/src/app/page.tsx` updated (redirect to /home)

### 2. Start Development Server
```bash
cd c:\Users\henry\Desktop\Earnie\ 5
npm run dev
```
- [ ] Server starts without errors
- [ ] Console shows "compiled successfully"

### 3. Authentication Flow
- [ ] Navigate to `http://localhost:3000`
- [ ] You're redirected to `/auth/login`
- [ ] Sign up with test account (email: test@example.com)
- [ ] After signup, redirected to `/home` (not `/dashboard`)
- [ ] Home page loads without errors

### 4. Home Page Layout
- [ ] Hero section displays correctly
- [ ] "Interactive Games" heading visible
- [ ] Mortgage Maze card shows:
  - [ ] House emoji (🏠)
  - [ ] Title "Mortgage Maze"
  - [ ] Description text
  - [ ] "Play Now →" button

### 5. Modal Opening
- [ ] Click "Play Now" button
- [ ] Modal opens with smooth animation
- [ ] Modal has close button (✕) in top right
- [ ] Modal has dark background overlay
- [ ] Can see title "Mortgage Maze" in modal header

### 6. Game Loading
- [ ] Iframe loads inside modal
- [ ] Game displays landing screen
- [ ] Title "🏠 Mortgage Maze" visible
- [ ] Subtitle text displays
- [ ] Two buttons visible:
  - [ ] "⚡ Quick Mode (5 min)"
  - [ ] "🔍 Deep Mode (10 min)"

### 7. Quick Mode Gameplay
- [ ] Click "Quick Mode" button
- [ ] Setup screen appears
- [ ] Can select persona (click options)
- [ ] Can select deposit band (click options)
- [ ] Can select time pressure (click options)
- [ ] "Start Game →" button becomes enabled
- [ ] Click "Start Game"
- [ ] Game screen loads with:
  - [ ] Maze visualization on left
  - [ ] Decision panel on right
  - [ ] Stats in header (Knowledge, Buffer, Fog)
  - [ ] Room title and description
  - [ ] 2-4 choice buttons

### 8. Game Interaction
- [ ] Click a choice button
- [ ] Next room loads
- [ ] Stats update (some values change)
- [ ] Room counter advances
- [ ] Continue through all 5 rooms in Quick Mode

### 9. Results Screen
- [ ] After final room, results screen appears
- [ ] Shows "Your Mortgage Visibility Index"
- [ ] Displays score (0-100)
- [ ] Shows three subscores (Visible, Partial, Hidden)
- [ ] Outcome snapshot table displays:
  - [ ] Monthly Payment Range
  - [ ] Buffer (Emergency Months)
  - [ ] Resilience Score
  - [ ] Refi Readiness
- [ ] Next Steps checklist shows 4 items
- [ ] Two buttons at bottom:
  - [ ] "📋 Copy Summary"
  - [ ] "Play Again"

### 10. Copy to Clipboard
- [ ] Click "📋 Copy Summary" button
- [ ] Expect alert: "Summary copied to clipboard!"
- [ ] Paste to notepad and verify summary text:
  - [ ] Contains "Mortgage Visibility Index: [score]/100"
  - [ ] Contains breakdown (Visible, Partial, Hidden)
  - [ ] Contains persona, deposit, time pressure
  - [ ] Contains stat values

### 11. Play Again
- [ ] Click "Play Again" button
- [ ] Return to landing screen
- [ ] Can play another mode (try Deep Mode)
- [ ] Deep Mode should have 9 rooms (vs 5 for Quick)

### 12. Modal Close Behaviors
- [ ] Close button (✕):
  - [ ] Click close button
  - [ ] Modal closes, home page shows
  - [ ] Game state resets for next play
- [ ] Escape key:
  - [ ] Open game again ("Play Now")
  - [ ] Press Escape key
  - [ ] Modal closes
- [ ] Click outside:
  - [ ] Open game again
  - [ ] Click on dark overlay (outside modal)
  - [ ] Modal closes

### 13. Responsive Testing
#### Desktop (1200px+)
- [ ] Game grid layout: 2 columns
- [ ] Modal centered
- [ ] All text readable
- [ ] Buttons properly sized

#### Tablet (768px - 1199px)
- [ ] Game grid layout: 1 column
- [ ] Modal full width with padding
- [ ] Touch targets adequate
- [ ] No overflow

#### Mobile (< 768px)
- [ ] Game grid layout: 1 column (stacked)
- [ ] Modal fills screen with padding
- [ ] Font sizes readable
- [ ] Buttons touch-friendly (44px minimum)

### 14. Deep Mode Testing
- [ ] Play Deep Mode (9 rooms)
- [ ] Should encounter more rooms than Quick Mode
- [ ] Rooms should include shocks and challenges
- [ ] Final score may be different based on choices
- [ ] Results screen shows same format

### 15. PostMessage Communication
**In Browser DevTools Console:**
```javascript
// Check if messages are being sent
window.addEventListener('message', (event) => {
  console.log('Message received:', event.data);
});
// Open game and interact - you should see messages logged
```
- [ ] Open DevTools (F12)
- [ ] Go to Console tab
- [ ] Paste above code
- [ ] Open game
- [ ] As game screens load, you should see messages like:
  ```
  Message received: {type: "MORTGAGE_MAZE_HEIGHT", height: 800}
  ```

### 16. Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

### 17. Performance
- [ ] Modal opens smoothly (< 1s)
- [ ] Game responds to clicks immediately
- [ ] No lag when changing screens
- [ ] No memory leaks (check DevTools Memory tab)

### 18. Accessibility
- [ ] Keyboard navigation works:
  - [ ] Tab through buttons (visible focus)
  - [ ] Enter/Space activates buttons
  - [ ] Escape closes modal
- [ ] Color contrast readable
- [ ] Text sizes appropriate
- [ ] No flashing/strobing content

### 19. Error Handling
- [ ] Close modal and reopen (multiple times)
  - [ ] No errors in console
  - [ ] Game state properly reset
- [ ] Try all different choice combinations
  - [ ] No crashes
  - [ ] Scores always valid (0-100)
- [ ] Spam click buttons
  - [ ] No multiple submissions
  - [ ] Game stable

### 20. Navigation
- [ ] From home, click dashboard in sidebar
  - [ ] Navigate to `/dashboard` works
  - [ ] Dashboard displays correctly
- [ ] From dashboard, navigate back to home
  - [ ] Home page loads
  - [ ] Mortgage Maze card visible
- [ ] All sidebar links work:
  - [ ] Dashboard, Finances, Profile, Wallet, etc.

## Production Verification (After Deploy)

Once deployed to Vercel:

### 1. Verify Deployment
- [ ] Visit your production URL (e.g., earnie-5.vercel.app)
- [ ] Home page loads
- [ ] Mortgage Maze card visible
- [ ] "Play Now" button clickable

### 2. Test Live Game
- [ ] Click "Play Now"
- [ ] Game loads in modal
- [ ] Play through Quick Mode
- [ ] Copy summary to clipboard
- [ ] Close modal successfully

### 3. Check Build
- [ ] View Vercel dashboard → Deployments
- [ ] Latest deployment shows ✅ (success)
- [ ] Build time < 5 minutes
- [ ] No build warnings/errors

### 4. Monitor for Issues
- [ ] Check Vercel analytics
- [ ] Monitor error logs for 24 hours
- [ ] Verify game loads for multiple users

## Rollback Plan

If issues occur after deployment:

```bash
# Option 1: Revert to previous commit
git revert <commit-hash>
git push
# Vercel auto-deploys the revert

# Option 2: Disable game temporarily
# Comment out GameModal in /src/app/home/page.tsx
# Push changes
```

## Sign-Off Checklist

- [ ] All tests above passed
- [ ] No console errors
- [ ] Game fully playable
- [ ] Modal works correctly
- [ ] Mobile responsive
- [ ] Accessibility verified
- [ ] Production deployed successfully
- [ ] Documentation complete

---

**Ready to launch! 🚀**

If any test fails, refer to `MORTGAGE_MAZE_GUIDE.md` for troubleshooting.
