"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import Login from "../components/Login";
import SearchBar from "../components/SearchBar";
import VideoGrid from "../components/VideoGrid";
import Feed from "../components/Feed";

import { videos } from "../data/videos";
import { filterContent } from "../lib/search";

export default function Home() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  // load user once
  useEffect(() => {
    const saved = localStorage.getItem("truvine_user");
    if (saved) setUser(saved);

    setReady(true);
  }, []);

  function handleDelete(id) {
    setPosts(prev => prev.filter(p => p.id !== id));
  }

  if (!ready) {
    return (
      <div className="p-10 text-white bg-slate-900">
        Loading TruVine...
      </div>
    );
  }

  // LOGIN GATE
  if (!user) {
    return <Login setUser={setUser} />;
  }

  // FILTER LOGIC (only runs when user exists)
  const { posts: filteredPosts, videos: filteredVideos } = filterContent({
    posts,
    videos,
    query
  });

  return (
    <main className="p-6 max-w-5xl mx-auto text-blue-500">

      <Header user={user} setUser={setUser} />

      <SearchBar query={query} setQuery={setQuery} />

      <h2 className="font-bold mb-2">🎥 Video Library</h2>
      <VideoGrid videos={filteredVideos} />

      <h2 className="font-bold mt-8 mb-2">📝 Community Feed</h2>
      <Feed posts={filteredPosts} onDelete={handleDelete} />

    </main>
  );
}