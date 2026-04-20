"use client";

export default function Header({ user, setUser }) {

  const initial = user ? user.charAt(0).toUpperCase() : "?";

  function logout() {
    localStorage.removeItem("truvine_user");
    setUser(null);
  }

  return (
    <header className="bg-slate-900 text-white p-4">
      <div className="flex justify-between items-center">

        <h1 className="font-black">TruVine</h1>

        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">
            {initial}
          </div>

          {/* Name */}
          <span className="text-xs">
            {user || "Guest"}
          </span>

          {/* Logout */}
          <button
            onClick={logout}
            className="text-xs bg-red-500 px-2 py-1 rounded"
          >
            Logout
          </button>

        </div>

      </div>
    </header>
  );
}