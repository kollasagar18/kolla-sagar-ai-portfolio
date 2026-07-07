import AnimatedSection from "../ui/AnimatedSection";
import Container from "../ui/Container";

import HeroBackground from "./HeroBackground";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      <HeroBackground />

      <Container>
        <AnimatedSection className="relative pt-32 pb-16">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <HeroLeft />

            <HeroRight />

          </div>

          <div className="mt-24">
            <HeroStats />
          </div>

        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Hero;