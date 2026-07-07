const Card = ({ children }) => {
  return (
    <div
      className="

      rounded-2xl

      border

      border-slate-700

      bg-slate-900/60

      backdrop-blur-lg

      shadow-lg

      hover:border-blue-500

      hover:-translate-y-2

      transition

      duration-300

      p-8
      "
    >
      {children}
    </div>
  );
};

export default Card;