import Card from "../ui/Card";
import { usePortfolio } from "../../context/PortfolioContext";

const PersonalInfo = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (

      <Card>

        <div className="animate-pulse space-y-4">

          <div className="h-8 w-56 bg-slate-800 rounded"></div>

          <div className="grid md:grid-cols-2 gap-4">

            {[1, 2, 3, 4, 5, 6].map((item) => (

              <div
                key={item}
                className="h-6 bg-slate-800 rounded"
              />

            ))}

          </div>

        </div>

      </Card>

    );

  }

  if (!portfolio) {

    return (

      <Card>

        <p className="text-red-500">

          Failed to load personal information.

        </p>

      </Card>

    );

  }

  const about = portfolio.about;
  const contact = portfolio.contact;
  const education = about.education;

  return (

    <Card>

      <h2 className="text-3xl font-bold mb-8">

        Personal Information

      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <p>

          <strong>Name:</strong> {about.name}

        </p>

        <p>

          <strong>Email:</strong> {contact.email}

        </p>

        <p>

          <strong>Phone:</strong> {contact.phone}

        </p>

        <p>

          <strong>Location:</strong> {about.location}

        </p>

        <p>

          <strong>Degree:</strong> {education.degree}

        </p>

        <p>

          <strong>Branch:</strong> {education.branch}

        </p>

        <p>

          <strong>College:</strong> {education.college}

        </p>

        <p>

          <strong>University:</strong> {education.university}

        </p>

        <p>

          <strong>Graduation:</strong> {education.year}

        </p>

      </div>

    </Card>

  );

};

export default PersonalInfo;