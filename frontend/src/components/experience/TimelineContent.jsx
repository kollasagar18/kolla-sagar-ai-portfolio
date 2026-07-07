import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaCertificate,
} from "react-icons/fa";

const TimelineContent = ({ item }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="
      bg-slate-900/90
      backdrop-blur-md
      border
      border-slate-700
      rounded-3xl
      p-8
      shadow-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-cyan-400
      hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
      "
    >

      {/* Company */}

      <div className="flex items-center gap-5">

        <img
          src={item.logo}
          alt={item.company}
          className="
          w-16
          h-16
          rounded-xl
          bg-white
          p-2
          object-contain
          shadow-lg
          "
        />

        <div>

          <h3 className="text-2xl font-bold">
            {item.company}
          </h3>

          <p className="text-cyan-400 font-semibold mt-1">
            {item.role}
          </p>

        </div>

      </div>

      {/* Info */}

      <div className="flex flex-wrap gap-6 mt-6 text-slate-400">

        <span className="flex items-center gap-2">
          <FaCalendarAlt />
          {item.duration}
        </span>

        <span className="flex items-center gap-2">
          <FaMapMarkerAlt />
          {item.location}
        </span>

      </div>

      {/* Description */}

      <p className="mt-6 text-slate-300 leading-8">
        {item.description}
      </p>

      {/* Responsibilities */}

      <h4 className="mt-8 text-lg font-bold">
        Responsibilities
      </h4>

      <ul className="space-y-3 mt-4">

        {item.responsibilities.map((task) => (

          <li
            key={task}
            className="flex gap-3 text-slate-300"
          >

            <FaLaptopCode className="text-cyan-400 mt-1" />

            {task}

          </li>

        ))}

      </ul>

      {/* Achievements */}

      <h4 className="mt-8 text-lg font-bold text-yellow-400">
        🏆 Key Achievements
      </h4>

      <div className="space-y-3 mt-4">

        {item.achievements?.map((achievement) => (

          <div
            key={achievement}
            className="flex gap-3"
          >

            <span className="text-yellow-400">
              ⭐
            </span>

            <p className="text-slate-300">
              {achievement}
            </p>

          </div>

        ))}

      </div>

      {/* Technologies */}

      <div className="flex flex-wrap gap-3 mt-8">

        {item.technologies.map((tech) => (

          <span
            key={tech}
            className="
            px-4
            py-2
            rounded-full
            bg-slate-800
            border
            border-slate-700
            text-sm
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-slate-700
            hover:scale-105
            "
          >
            {tech}
          </span>

        ))}

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 mt-8">

        <a
          href={item.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          hover:scale-105
          transition-all
          duration-300
          shadow-lg
          "
        >
          <FaCertificate />

          View Certificate

        </a>

        <a
          href={item.companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-xl
          border
          border-slate-600
          hover:border-cyan-400
          hover:bg-slate-800
          hover:scale-105
          transition-all
          duration-300
          "
        >
          <FaExternalLinkAlt />

          Visit Company

        </a>

      </div>

    </motion.div>
  );
};

export default TimelineContent;