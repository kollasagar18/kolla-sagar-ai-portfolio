import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutEducation from "./AboutEducation";
import AboutExperience from "./AboutExperience";
import PersonalInfo from "./PersonalInfo";
import AchievementCards from "./AchievementCards";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-slate-950"
    >
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Get To Know Me"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutImage />

          <AboutContent />

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          <AboutEducation />

          <AboutExperience />

        </div>

        <PersonalInfo />

        <AchievementCards />

      </Container>
    </section>
  );
};

export default About;