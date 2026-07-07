import { FaRobot } from "react-icons/fa";

const WelcomeCard = () => {

  return (

    <div
      className="
      mb-4
      rounded-2xl
      bg-gradient-to-r
      from-blue-600/20
      to-cyan-500/20
      border
      border-cyan-500/30
      p-5
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
          w-12
          h-12
          rounded-full
          bg-blue-600
          flex
          items-center
          justify-center
          text-white
          "
        >
          <FaRobot />
        </div>

        <div>

          <h2 className="font-bold text-lg">

            AI Recruiter Assistant

          </h2>

          <p className="text-green-400 text-sm">

            ● Online

          </p>

        </div>

      </div>

      <p className="mt-5 text-slate-300 leading-7">

        👋 Welcome Recruiter!

      </p>

      <p className="text-slate-400 mt-2 leading-7">

        I'm Kolla Sagar's AI Assistant.

        I can instantly answer questions about

        <span className="text-cyan-400">

          {" "}Projects, Skills, Experience,
          Certificates, Education,
          Resume and Contact.

        </span>

      </p>

    </div>

  );

};

export default WelcomeCard;