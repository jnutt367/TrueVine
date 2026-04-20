export default function SearchBar({ query, setQuery }) {
    return (
      <div className="mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos, creators, or posts..."
          className="w-full bg-white p-4 rounded-2xl shadow-sm border outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }