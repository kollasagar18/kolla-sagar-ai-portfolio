import AnimatedSection from "../ui/AnimatedSection";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillsGrid from "./SkillsGrid";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Effects */}

      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

      <Container>
        <AnimatedSection className="relative z-10">

          <SectionTitle
            subtitle="Technologies I Work With"
            title="My Skills"
          />

          <SkillsGrid />

        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Skills;