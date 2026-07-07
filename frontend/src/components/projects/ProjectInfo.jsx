import {
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

const ProjectInfo = ({ role, duration }) => {
  return (
    <div className="flex flex-wrap gap-6 mt-6">

      <div className="flex items-center gap-2 text-slate-300">

        <FaUserTie className="text-blue-400" />

        <span>{role}</span>

      </div>

      <div className="flex items-center gap-2 text-slate-300">

        <FaCalendarAlt className="text-purple-400" />

        <span>{duration}</span>

      </div>

    </div>
  );
};

export default ProjectInfo;