export default function ChatRoom({ messages }) {
  return (
    <div className="border rounded p-4 h-64 overflow-y-auto bg-white mb-4">
      {messages.map((msg, i) => (
        <div key={i} className="mb-2">
          <strong>{msg.user}: </strong>
          <span>{msg.text}</span>
        </div>
      ))}
    </div>
  );
}
