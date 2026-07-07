import { useState } from "react";

import AssistantButton from "./AssistantButton";
import AssistantWindow from "./AssistantWindow";

const Assistant = () => {

  const [open, setOpen] = useState(false);

  const [typing, setTyping] = useState(false);

  const [showQuickActions, setShowQuickActions] = useState(true);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "👋 Welcome Recruiter! I'm Kolla Sagar's AI Assistant. I can help you explore projects, skills, internships, certificates, resume and contact information.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  // ==========================================
  // Clear Chat
  // ==========================================

  const clearChat = () => {

    setShowQuickActions(true);

    setMessages([
      {
        id: 1,
        sender: "assistant",
        text: "👋 Welcome Recruiter! I'm Kolla Sagar's AI Assistant. I can help you explore projects, skills, internships, certificates, resume and contact information.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

  };

  return (
    <>
      <AssistantButton
        open={open}
        onClick={() => setOpen(true)}
      />

      {open && (
        <AssistantWindow
          messages={messages}
          setMessages={setMessages}
          typing={typing}
          setTyping={setTyping}
          showQuickActions={showQuickActions}
          setShowQuickActions={setShowQuickActions}
          onClose={() => setOpen(false)}
          onClear={clearChat}
        />
      )}
    </>
  );

};

export default Assistant;