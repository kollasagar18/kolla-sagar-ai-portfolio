import Container from "../ui/Container";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">

      <Container>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-bold text-blue-500">
              KS
            </h2>

            <p className="text-slate-400 mt-6 leading-8">
              Backend Developer specializing in Python,
              Django, REST APIs and scalable web applications.
            </p>

          </div>

          {/* Quick Links */}

          <FooterLinks />

          {/* Social */}

          <SocialLinks />

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-400">

            © {new Date().getFullYear()} Kolla Sagar.
            All Rights Reserved.

          </p>

          <a
            href="#home"
            className="
            w-12
            h-12
            rounded-full
            bg-blue-600
            flex
            items-center
            justify-center
            hover:bg-blue-700
            transition
            "
          >
            <FaArrowUp />
          </a>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;