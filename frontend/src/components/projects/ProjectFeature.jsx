import { FaCheckCircle } from "react-icons/fa";

const ProjectFeature = ({ feature }) => {
  return (
    <div className="flex items-center gap-3">

      <FaCheckCircle className="text-green-400" />

      <span className="text-slate-300">
        {feature}
      </span>

    </div>
  );
};

export default ProjectFeature;