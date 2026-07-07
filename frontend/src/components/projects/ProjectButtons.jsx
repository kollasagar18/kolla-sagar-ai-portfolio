import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectButtons = ({ github, demo }) => {
  return (
    <div className="flex gap-4 mt-6">

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="
        flex-1
        text-center
        bg-slate-800
        py-3
        rounded-xl
        hover:bg-slate-700
        transition
        "
      >
        <FaGithub className="inline mr-2" />
        GitHub
      </a>

      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="
        flex-1
        text-center
        bg-blue-600
        py-3
        rounded-xl
        hover:bg-blue-700
        transition
        "
      >
        <FaExternalLinkAlt className="inline mr-2" />
        Live Demo
      </a>

    </div>
  );
};

export default ProjectButtons;