Intended ESLint warning fixes:
- App.js: remove unused useContext/UserContext imports.
- LandingPage.js: remove unused useContext/UserContext imports; fix exhaustive-deps by memoizing fetchMovies; remove unused resetFilters.
- ProfilePage.js: memoize fetchProfile or include in deps.
- ShowSelectionPage.js: remove unused MovieDescription import; memoize groupShowsByTheatre.

