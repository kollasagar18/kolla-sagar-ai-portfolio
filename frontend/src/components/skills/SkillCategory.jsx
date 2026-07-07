import {
  FaServer,
  FaReact,
  FaDatabase,
  FaBrain,
  FaCode,
  FaTools,
} from "react-icons/fa";

import SkillCard from "./SkillCard";

const categoryIcons = {
  "Backend Development": <FaServer className="text-blue-400" />,
  "Frontend Development": <FaReact className="text-cyan-400" />,
  Database: <FaDatabase className="text-green-400" />,
  "Data Science & AI": <FaBrain className="text-yellow-400" />,
  "Computer Science": <FaCode className="text-purple-400" />,
  "Tools & Platforms": <FaTools className="text-orange-400" />,
};

const SkillCategory = ({ title, items }) => {
  return (
    <section className="mb-20">

      {/* Category Heading */}

      <div className="flex items-center gap-4 mb-8">

        <div className="text-3xl">
          {categoryIcons[title]}
        </div>

        <div>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h2>

          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mt-2" />

        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

        {items.map((skill) => (
          <SkillCard
            key={skill.name || skill}
            skill={skill}
          />
        ))}

      </div>

    </section>
  );
};

export default SkillCategory;