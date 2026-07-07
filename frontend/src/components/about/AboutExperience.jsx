import Card from "../ui/Card";
import { usePortfolio } from "../../context/PortfolioContext";

const AboutExperience = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (

      <Card>

        <div className="animate-pulse h-48 bg-slate-800 rounded-xl"></div>

      </Card>

    );

  }

  if (!portfolio) {

    return null;

  }

  const experience = portfolio.experience || [];

  return (

    <Card>

      <h2 className="text-3xl font-bold mb-8">

        💼 Experience

      </h2>

      {experience.map((item) => (

        <div
          key={item.id}
          className="mb-8"
        >

          <h3 className="text-xl font-semibold">

            {item.role}

          </h3>

          <p className="text-slate-400 mt-2">

            {item.company}

          </p>

          <p className="text-slate-400">

            {item.location}

          </p>

          <p className="text-blue-400 mt-2">

            {item.duration}

          </p>

          <div className="flex flex-wrap gap-2 mt-4">

            {item.technologies?.map((tech) => (

              <span
                key={tech}
                className="bg-slate-800 px-3 py-1 rounded-full"
              >

                {tech}

              </span>

            ))}

          </div>

        </div>

      ))}

    </Card>

  );

};

export default AboutExperience;