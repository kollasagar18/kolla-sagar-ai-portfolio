import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-8">
        Send Me a Message
      </h2>

      <form onSubmit={sendEmail} className="space-y-6">

        {/* Name */}

        <div>

          <label className="block mb-2 text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
          />

        </div>

        {/* Email */}

        <div>

          <label className="block mb-2 text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
          />

        </div>

        {/* Subject */}

        <div>

          <label className="block mb-2 text-slate-300">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            required
            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
          />

        </div>

        {/* Message */}

        <div>

          <label className="block mb-2 text-slate-300">
            Message
          </label>

          <textarea
            rows="6"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none resize-none"
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <FaPaperPlane />

          {loading ? "Sending..." : "Send Message"}

        </button>

      </form>

    </motion.div>
  );
};

export default ContactForm;