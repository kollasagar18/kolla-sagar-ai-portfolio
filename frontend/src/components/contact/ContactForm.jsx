import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
      className="
      bg-slate-900/80
      backdrop-blur-md
      border
      border-slate-700
      rounded-3xl
      p-8
      shadow-xl
      "
    >
      <h2 className="text-3xl font-bold mb-8">
        Send Me a Message
      </h2>

      <form className="space-y-6">

        {/* Name */}

        <div>
          <label className="block mb-2 text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="
            w-full
            px-5
            py-4
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            focus:border-cyan-400
            focus:outline-none
            transition
            "
          />
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="
            w-full
            px-5
            py-4
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            focus:border-cyan-400
            focus:outline-none
            transition
            "
          />
        </div>

        {/* Subject */}

        <div>
          <label className="block mb-2 text-slate-300">
            Subject
          </label>

          <input
            type="text"
            placeholder="Enter subject"
            className="
            w-full
            px-5
            py-4
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            focus:border-cyan-400
            focus:outline-none
            transition
            "
          />
        </div>

        {/* Message */}

        <div>
          <label className="block mb-2 text-slate-300">
            Message
          </label>

          <textarea
            rows="6"
            placeholder="Write your message..."
            className="
            w-full
            px-5
            py-4
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            focus:border-cyan-400
            focus:outline-none
            resize-none
            transition
            "
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="
          w-full
          flex
          justify-center
          items-center
          gap-3
          bg-blue-600
          hover:bg-blue-700
          py-4
          rounded-xl
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          shadow-lg
          "
        >
          <FaPaperPlane />

          Send Message

        </button>

      </form>

    </motion.div>
  );
};

export default ContactForm;