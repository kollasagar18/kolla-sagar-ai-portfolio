import {
  FaPython,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

import { motion } from "framer-motion";

import { usePortfolio } from "../../context/PortfolioContext";

const HeroRight = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading || !portfolio) {

    return null;

  }

  const profile = portfolio.about;

  return (

    <div className="relative flex justify-center items-center">

      {/* Floating Python */}

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-6 left-0
        w-14 h-14
        rounded-full
        bg-slate-900
        border border-slate-700
        flex items-center justify-center
        text-yellow-400
        text-3xl"
      >
        <FaPython />
      </motion.div>

      {/* Floating Django */}

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-24 right-0
        w-14 h-14
        rounded-full
        bg-slate-900
        border border-slate-700
        flex items-center justify-center
        text-green-400
        text-3xl"
      >
        <SiDjango />
      </motion.div>

      {/* Floating React */}

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-10 left-5
        w-14 h-14
        rounded-full
        bg-slate-900
        border border-slate-700
        flex items-center justify-center
        text-cyan-400
        text-3xl"
      >
        <FaReact />
      </motion.div>

      {/* Floating PostgreSQL */}

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute bottom-0 right-10
        w-14 h-14
        rounded-full
        bg-slate-900
        border border-slate-700
        flex items-center justify-center
        text-blue-400
        text-3xl"
      >
        <SiPostgresql />
      </motion.div>

      {/* Floating Git */}

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-1/2 -left-6
        w-14 h-14
        rounded-full
        bg-slate-900
        border border-slate-700
        flex items-center justify-center
        text-orange-500
        text-3xl"
      >
        <FaGitAlt />
      </motion.div>

      {/* Main Image */}

      <div className="relative">

        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 blur-3xl opacity-40 animate-pulse"></div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500"
        />

        <img
          src="/public/profile.png"
          alt={profile.name}
          className="
          relative
          w-96
          h-96
          rounded-full
          object-cover
          border-4
          border-slate-700
          shadow-[0_0_60px_rgba(59,130,246,.45)]
          "
        />

      </div>

    </div>

  );

};

export default HeroRight;