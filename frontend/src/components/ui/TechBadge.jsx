const TechBadge = ({ name }) => {
  return (
    <span
      className="
      px-4
      py-2
      rounded-full
      bg-slate-800/80
      border
      border-slate-700
      hover:border-cyan-400
      hover:text-cyan-400
      transition-all
      duration-300
      text-sm
      "
    >
      {name}
    </span>
  );
};

export default TechBadge;