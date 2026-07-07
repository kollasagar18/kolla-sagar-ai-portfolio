import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

import { usePortfolio } from "../../../context/PortfolioContext";

const ProjectRenderer = ({ message }) => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return <p className="text-slate-400">Loading projects...</p>;

  }

  if (!portfolio) {

    return <p className="text-red-400">Failed to load projects.</p>;

  }

  const projects = portfolio.projects || [];

  const ids =
    message.data?.projectIds ??
    (message.data?.projectId
      ? [message.data.projectId]
      : []);

  const selectedProjects = projects.filter((project) =>
    ids.includes(project.id)
  );

  return (

    <div className="space-y-5">

      <p className="text-slate-300">

        {message.message}

      </p>

      {selectedProjects.map((project) => (

        <div
          key={project.id}
          className="
          overflow-hidden
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          hover:border-cyan-500
          transition-all
          duration-300
          "
        >

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-cover"
          />

          <div className="p-5">

            {project.featured && (

              <span className="inline-flex items-center gap-2 text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full mb-4">

                <FaStar />

                Featured

              </span>

            )}

            <h3 className="text-xl font-bold">

              {project.title}

            </h3>

            <p className="text-slate-400 mt-3">

              {project.description}

            </p>

            <div className="flex flex-wrap gap-2 mt-4">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs"
                >

                  {tech}

                </span>

              ))}

            </div>

            <div className="grid grid-cols-3 gap-3 mt-5 text-sm">

              <div>

                <FaUserTie className="mb-1" />

                {project.role}

              </div>

              <div>

                <FaCalendarAlt className="mb-1" />

                {project.duration}

              </div>

              <div>

                {project.status}

              </div>

            </div>

            <div className="flex gap-3 mt-6">

              <a
                href={project.github || "#"}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 flex justify-center items-center gap-2"
              >

                <FaGithub />

                GitHub

              </a>

              <a
                href={project.demo || "#"}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 flex justify-center items-center gap-2"
              >

                <FaExternalLinkAlt />

                Demo

              </a>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

};

export default ProjectRenderer;