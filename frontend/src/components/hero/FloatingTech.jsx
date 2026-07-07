import {
  FaPython,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

const tech = [
  {
    icon: <FaPython />,
    color: "text-yellow-400",
    top: "10%",
    left: "5%",
  },
  {
    icon: <SiDjango />,
    color: "text-green-400",
    top: "20%",
    right: "8%",
  },
  {
    icon: <FaReact />,
    color: "text-cyan-400",
    bottom: "18%",
    left: "0%",
  },
  {
    icon: <SiPostgresql />,
    color: "text-blue-400",
    bottom: "5%",
    right: "5%",
  },
  {
    icon: <FaGitAlt />,
    color: "text-orange-500",
    top: "50%",
    left: "-8%",
  },
];

const FloatingTech = () => {
  return (
    <>
      {tech.map((item, index) => (
        <div
          key={index}
          style={item}
          className={`
          absolute
          w-14
          h-14
          rounded-full
          bg-slate-900/80
          backdrop-blur-xl
          border
          border-slate-700
          flex
          items-center
          justify-center
          text-3xl
          shadow-lg
          animate-pulse
          ${item.color}
          `}
        >
          {item.icon}
        </div>
      ))}
    </>
  );
};

export default FloatingTech;