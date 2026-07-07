import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const CodingCard = ({ profile }) => {
  const Icon = profile.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: true }}
      className="
      group
      bg-slate-900/90
      backdrop-blur-md
      border
      border-slate-700
      rounded-3xl
      p-8
      hover:-translate-y-3
      hover:border-cyan-400
      hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
      transition-all
      duration-500
      "
    >

      {/* Icon */}

      <div
        className={`
        w-20
        h-20
        rounded-full
        bg-slate-800
        flex
        items-center
        justify-center
        text-5xl
        mx-auto
        mb-6
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:rotate-12
        ${profile.color}
        `}
      >
        <Icon />
      </div>

      {/* Name */}

      <h3 className="text-2xl font-bold text-center">
        {profile.name}
      </h3>

      {/* Username */}

      <p className="text-center text-cyan-400 mt-2">
        @{profile.username}
      </p>

      {/* Stats */}

      <div
        className="
        mt-6
        text-center
        text-lg
        font-semibold
        text-yellow-400
        "
      >
        {profile.stats}
      </div>

      {/* Description */}

      <p
        className="
        mt-5
        text-center
        text-slate-400
        leading-7
        "
      >
        {profile.description}
      </p>

      {/* Button */}

      <a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
        mt-8
        flex
        items-center
        justify-center
        gap-3
        w-full
        py-3
        rounded-xl
        bg-blue-600
        hover:bg-blue-700
        transition-all
        duration-300
        hover:scale-105
        "
      >
        <FaExternalLinkAlt />

        Visit Profile

      </a>

    </motion.div>
  );
};

export default CodingCard;