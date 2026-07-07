const GlowButton = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
      px-8
      py-3
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      to-cyan-500
      text-white
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
      "
    >
      {children}
    </button>
  );
};

export default GlowButton;