"use client";

import { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import users from "@/data/users.json";

export default function ProfilePage({ params }) {
  const { username } = params;
  const user = users.find((u) => u.username === username);

  const [bio, setBio] = useState("");
  const [savedBio, setSavedBio] = useState("");

  // Load bio from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`profile-${username}`);
    if (stored) setSavedBio(stored);
  }, [username]);

  const saveBio = () => {
    if (!bio.trim()) return;
    localStorage.setItem(`profile-${username}`, bio);
    setSavedBio(bio);
    setBio("");
  };

  if (!user) return <p className="text-center mt-10 text-red-600">User not found</p>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      {/* Static user info */}
      <ProfileCard user={user} />

      {/* Editable bio */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-2">Your Bio</h2>
        {savedBio && <p className="mb-2 text-gray-700">{savedBio}</p>}

        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Write your bio..."
          className="border rounded w-full p-2 mb-2"
        />
        <button
          onClick={saveBio}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Save Bio
        </button>
      </div>
    </div>
  );
}