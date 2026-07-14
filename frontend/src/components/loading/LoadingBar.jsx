const LoadingBar = () => {
  return (
    <div className="w-full max-w-sm mx-auto mt-8">

      <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

        <div
          className="
          h-full
          w-2/3
          bg-gradient-to-r
          from-blue-500
          via-cyan-400
          to-purple-500
          animate-pulse
        "
        />

      </div>

    </div>
  );
};

export default LoadingBar;