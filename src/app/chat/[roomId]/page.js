"use client";

import { useState, useEffect } from "react";
import { use} from"react";
import ChatRoom from "@/components/ChatRoom";
import MessageForm from "@/components/MessageForm";
import allmessages from "@/data/messages.json";

export default function ChatRoomPage({ params }) {
  const [roomId, setRoomId] = useState("default"); // initialize with default
  const [messages, setMessages] = useState([]);
const unwrappedParams = use(params);

useEffect(() => {
  if (unwrappedParams?.roomId) {
    setRoomId(unwrappedParams.roomId);
  }
}, [unwrappedParams]);
  

  // Load messages for this room
  useEffect(() => {
    const saved = localStorage.getItem(`chat-${roomId}`);
    if (saved) setMessages(JSON.parse(saved));
    else setMessages(allmessages[roomId] || []);
  }, [roomId]);

  // Save messages to localStorage
  useEffect(() => {
    localStorage.setItem(`chat-${roomId}`, JSON.stringify(messages));
  }, [messages, roomId]);

  // Send message
  const sendMessage = ({ text, image }) => {
    if (!text && !image) return;
    setMessages([
      ...messages,
      {
        text,
        image,
        time: new Date().toLocaleTimeString(),
        sender: "You",
      },
    ]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Chat Room: {roomId}
      </h1>

      <ChatRoom messages={messages} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
}