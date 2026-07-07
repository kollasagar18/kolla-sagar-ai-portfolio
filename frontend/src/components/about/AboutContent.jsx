import Badge from "../ui/Badge";
import Button from "../ui/Button";

import { usePortfolio } from "../../context/PortfolioContext";

const AboutContent = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (

      <div className="space-y-6 animate-pulse">

        <div className="w-40 h-8 bg-slate-800 rounded"></div>

        <div className="w-72 h-12 bg-slate-800 rounded"></div>

        <div className="w-56 h-8 bg-slate-800 rounded"></div>

        <div className="space-y-3">

          <div className="h-4 bg-slate-800 rounded"></div>

          <div className="h-4 bg-slate-800 rounded"></div>

          <div className="h-4 bg-slate-800 rounded"></div>

          <div className="h-4 bg-slate-800 rounded w-4/5"></div>

        </div>

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

  return (

    <div>

      <Badge>

        🚀 Open To Work

      </Badge>

      <h2 className="text-5xl font-bold mt-8">

        {about.name}

      </h2>

      <h3 className="text-blue-400 text-2xl mt-3">

        {about.title}

      </h3>

      <p className="text-slate-400 leading-9 mt-8">

        {about.summary}

      </p>

      <div className="mt-10 flex gap-4 flex-wrap">

        <Button
          onClick={() => window.open(portfolio.contact.resume, "_blank")}
        >

          Download Resume

        </Button>

      </div>

    </div>

  );

};

export default AboutContent;