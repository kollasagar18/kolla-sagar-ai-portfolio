const ProjectTechRenderer = ({ message }) => {

  const technologies = message.data?.technologies || [];

  return (

    <div className="space-y-5">

      <p className="text-slate-300">

        {message.message}

      </p>

      <div className="flex flex-wrap gap-3">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="
            px-4
            py-2
            rounded-full
            bg-cyan-500/20
            text-cyan-300
            border
            border-cyan-500/30
            "
          >

            {tech}

          </span>

        ))}

      </div>

    </div>

  );

};

export default ProjectTechRenderer;