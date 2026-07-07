import { motion } from "framer-motion";

import AssistantHeader from "./AssistantHeader";
import AssistantMessages from "./AssistantMessages";
import AssistantInput from "./AssistantInput";

const AssistantWindow = ({
  messages,
  setMessages,
  typing,
  setTyping,
  showQuickActions,
  setShowQuickActions,
  onClose,
  onClear,
}) => {

  const handleSuggestionClick = (text) => {

    console.log("Suggestion:", text);

    // We'll connect this later.

  };

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 80,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        fixed
        bottom-28
        right-8
        z-[9999]

        w-[440px]
        h-[720px]

        bg-slate-900/95
        backdrop-blur-xl

        rounded-[28px]

        border
        border-slate-700

        shadow-[0_30px_80px_rgba(0,0,0,.55)]

        flex
        flex-col

        overflow-hidden
      "
    >

      <AssistantHeader
        onClose={onClose}
        onClear={onClear}
        typing={typing}
        online={true}
      />

      <AssistantMessages
        messages={messages}
        typing={typing}
        onSuggestionClick={handleSuggestionClick}
      />

      <AssistantInput
        messages={messages}
        setMessages={setMessages}
        typing={typing}
        setTyping={setTyping}
        showQuickActions={showQuickActions}
        setShowQuickActions={setShowQuickActions}
      />

    </motion.div>

  );

};

export default AssistantWindow;