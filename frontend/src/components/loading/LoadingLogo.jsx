const LoadingLogo = () => {
  return (
    <div className="flex justify-center">
      <div
        className="
        w-24
        h-24
        rounded-full
        bg-gradient-to-r
        from-blue-500
        via-cyan-400
        to-purple-500
        flex
        items-center
        justify-center
        text-4xl
        font-bold
        text-white
        shadow-[0_0_50px_rgba(59,130,246,0.8)]
        animate-pulse
      "
      >
        KS
      </div>
    </div>
  );
};

export default LoadingLogo;