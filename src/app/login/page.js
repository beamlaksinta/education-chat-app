"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) router.push("/");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Load users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by username (or email if you store email)
    const user = users.find(u => u.username === username || u.email === username);

    if (!user) {
      alert("❌ Invalid username or email");
      return;
    }

    // Save logged-in user
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert('✅ Welcome back, ${user.name || user.username}!');
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}