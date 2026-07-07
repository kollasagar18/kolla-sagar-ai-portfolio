const GlassCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
      rounded-2xl
      border
      border-slate-700/60
      bg-slate-900/70
      backdrop-blur-xl
      shadow-xl
      hover:border-blue-500
      hover:shadow-blue-500/20
      transition-all
      duration-500
      ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;