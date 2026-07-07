import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const AssistantButton = ({ onClick, open }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        boxShadow: [
          "0 0 20px rgba(59,130,246,.35)",
          "0 0 40px rgba(59,130,246,.65)",
          "0 0 20px rgba(59,130,246,.35)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="
      fixed
      bottom-8
      right-8
      z-[9999]

      flex
      items-center
      gap-3

      bg-gradient-to-r
      from-blue-600
      to-cyan-500

      rounded-full

      px-5
      py-4

      cursor-pointer

      text-white
      "
    >
      {/* Robot */}

      <FaRobot className="text-3xl" />

      {/* Text */}

      <div className="text-left hidden md:block">

        <p className="text-sm font-semibold">
          AI Assistant
        </p>

        <div className="flex items-center gap-2">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-xs text-blue-100">
            Online
          </span>

        </div>

      </div>

    </motion.button>
  );
};

export default AssistantButton;