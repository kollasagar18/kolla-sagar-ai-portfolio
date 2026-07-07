const ProjectTags = ({ tech }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">

      {tech.map((item) => (

        <span
          key={item}
          className="
          px-3
          py-1
          rounded-full
          text-sm
          bg-slate-800
          border
          border-slate-700
          text-slate-300
          hover:border-blue-500
          hover:text-blue-400
          transition
          "
        >
          {item}
        </span>

      ))}

    </div>
  );
};

export default ProjectTags;