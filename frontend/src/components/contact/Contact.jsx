import AnimatedSection from "../ui/AnimatedSection";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 blur-[180px] rounded-full" />

      <Container>

        <AnimatedSection className="relative z-10">

          <SectionTitle
            title="Contact Me"
            subtitle="Let's Build Something Amazing Together"
          />

          <div className="grid lg:grid-cols-2 gap-16 mt-20">

            <ContactInfo />

            <ContactForm />

          </div>

        </AnimatedSection>

      </Container>

    </section>
  );
};

export default Contact;