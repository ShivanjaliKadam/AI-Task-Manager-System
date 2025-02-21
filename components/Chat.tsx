"use client"; // Required for useState

import { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
  dangerouslyAllowBrowser: true,
});

const Chat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, `User: ${input}`]);
    setInput("");

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: input }],
        max_tokens: 50,
      });

      setMessages((prev) => [
        ...prev,
        `AI: ${response.choices[0].message.content}`,
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, "AI: Error generating response."]);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">AI Task Chat</h2>
      <div className="border p-2 min-h-[200px]">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mt-2"
        placeholder="Ask AI about tasks..."
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white p-2 mt-2 w-full"
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
