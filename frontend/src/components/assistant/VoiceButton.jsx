import { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const VoiceButton = ({ onResult }) => {

  const [listening, setListening] = useState(false);

  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert("Speech Recognition is not supported in this browser.");

      return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {

      console.log("🎤 Listening...");

      setListening(true);

    };

    recognition.onresult = (event) => {

      const transcript = event.results[0][0].transcript;

      console.log("Recognized:", transcript);

      setListening(false);

      onResult(transcript);

    };

    recognition.onend = () => {

      console.log("Recognition ended");

      setListening(false);

    };

    recognition.onerror = (event) => {

      console.log("Speech Error:", event.error);

      setListening(false);

      if (event.error === "aborted") {

        // Ignore aborted because Chrome sometimes fires it
        return;

      }

      if (event.error === "no-speech") {

        alert("🎤 No speech detected. Try again.");

        return;

      }

      if (event.error === "audio-capture") {

        alert("🎤 No microphone detected.");

        return;

      }

      if (event.error === "not-allowed") {

        alert("🎤 Please allow microphone access.");

        return;

      }

      alert("Speech Error: " + event.error);

    };

    recognition.start();

  };

  return (

    <button

      onClick={startListening}

      className={`
        w-12
        h-12
        rounded-full
        flex
        items-center
        justify-center
        transition-all
        duration-300
        border

        ${
          listening
            ? "bg-red-600 border-red-400 animate-pulse"
            : "bg-slate-800 border-slate-700 hover:bg-cyan-600"
        }
      `}

    >

      {listening ? <FaMicrophoneSlash /> : <FaMicrophone />}

    </button>

  );

};

export default VoiceButton;