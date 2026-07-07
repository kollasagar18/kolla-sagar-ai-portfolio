import { usePortfolio } from "../../context/PortfolioContext";

import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {

  const { portfolio, loading, error } = usePortfolio();

  if (loading) {

    return (

      <div className="text-center py-20 text-slate-400">

        Loading Projects...

      </div>

    );

  }

  if (error) {

    return (

      <div className="text-center py-20 text-red-400">

        {error}

      </div>

    );

  }

  if (!portfolio) {

    return (

      <div className="text-center py-20 text-red-400">

        Portfolio data not available.

      </div>

    );

  }

  const projects = portfolio.projects || [];

  if (projects.length === 0) {

    return (

      <div className="text-center py-20 text-slate-400">

        No projects found.

      </div>

    );

  }

  return (

    <div className="grid lg:grid-cols-2 gap-10 mt-16">

      {projects.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
        />

      ))}

    </div>

  );

};

export default ProjectsGrid;