import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-blue-600 text-white shadow">
      <Link href="/">Home</Link>
      <Link href="/chat/1">Chat Room 1</Link>
      <Link href="/chat/2">Chat Room 2</Link>
    </nav>
  );
}
