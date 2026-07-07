import {
  FaDownload,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

import GlowButton from "../ui/GlowButton";
import Button from "../ui/Button";

const HeroButtons = () => {
  const handleResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-5 pt-2">

      {/* Resume */}

      <GlowButton onClick={handleResume}>

        <div className="flex items-center gap-2">

          <FaDownload />

          <span>Download Resume</span>

        </div>

      </GlowButton>

      {/* Projects */}

      <Button
        variant="secondary"
        onClick={handleProjects}
      >
        <div className="flex items-center gap-2">

          <FaArrowRight />

          <span>View Projects</span>

        </div>

      </Button>

      {/* Contact */}

      <Button
        variant="ghost"
        onClick={handleContact}
      >
        <div className="flex items-center gap-2">

          <FaEnvelope />

          <span>Contact Me</span>

        </div>

      </Button>

    </div>
  );
};

export default HeroButtons;