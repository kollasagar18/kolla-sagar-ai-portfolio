import AnimatedSection from "../ui/AnimatedSection";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 bg-slate-900 overflow-hidden"
    >

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />

      <Container>

        <AnimatedSection className="relative z-10">

          <SectionTitle
            title="Featured Projects"
            subtitle="Things I've Built"
          />

          <ProjectsGrid />

        </AnimatedSection>

      </Container>

    </section>
  );
};

export default Projects;