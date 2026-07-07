import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { usePortfolio } from "../../context/PortfolioContext";

const HeroSocial = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading || !portfolio) {

    return null;

  }

  const socialItems = [

    {
      icon: <FaGithub />,
      link: portfolio.social.github,
      label: "GitHub",
      hover: "hover:bg-white hover:text-black",
    },

    {
      icon: <FaLinkedin />,
      link: portfolio.social.linkedin,
      label: "LinkedIn",
      hover: "hover:bg-blue-600 hover:text-white",
    },

    {
      icon: <SiLeetcode />,
      link: portfolio.social.leetcode,
      label: "LeetCode",
      hover: "hover:bg-yellow-500 hover:text-black",
    },

    {
      icon: <FaEnvelope />,
      link: `mailto:${portfolio.contact.email}`,
      label: "Email",
      hover: "hover:bg-red-500 hover:text-white",
    },

  ];

  return (

    <div className="flex flex-wrap items-center gap-5 pt-2">

      {socialItems.map((item) => (

        <a
          key={item.label}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          title={item.label}
          className="
          w-12
          h-12
          rounded-full
          border
          border-slate-700
          bg-slate-900/70
          backdrop-blur-md
          flex
          items-center
          justify-center
          text-xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-lg
          "
        >
          {item.icon}
        </a>

      ))}

    </div>

  );

};

export default HeroSocial;