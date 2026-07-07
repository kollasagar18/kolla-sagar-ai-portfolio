const Button = ({
  children,
  variant = "primary",
  onClick,
}) => {

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-blue-500 text-white hover:bg-blue-600",

    ghost:
      "border border-slate-700 text-slate-300 hover:bg-slate-800",
  };

  return (
    <button
      onClick={onClick}
      className={`
      px-7
      py-3
      rounded-xl
      font-semibold
      transition-all
      duration-300
      ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
};

export default Button;