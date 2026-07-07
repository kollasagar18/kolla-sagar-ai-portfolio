import AnimatedSection from "../ui/AnimatedSection";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import GitHubCard from "./GitHubCard";

const GitHubStats = () => {
  return (
    <section
      id="github"
      className="relative py-20 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full" />

      <Container>

        <AnimatedSection className="relative z-10">

          <SectionTitle
            title="GitHub Statistics"
            subtitle="My Open Source Contributions"
          />

          <GitHubCard />

        </AnimatedSection>

      </Container>

    </section>
  );
};

export default GitHubStats;