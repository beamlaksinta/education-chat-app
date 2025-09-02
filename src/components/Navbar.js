"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [chatOpen, setChatOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [usersCount, setUsersCount] = useState(0);
  const router = useRouter();

  // Load logged-in user & total members
  const loadData = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) setUsername(user.username);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    setUsersCount(users.length);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUsername("");
    router.push("/");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
      <h1 className="text-xl font-bold">EduChat</h1>
      <div className="flex gap-4 items-center relative">
        <Link href="/" className="hover:underline">Home</Link>

        {/* Chat dropdown */}
        <div className="relative">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="hover:underline flex items-center gap-1"
          >
            Chat ▼
          </button>
          {chatOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-lg z-10">
              <Link href="/chat/room1" className="block px-4 py-2 hover:bg-gray-100">Room 1</Link>
              <Link href="/chat/room2" className="block px-4 py-2 hover:bg-gray-100">Room 2</Link>
            </div>
          )}
        </div>

        <Link href="/qna" className="hover:underline">Q&A</Link>
        <Link href="/resources" className="hover:underline">Resources</Link>

        {!username ? (
          <Link href="/login" className="hover:underline">Login</Link>
        ) : (
          <div className="flex gap-3 items-center">
            <span className="bg-white text-blue-600 px-3 py-1 rounded">
              👥 {usersCount} Members
            </span>
            <Link
              href={`/profile/${username}`}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
            >
              {username}
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}