import AnimatedSection from "../ui/AnimatedSection";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[180px]" />

      <Container>
        <AnimatedSection className="relative z-10">

          <SectionTitle
            title="Experience"
            subtitle="My Professional Journey"
          />

          <ExperienceTimeline />

        </AnimatedSection>
      </Container>

    </section>
  );
};

export default Experience;