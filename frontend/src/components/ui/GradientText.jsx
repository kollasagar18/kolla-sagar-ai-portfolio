const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default GradientText;