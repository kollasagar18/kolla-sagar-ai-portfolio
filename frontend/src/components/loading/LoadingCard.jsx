import LoadingLogo from "./LoadingLogo";
import LoadingBar from "./LoadingBar";

const LoadingCard = () => {
  return (
    <div
      className="
      bg-slate-900/80
      backdrop-blur-xl
      border
      border-slate-700
      rounded-3xl
      px-12
      py-16
      shadow-[0_0_70px_rgba(59,130,246,.25)]
      text-center
      max-w-lg
      w-full
      "
    >
      <LoadingLogo />

      <h1 className="text-4xl font-bold mt-8">
        Kolla Sagar
      </h1>

      <p className="text-cyan-400 text-xl mt-3">
        AI Developer Portfolio
      </p>

      <p className="text-slate-400 mt-10 text-lg">
        🚀 Connecting Backend...
      </p>

      <LoadingBar />

      <p className="mt-8 text-slate-500">
        Please Wait...
      </p>

    </div>
  );
};

export default LoadingCard;