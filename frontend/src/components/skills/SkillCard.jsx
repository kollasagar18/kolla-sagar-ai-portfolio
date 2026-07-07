import GlassCard from "../ui/GlassCard";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <GlassCard
      className="
      group
      cursor-pointer
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-blue-500/20
      p-5
      "
    >
      {/* Icon */}

      <div
        className={`
        w-16
        h-16
        mx-auto
        rounded-2xl
        bg-slate-800/80
        flex
        items-center
        justify-center
        text-4xl
        mb-4
        transition-all
        duration-500
        group-hover:rotate-12
        group-hover:scale-110
        group-hover:shadow-lg
        ${skill.color}
        `}
      >
        <Icon />
      </div>

      {/* Skill Name */}

      <h3 className="text-lg font-bold text-center text-white">
        {skill.name}
      </h3>

      {/* Experience */}

      <div className="flex justify-center mt-2">
        <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">
          {skill.experience}
        </span>
      </div>

      {/* Skill Level */}

      <div className="flex justify-between items-center mt-5 text-sm">
        <span className="text-slate-400">
          {skill.level}
        </span>

        <span className="font-semibold text-cyan-400">
          {skill.percentage}%
        </span>
      </div>

      {/* Progress Bar */}

      <div className="w-full h-2 bg-slate-800 rounded-full mt-3 overflow-hidden">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-700"
          style={{
            width: `${skill.percentage}%`,
          }}
        />

      </div>

      {/* Footer */}

      <div className="flex justify-center mt-5">

        <span
          className={`
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold

          ${
            skill.level === "Advanced"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }
          `}
        >
          {skill.level}
        </span>

      </div>
    </GlassCard>
  );
};

export default SkillCard;