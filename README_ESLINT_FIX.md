Planned ESLint warning fixes (completed partially)

1) src/App.js
- Remove unused imports (useContext / UserContext). ✅

2) src/pages/LandingPage.js
- Remove unused useContext / UserContext imports. ✅ (restored clean file)
- Fix react-hooks/exhaustive-deps warnings.
  - NOTE: earlier refactor attempts broke the file. The current implementation uses the original, working structure.

3) src/pages/ProfilePage.js
- Fix exhaustive-deps warning: fetchProfile missing from dependency array.

4) src/pages/ShowSelectionPage.js
- Remove unused MovieDescription import.
- Fix exhaustive-deps warning: groupShowsByTheatre missing from dependency array.

