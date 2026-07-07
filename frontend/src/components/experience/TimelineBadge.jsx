import { FaBriefcase } from "react-icons/fa";

const TimelineBadge = () => {
  return (
    <div
      className="
        hidden
        md:flex
        absolute
        left-1/2
        top-10
        -translate-x-1/2
        z-20
      "
    >
      <div
        className="
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          flex
          items-center
          justify-center
          border-4
          border-slate-950
          shadow-[0_0_35px_rgba(59,130,246,0.8)]
          animate-pulse
        "
      >
        <FaBriefcase className="text-white text-xl" />
      </div>
    </div>
  );
};

export default TimelineBadge;