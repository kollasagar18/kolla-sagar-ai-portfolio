import { TypeAnimation } from "react-type-animation";

import { usePortfolio } from "../../context/PortfolioContext";

import Badge from "../ui/Badge";
import GradientText from "../ui/GradientText";
import TechBadge from "../ui/TechBadge";

import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";

const HeroLeft = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (

      <div className="space-y-8 animate-pulse">

        <div className="h-10 bg-slate-800 rounded w-56"></div>

        <div className="h-16 bg-slate-800 rounded w-96"></div>

        <div className="h-10 bg-slate-800 rounded w-72"></div>

        <div className="h-32 bg-slate-800 rounded"></div>

      </div>

    );

  }

  if (!portfolio) {

    return (

      <div className="text-red-500">

        Failed to load portfolio.

      </div>

    );

  }

  const about = portfolio.about;

  const skills = portfolio.skills;

  const techStack = [

    ...(skills.backend || []),

    ...(skills.frontend || []),

    ...(skills.database || []),

  ].slice(0, 8);

  return (

    <div className="space-y-8">

      {/* Badge */}

      <Badge>

        🚀 Available for Full-Time Opportunities

      </Badge>

      {/* Greeting */}

      <div>

        <p className="text-slate-400 text-xl mb-3">

          Hello 👋 I'm

        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

          <GradientText>

            {about.name}

          </GradientText>

        </h1>

      </div>

      {/* Typing Animation */}

      <div className="text-2xl md:text-3xl font-semibold text-cyan-400">

        <TypeAnimation

          sequence={[

            about.title,

            2000,

            "Python Developer",

            2000,

            "Django Developer",

            2000,

            "REST API Developer",

            2000,

            "Backend Engineer",

            2000,

          ]}

          wrapper="span"

          speed={50}

          repeat={Infinity}

        />

      </div>

      {/* Description */}

      <p className="text-slate-400 text-lg leading-8 max-w-xl">

        {about.summary}

      </p>

      {/* Tech Stack */}

      

      {/* Buttons */}

      <HeroButtons />

      {/* Social */}

      <HeroSocial />

    </div>

  );

};

export default HeroLeft;