import {
  FaLaptopCode,
  FaCertificate,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

import GlassCard from "../ui/GlassCard";
import { usePortfolio } from "../../context/PortfolioContext";

const HeroStats = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading || !portfolio) {

    return (

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

        {[1, 2, 3, 4].map((item) => (

          <GlassCard
            key={item}
            className="h-36 animate-pulse bg-slate-800"
          />

        ))}

      </div>

    );

  }

  const stats = [

    {
      number: `${portfolio.projects.length}+`,
      title: "Projects",
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
    },

    {
      number: `${portfolio.certificates.length}+`,
      title: "Certificates",
      icon: <FaCertificate className="text-4xl text-yellow-400" />,
    },

    {
      number: `${portfolio.experience.length}`,
      title: "Internships",
      icon: <FaBriefcase className="text-4xl text-cyan-400" />,
    },

    {
      number: portfolio.about.leetcode || "300+",
      title: "LeetCode",
      icon: <FaCode className="text-4xl text-green-400" />,
    },

  ];

  return (

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

      {stats.map((item) => (

        <GlassCard
          key={item.title}
          className="text-center group cursor-pointer"
        >

          <div className="flex justify-center mb-5 group-hover:scale-110 transition">

            {item.icon}

          </div>

          <h2 className="text-4xl font-bold text-white">

            {item.number}

          </h2>

          <p className="text-slate-400 mt-2">

            {item.title}

          </p>

        </GlassCard>

      ))}

    </div>

  );

};

export default HeroStats;