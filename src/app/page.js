"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("currentUser");
    if (u) setUser(JSON.parse(u));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <section className="flex flex-col items-center text-center py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl shadow-lg max-w-5xl mx-auto mt-10 px-8">
      <h1 className="text-5xl font-extrabold mb-6">🎓 Educational Chat App</h1>
      <p className="text-lg mb-8 max-w-3xl">
        Connect with classmates, share ideas, and learn together in real time.
      </p>

      <div className="mb-6">
        {user ? (
          <div>
            <p className="mb-3">👋 Welcome, {user.name} (@{user.username})</p>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link href="/login" className="bg-white text-blue-600 px-4 py-2 rounded">
              Login
            </Link>
            <Link href="/register" className="bg-white text-green-600 px-4 py-2 rounded">
              Register
            </Link>
          </div>
        )}
      </div>

      {user && (
        <div className="flex gap-6">
          <a
            href="/chat/1"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:scale-105 transition"
          >
            Join Chat Room 1
          </a>
          <a
            href="/chat/2"
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:scale-105 transition"
          >
            Join Chat Room 2
          </a>
        </div>
      )}
    </section>
  );
}