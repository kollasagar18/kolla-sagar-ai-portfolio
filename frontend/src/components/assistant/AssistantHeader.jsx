import {
  FaRobot,
  FaTimes,
  FaCircle,
  FaTrash,
} from "react-icons/fa";

const AssistantHeader = ({
  onClose,
  onClear,
  typing,
  online,
}) => {

  return (

    <div
      className="
      flex
      items-center
      justify-between

      px-6
      py-4

      bg-gradient-to-r
      from-slate-900
      via-blue-900
      to-cyan-900

      border-b
      border-cyan-500/30

      backdrop-blur-xl
      "
    >

      {/* Left */}

      <div className="flex items-center gap-4">

        <div
          className="
          w-14
          h-14

          rounded-2xl

          bg-gradient-to-br
          from-blue-500
          to-cyan-400

          flex
          items-center
          justify-center

          shadow-lg
          shadow-cyan-500/30

          text-2xl
          "
        >

          <FaRobot />

        </div>

        <div>

          <h2 className="font-bold text-lg tracking-wide">

            AI Recruiter Assistant

          </h2>

          {/* Status */}

          <div
            className="
            flex
            items-center
            gap-2
            text-xs
            mt-1
            "
          >

            {typing ? (

              <>

                <FaCircle
                  className="
                  text-yellow-400
                  text-[8px]
                  animate-pulse
                  "
                />

                <span className="text-yellow-300">

                  Thinking...

                </span>

              </>

            ) : online ? (

              <>

                <FaCircle
                  className="
                  text-green-400
                  text-[8px]
                  animate-pulse
                  "
                />

                <span className="text-slate-300">

                  Powered by Gemini • Online

                </span>

              </>

            ) : (

              <>

                <FaCircle
                  className="
                  text-red-500
                  text-[8px]
                  animate-pulse
                  "
                />

                <span className="text-red-400">

                  Offline

                </span>

              </>

            )}

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        {/* Clear Chat */}

        <button
          onClick={onClear}
          title="Clear Chat"
          className="
          w-10
          h-10

          rounded-xl

          bg-white/10

          hover:bg-yellow-500

          transition-all
          duration-300

          flex
          items-center
          justify-center
          "
        >

          <FaTrash />

        </button>

        {/* Close */}

        <button
          onClick={onClose}
          title="Close Assistant"
          className="
          w-10
          h-10

          rounded-xl

          bg-white/10

          hover:bg-red-500

          transition-all
          duration-300

          flex
          items-center
          justify-center
          "
        >

          <FaTimes />

        </button>

      </div>

    </div>

  );

};

export default AssistantHeader;