# UI Redesign Plan

## Information Gathered
- MovieGrid.js: Inline styles for grid and cards, includes button which needs removal.
- LandingPage.js: Hero section with thick border, filter bar, uses MovieGrid.
- LandingPage.css: Hero styles with yellow border, filter bar with borders, buttons.
- Homepage.css: Similar filter bar styles.
- Navbar.css: Solid red background.
- index.css: Basic body styles, needs global dark theme.

## Plan
- Update index.css: Add CSS variables for theme colors, set body to dark gradient.
- Update Navbar.css: Make transparent, add glassmorphism on scroll.
- Update MovieGrid.js: Remove button, update styles for minimal cards, hover effects.
- Update LandingPage.css: Remove hero border, add glow; filter bar glass pill; buttons pill style.
- Update Homepage.css: Similar filter bar and button updates.

## Dependent Files
- frontend/src/index.css
- frontend/src/components/Navbar.css
- frontend/src/components/MovieGrid.js
- frontend/src/pages/LandingPage.css
- frontend/src/pages/Homepage.css

## Followup Steps
- Run the app to verify changes.
- Check responsiveness.
