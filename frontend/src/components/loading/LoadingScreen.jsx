import LoadingCard from "./LoadingCard";

const LoadingScreen = () => {
  return (
    <div
      className="
      fixed
      inset-0
      bg-slate-950
      flex
      justify-center
      items-center
      z-[9999]
      overflow-hidden
      "
    >
      <LoadingCard />
    </div>
  );
};

export default LoadingScreen;