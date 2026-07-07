import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

import ProjectFeature from "./ProjectFeature";
import ProjectTags from "./ProjectTags";
import ProjectInfo from "./ProjectInfo";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-6">

      <div className="bg-slate-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">

        {/* Header */}

        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 flex justify-between items-center p-6 z-20">

          <div>

            <h2 className="text-3xl font-bold text-white">
              {project.title}
            </h2>

            <div className="flex gap-3 mt-3">

              {project.featured && (
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <FaStar />
                  Featured
                </span>
              )}

              <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                {project.status}
              </span>

            </div>

          </div>

          <button
            onClick={onClose}
            className="text-3xl hover:text-red-500 transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Image */}

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover"
        />

        {/* Content */}

        <div className="p-8">

          <p className="text-slate-400 leading-8 text-lg">
            {project.description}
          </p>

          {/* Project Info */}

          <ProjectInfo
            role={project.role}
            duration={project.duration}
          />

          {/* Tech Stack */}

          <h3 className="text-2xl font-bold mt-10">
            🛠 Tech Stack
          </h3>

          <ProjectTags tech={project.tech} />

          {/* Key Features */}

          <h3 className="text-2xl font-bold mt-10">
            ✅ Key Features
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mt-6">

            {project.features?.map((feature) => (
              <ProjectFeature
                key={feature}
                feature={feature}
              />
            ))}

          </div>

          {/* Highlights */}

          {project.highlights && (
            <>
              <h3 className="text-2xl font-bold mt-12">
                ⭐ Project Highlights
              </h3>

              <div className="space-y-4 mt-6">

                {project.highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <FaStar className="text-yellow-400 mt-1" />

                    <p className="text-slate-300">
                      {item}
                    </p>

                  </div>

                ))}

              </div>
            </>
          )}

          {/* Challenges */}

          {project.challenges && (
            <>
              <h3 className="text-2xl font-bold mt-12">
                🚀 Challenges Solved
              </h3>

              <div className="space-y-4 mt-6">

                {project.challenges.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <FaExclamationTriangle className="text-orange-400 mt-1" />

                    <p className="text-slate-300">
                      {item}
                    </p>

                  </div>

                ))}

              </div>
            </>
          )}

          {/* Footer Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectModal;