import { useState } from "react";

import GlassCard from "../ui/GlassCard";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <GlassCard
        className="
        overflow-hidden
        group
        hover:-translate-y-3
        transition-all
        duration-500
        "
      >
        {/* Image */}

        <div className="overflow-hidden rounded-xl">

          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-64
            object-cover
            group-hover:scale-110
            transition
            duration-700
            "
          />

        </div>

        {/* Content */}

        <div className="mt-6">

          <h2 className="text-2xl font-bold">
            {project.title}
          </h2>

          <p className="text-slate-400 mt-4 leading-7">
            {project.description}
          </p>

          <ProjectTags tech={project.tech} />

          <ProjectButtons
            github={project.github}
            demo={project.demo}
          />

          <button
            onClick={() => setOpen(true)}
            className="
            w-full
            mt-5
            py-3
            rounded-xl
            border
            border-blue-500
            hover:bg-blue-600
            transition
            "
          >
            View Details
          </button>

        </div>

      </GlassCard>

      {open && (
        <ProjectModal
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;