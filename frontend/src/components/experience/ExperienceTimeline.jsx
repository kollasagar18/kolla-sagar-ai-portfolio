import { usePortfolio } from "../../context/PortfolioContext";

import TimelineItem from "./TimelineItem";

const ExperienceTimeline = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (
      <div className="text-center py-20 text-slate-400">
        Loading Experience...
      </div>
    );

  }

  if (!portfolio) {

    return null;

  }

  const experience = portfolio.experience || [];

  return (

    <div className="relative max-w-7xl mx-auto mt-24">

      {/* Animated Timeline Line */}

      <div
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-0
          bottom-0
          w-[4px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-blue-500
          via-cyan-400
          to-purple-500
          shadow-[0_0_25px_rgba(59,130,246,0.5)]
        "
      />

      {experience.map((item, index) => (

        <TimelineItem
          key={item.id}
          item={item}
          index={index}
        />

      ))}

    </div>

  );

};

export default ExperienceTimeline;