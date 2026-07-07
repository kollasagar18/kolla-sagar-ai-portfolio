import AnimatedSection from "../ui/AnimatedSection";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CertificateGrid from "./CertificateGrid";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 blur-[180px] rounded-full" />

      <Container>

        <AnimatedSection className="relative z-10">

          <SectionTitle
            title="Certificates"
            subtitle="Professional Certifications & Internship Certificates"
          />

          <CertificateGrid />

        </AnimatedSection>

      </Container>

    </section>
  );
};

export default Certificates;