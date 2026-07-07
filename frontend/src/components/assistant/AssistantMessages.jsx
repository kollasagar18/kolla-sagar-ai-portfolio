import { useEffect, useRef } from "react";
import { FaRobot, FaUser } from "react-icons/fa";

import AssistantRenderer from "./AssistantRenderer";

const AssistantMessages = ({
  messages,
  typing,
  onSuggestionClick,
}) => {

  const bottomRef = useRef(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, typing]);

  return (

    <div className="flex-1 overflow-y-auto p-5 space-y-5">

      {messages.map((message) => (

        <div
          key={message.id}
          className={`flex ${
            message.sender === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div className="flex gap-3 max-w-[90%]">

            {/* Assistant Avatar */}

            {message.sender === "assistant" && (

              <div
                className="
                w-10
                h-10
                rounded-full
                bg-blue-600
                flex
                items-center
                justify-center
                flex-shrink-0
                "
              >
                <FaRobot />
              </div>

            )}

            {/* Message */}

            <div
              className={`
                px-5
                py-4
                rounded-2xl
                leading-7

                ${
                  message.sender === "assistant"
                    ? "bg-slate-800"
                    : "bg-blue-600"
                }
              `}
            >

              {message.sender === "assistant"

                ? (

                  <>

                    <AssistantRenderer
                      message={message}
                    />

                    {/* AI Suggestions */}

                    {message.suggestions?.length > 0 && (

                      <div className="flex flex-wrap gap-2 mt-5">

                        {message.suggestions.map((item) => (

                          <button
                            key={item}
                            onClick={() => onSuggestionClick(item)}
                            className="
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            bg-slate-900
                            border
                            border-slate-700
                            hover:bg-cyan-600
                            hover:border-cyan-400
                            transition-all
                            duration-300
                            "
                          >

                            {item}

                          </button>

                        ))}

                      </div>

                    )}

                  </>

                )

                : (

                  <p>{message.text}</p>

                )

              }

              {/* Time */}

              {message.time && (

                <div
                  className={`
                    mt-3
                    text-[11px]
                    text-right
                    ${
                      message.sender === "assistant"
                        ? "text-slate-400"
                        : "text-blue-100"
                    }
                  `}
                >

                  {message.time}

                </div>

              )}

            </div>

            {/* User Avatar */}

            {message.sender === "user" && (

              <div
                className="
                w-10
                h-10
                rounded-full
                bg-cyan-500
                flex
                items-center
                justify-center
                flex-shrink-0
                "
              >
                <FaUser />
              </div>

            )}

          </div>

        </div>

      ))}

      {/* Typing Animation */}

      {typing && (

        <div className="flex gap-3">

          <div
            className="
            w-10
            h-10
            rounded-full
            bg-blue-600
            flex
            items-center
            justify-center
            "
          >
            <FaRobot />
          </div>

          <div className="bg-slate-800 rounded-2xl px-5 py-4">

            <div className="flex gap-2">

              <span className="w-2 h-2 rounded-full bg-white animate-bounce"></span>

              <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:150ms]"></span>

              <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:300ms]"></span>

            </div>

          </div>

        </div>

      )}

      <div ref={bottomRef}></div>

    </div>

  );

};

export default AssistantMessages;