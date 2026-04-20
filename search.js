let searchQuery = "";

// triggered by input field
function runSearch() {
  searchQuery = document.getElementById("searchInput").value.toLowerCase();
  renderFeed(); // comes from app.js
}

// reusable filter engine
function filterDatabase(database) {
  if (!searchQuery) return database;

  return database.filter(item => {
    const content = item.content.toLowerCase();
    const user = item.user.toLowerCase();
    const type = item.type.toLowerCase();
    const title = item.content.split(" ")[0].toLowerCase();

    return (
      content.includes(searchQuery) ||
      user.includes(searchQuery) ||
      type.includes(searchQuery) ||
      title.includes(searchQuery)
    );
  });
}