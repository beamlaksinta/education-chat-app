"use client";

export default function ChatRoom({ messages }) {
  return (
    <div className="border rounded-xl p-4 h-96 overflow-y-auto shadow bg-gray-50 mb-4">
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet. Start chatting!</p>
      ) : (
        messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl shadow ${
                msg.sender === "You"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text && <p>{msg.text}</p>}
              {msg.image && (
                <img
                  src={msg.image}
                  alt="attachment"
                  className="mt-1 max-w-xs rounded"
                />
              )}
              <span className="text-xs opacity-70">{msg.time}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}