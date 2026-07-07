const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certificates",
  "Contact",
];

const FooterLinks = () => {
  return (
    <div>

      <h3 className="text-2xl font-bold mb-6">
        Quick Links
      </h3>

      <div className="space-y-3">

        {links.map((link) => (

          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="
            block
            text-slate-400
            hover:text-cyan-400
            transition
            "
          >
            {link}
          </a>

        ))}

      </div>

    </div>
  );
};

export default FooterLinks;