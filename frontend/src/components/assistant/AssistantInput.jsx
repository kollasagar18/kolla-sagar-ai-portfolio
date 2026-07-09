import { useState } from "react";
import { FaPaperPlane, FaBolt } from "react-icons/fa";

import WelcomeCard from "./WelcomeCard";
import QuickActions from "./QuickActions";
import VoiceButton from "./VoiceButton";

const AssistantInput = ({
  messages,
  setMessages,
  typing,
  setTyping,
  showQuickActions,
  setShowQuickActions,
}) => {

  const [input, setInput] = useState("");

  // ==========================================
  // Voice Recognition
  // ==========================================

  const handleVoice = (text) => {

    setInput(text);

    sendMessage(text);

  };

  // ==========================================
  // Send Message
  // ==========================================

  const sendMessage = async (customMessage = null) => {

    const question = customMessage || input;

    if (!question.trim()) return;

    // Hide quick actions after first interaction
    setShowQuickActions(false);

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: question,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [

      ...prev,

      userMessage,

    ]);

    setInput("");

    setTyping(true);

    try {

      const response = await fetch(

        `${import.meta.env.VITE_API_URL}/api/chat/`,
        //"http://127.0.0.1:8000/api/chat/",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify({

            message: question,

          }),

        }

      );

      const data = await response.json();

      setTyping(false);

      setMessages((prev) => [

        ...prev,

        {
        id: Date.now() + 1,
        sender: "assistant",
        text: data.message,
        type: data.type,
        data: data.data,
        suggestions: data.suggestions,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }

      ]);

    }

    catch {

      setTyping(false);

      setMessages((prev) => [

        ...prev,

        {
  id: Date.now() + 1,
  sender: "assistant",
  text: "❌ Unable to connect to AI Server.",
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
}

      ]);

    }

  };

  return (

    <div className="border-t border-slate-700 p-4 bg-slate-900/60 backdrop-blur-md">

      {showQuickActions && <WelcomeCard />}

      {/* Toggle Button */}

      {!showQuickActions && (

        <button

          onClick={() => setShowQuickActions(true)}

          className="
          flex
          items-center
          gap-2
          text-sm
          text-cyan-400
          hover:text-cyan-300
          mb-3
          "

        >

          <FaBolt />

          Quick Actions

        </button>

      )}

      {/* Quick Actions */}

      {showQuickActions && (

        <QuickActions

          onSelect={(prompt) => sendMessage(prompt)}

        />

      )}

      {/* Input */}

      <div className="flex gap-3">

        <input

          value={input}

          onChange={(e) => setInput(e.target.value)}

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              sendMessage();

            }

          }}

          placeholder="Ask anything about Sagar..."

          className="
          flex-1
          bg-slate-800
          rounded-full
          px-5
          py-3
          outline-none
          border
          border-slate-700
          focus:border-cyan-400
          "

        />

        {/* Voice Button */}

        <VoiceButton

          onResult={handleVoice}

        />

        {/* Send Button */}

        <button

          onClick={() => sendMessage()}

          className="
          w-12
          h-12
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          hover:scale-110
          transition
          flex
          items-center
          justify-center
          "

        >

          <FaPaperPlane />

        </button>

      </div>

    </div>

  );

};

export default AssistantInput;