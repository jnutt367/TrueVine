let searchQuery = "";

// input trigger
function runSearch() {
  searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
  renderFeed();
}

// MAIN SMART FILTER (FUZZY + SCORING)
function filterDatabase(database) {
  if (!searchQuery) return database;

  return database
    .map(item => {
      const content = item.content.toLowerCase();
      const user = item.user.toLowerCase();
      const type = item.type.toLowerCase();
      const title = content.split(" ")[0];

      // scoring system
      let score = 0;

      // exact matches (strong)
      if (content.includes(searchQuery)) score += 5;
      if (user.includes(searchQuery)) score += 4;
      if (type.includes(searchQuery)) score += 3;
      if (title.includes(searchQuery)) score += 2;

      // fuzzy match boost
      if (fuzzyMatch(content, searchQuery)) score += 2;
      if (fuzzyMatch(user, searchQuery)) score += 2;

      return { item, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.item);
}

// 🔥 FUZZY MATCH ENGINE
function fuzzyMatch(text, query) {
  const textWords = text.split(" ");
  const queryWords = query.split(" ");

  return queryWords.some(q =>
    textWords.some(t => similarity(t, q) > 0.6)
  );
}

// 🔥 SIMPLE SIMILARITY (Levenshtein-lite)
function similarity(a, b) {
  if (a === b) return 1;
  if (a.length < 3 || b.length < 3) return 0;

  let matches = 0;
  const len = Math.max(a.length, b.length);

  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] === b[i]) matches++;
  }

  return matches / len;
}