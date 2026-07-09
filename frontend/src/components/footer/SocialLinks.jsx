import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div>

      <h3 className="text-2xl font-bold mb-6">
        Connect With Me
      </h3>

      <div className="flex gap-5">

        <a
          href="https://github.com/kollasagar18"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/kolla-sagar18/"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/kollasagar116/"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
        >
          <SiLeetcode />
        </a>

        <a
          href="mailto:YOUR_EMAIL@gmail.com"
          className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
        >
          <FaEnvelope />
        </a>

      </div>

    </div>
  );
};

export default SocialLinks;