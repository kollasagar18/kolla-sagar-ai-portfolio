import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiRender,
  SiNetlify,
} from "react-icons/si";

import { usePortfolio } from "../../context/PortfolioContext";
import SkillCategory from "./SkillCategory";

const iconMap = {
  Python: FaPython,
  Django: SiDjango,
  FastAPI: SiFastapi,
  "REST API": FaDatabase,

  React: FaReact,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,

  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,

  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: FaDatabase,
  "Scikit-learn": SiScikitlearn,

  Git: FaGitAlt,
  GitHub: FaGitAlt,
  Postman: SiPostman,
  Render: SiRender,
  Netlify: SiNetlify,
  "VS Code": FaDatabase,
};

const colorMap = {
  Python: "text-yellow-400",
  Django: "text-green-400",
  FastAPI: "text-teal-400",
  React: "text-cyan-400",
  PostgreSQL: "text-blue-400",
  MySQL: "text-orange-400",
  Git: "text-red-400",
};

const createSkillObjects = (skills = []) =>
  skills.map((name) => ({
    name,
    icon: iconMap[name] || FaDatabase,
    color: colorMap[name] || "text-cyan-400",
    level: "Advanced",
    percentage: 90,
    experience: "Hands-on",
  }));

const SkillsGrid = () => {
  const { portfolio, loading } = usePortfolio();

  if (loading) {
    return <div className="text-center py-20">Loading Skills...</div>;
  }

  if (!portfolio) {
    return <div className="text-center py-20">Failed to load skills.</div>;
  }

  const skills = [
    {
      category: "Backend Development",
      items: createSkillObjects(portfolio.skills.backend),
    },
    {
      category: "Frontend Development",
      items: createSkillObjects(portfolio.skills.frontend),
    },
    {
      category: "Database",
      items: createSkillObjects(portfolio.skills.database),
    },
    {
      category: "Data Science & AI",
      items: createSkillObjects(portfolio.skills.ai),
    },
    {
      category: "Tools & Platforms",
      items: createSkillObjects(portfolio.skills.tools),
    },
  ];

  return (
    <div className="space-y-16">
      {skills.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
        >
          <SkillCategory
            title={category.category}
            items={category.items}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;