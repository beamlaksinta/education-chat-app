"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function MessageForm({ sendMessage }) {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [image, setImage] = useState(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (!text && !image) return;

    sendMessage({ text, image });
    setText("");
    setImage(null);
    setShowEmoji(false);
  };

  const handleEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSend} className="flex gap-2 items-center mt-2 relative">
      <button
        type="button"
        onClick={() => setShowEmoji(!showEmoji)}
        className="text-xl"
      >
        😀
      </button>

      {showEmoji && (
        <div className="absolute bottom-16 z-20">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border rounded px-2 py-1"
      />

      <input type="file" accept="image/*" onChange={handleImageChange} />

      <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
        Send
      </button>
    </form>
  );
}