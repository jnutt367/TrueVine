"use client";

import { useState } from "react";

export default function Login({ setUser }) {
  const [name, setName] = useState("");

  function handleLogin() {
    const trimmed = name.trim();
    if (!trimmed) return;

    localStorage.setItem("truvine_user", trimmed);

    // 🔥 instant update (no reload)
    setUser(trimmed);
  }

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-80 text-center">

        <h2 className="font-black text-xl mb-4">
          Welcome to TruVine
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-3 border rounded-lg mb-4 text-center"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-black"
        >
          Enter
        </button>

      </div>
    </div>
  );
}