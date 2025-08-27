"use client";

import ChatRoom from "@/components/ChatRoom";
import MessageForm from "@/components/MessageForm";

// Example demo messages (later replace with DB or API)
const demoMessages = [
  { user: "Alice", text: "Hey everyone 👋" },
  { user: "Bob", text: "Working on the assignment..." },
  { user: "Charlie", text: "Don’t forget quiz tomorrow!" },
];

export default function ChatRoomPage({ params }) {
  const { roomId } = params;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Chat Room: {roomId}</h2>
      <ChatRoom messages={demoMessages} />
      <MessageForm />
    </div>
  );
}
