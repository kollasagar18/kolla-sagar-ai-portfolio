import Card from "../ui/Card";
import { usePortfolio } from "../../context/PortfolioContext";

const AboutEducation = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (

      <Card>

        <div className="animate-pulse space-y-4">

          <div className="h-8 w-48 bg-slate-800 rounded"></div>

          <div className="h-6 bg-slate-800 rounded"></div>

          <div className="h-6 bg-slate-800 rounded"></div>

          <div className="h-6 w-32 bg-slate-800 rounded"></div>

        </div>

      </Card>

    );

  }

  if (!portfolio) {

    return (

      <Card>

        <p className="text-red-500">

          Failed to load education.

        </p>

      </Card>

    );

  }

  const education = portfolio.about.education;

  return (

    <Card>

      <h2 className="text-3xl font-bold mb-8">

        🎓 Education

      </h2>

      <div>

        <h3 className="text-xl font-semibold">

          {education.degree} - {education.branch}

        </h3>

        <p className="text-slate-400 mt-2">

          {education.college}

        </p>

        <p className="text-slate-400">

          {education.university}

        </p>

        <p className="text-blue-400 mt-3">

          {education.year}

        </p>

      </div>

    </Card>

  );

};

export default AboutEducation;