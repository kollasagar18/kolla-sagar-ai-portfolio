import Card from "../ui/Card";
import { usePortfolio } from "../../context/PortfolioContext";

const AchievementCards = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (

      <div className="grid md:grid-cols-4 gap-8 mt-20">

        {[1, 2, 3, 4].map((item) => (

          <Card
            key={item}
            className="animate-pulse h-40 bg-slate-800"
          />

        ))}

      </div>

    );

  }

  if (!portfolio) {

    return null;

  }

  const achievements = [

    
  ];

  return (

    <div className="grid md:grid-cols-4 gap-8 mt-20">

      {achievements.map((item) => (

        <Card
          key={item.title}
          className="text-center hover:scale-105 transition duration-300"
        >

          <h2 className="text-5xl font-bold text-blue-400">

            {item.number}

          </h2>

          <p className="mt-4 text-slate-400">

            {item.title}

          </p>

        </Card>

      ))}

    </div>

  );

};

export default AchievementCards;