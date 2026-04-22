
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInteraction } from "../redux/interactionSlice";
import "../styles.css";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState(""); // 🔥 store user msg
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat-log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      // ✅ fill form
      dispatch(setInteraction(data));

      // 🔥 show USER message only
      setDisplayMessage(message);

    } catch (err) {
      setDisplayMessage("❌ Error connecting to backend");
    }

    setMessage("");
    setLoading(false);
  };

  return (
    <div className="chatgpt-container">

      {/* Header */}
      <div className="chat-header">🤖 AI Assistant</div>

      {/* Instruction */}
      <div className="chat-instruction">
        Log interaction details here (e.g. "Met Dr. Smith, discussed medicine...")
      </div>

      {/* 🔥 SHOW USER MESSAGE */}
      {displayMessage && (
        <div className="user-msg-box">
          {displayMessage}
        </div>
      )}

      {/* Input */}
      <div className="chat-input-fixed">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe interaction..."
        />

        <button onClick={handleSend}>
          {loading ? "..." : "AI Log"}
        </button>
      </div>

    </div>
  );
}