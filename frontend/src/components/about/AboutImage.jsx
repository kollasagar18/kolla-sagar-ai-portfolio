import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";

const AboutImage = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (

      <div className="flex justify-center">

        <div
          className="
          w-80
          h-80
          rounded-3xl
          bg-slate-800
          animate-pulse
          "
        />

      </div>

    );

  }

  if (!portfolio) {

    return null;

  }

  const about = portfolio.about;

  return (

    <div className="flex justify-center">

      <motion.div

        initial={{ opacity: 0, x: -50 }}

        whileInView={{ opacity: 1, x: 0 }}

        transition={{ duration: 0.7 }}

        className="relative"

      >

        {/* Glow */}

        <div
          className="
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-purple-600
          blur-3xl
          opacity-30
          "
        />

        {/* Image */}

        <img

          src={portfolio.about.about_image}
        

          alt={about.name}

          className="
          relative
          w-80
          h-80
          object-cover
          rounded-3xl
          border-4
          border-slate-700
          shadow-[0_0_60px_rgba(59,130,246,.35)]
          "

        />

      </motion.div>

    </div>

  );

};

export default AboutImage;