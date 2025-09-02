
"use client";
import questiondata from"@/data/questions.json";
import { useState, useEffect } from "react";

export default function QnaPage() {
  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState("");

  // Load questions from localStorage or fallback to default JSON
  useEffect(() => {
    const saved = localStorage.getItem("questions");
    if (saved) setQuestions(JSON.parse(saved));
    else {
      // default questions
      setQuestions([
        {
          question: "How to use Next.js App Router?",
          username: "peter",
          answers: ["Use pages in app/ directory, add page.js files."]
        },
        {
          question: "How to store messages locally?",
          username: "jack",
          answers: ["You can use localStorage for demo purposes."]
        }
      ]);
    }
  }, []);

  // Save questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const addQuestion = () => {
    if (!input.trim()) return;
    setQuestions([
      ...questions,
      { question: input, username: "You", answers: [] }
    ]);
    setInput("");
  };

  const addAnswer = (index, answer) => {
    if (!answer.trim()) return;
    const updated = [...questions];
    updated[index].answers.push(answer);
    setQuestions(updated);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Q&A Forum</h1>

      {/* Add Question */}
      <div className="flex mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addQuestion()}
          placeholder="Ask a question..."
          className="flex-1 border p-3 rounded-l-xl outline-none shadow"
        />
        <button
          onClick={addQuestion}
          className="bg-blue-600 text-white px-6 rounded-r-xl hover:bg-blue-700 shadow"
        >
          Ask
        </button>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.length === 0 ? (
          <p className="text-gray-500">No questions yet. Be the first!</p>
        ) : (
          questions.map((q, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <h2 className="font-semibold text-lg mb-2">❓ {q.question}</h2>

              {/* Answers */}
              <div className="space-y-2 mb-3">
                {q.answers.length === 0 ? (
                  <p className="text-gray-400">No answers yet.</p>
                ) : (
                  q.answers.map((a, j) => (
                    <p key={j} className="bg-gray-100 p-2 rounded-lg text-gray-700">
                      💡 {a}
                    </p>
                  ))
                )}
              </div>

              {/* Add Answer */}
              <AnswerBox onSubmit={(answer) => addAnswer(i, answer)} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function AnswerBox({ onSubmit }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onSubmit(text);
    setText("");
  };

  return (
    <div className="flex">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Write an answer..."
        className="flex-1 border p-2 rounded-l-xl shadow"
      />
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white px-4 rounded-r-xl hover:bg-green-700 shadow"
      >
        Reply
      </button>
    </div>
  );
}