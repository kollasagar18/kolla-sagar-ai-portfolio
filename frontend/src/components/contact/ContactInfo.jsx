import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { usePortfolio } from "../../context/PortfolioContext";

const ContactInfo = () => {

  const { portfolio, loading } = usePortfolio();

  if (loading) {

    return (
      <div className="text-center py-20 text-slate-400">
        Loading Contact...
      </div>
    );

  }

  if (!portfolio) {

    return null;

  }

  const contactData = portfolio.contact;

  const contact = [

    {
      id: 1,
      title: "Email",
      value: contactData.email,
      link: `mailto:${contactData.email}`,
      icon: FaEnvelope,
      color: "text-red-400",
    },

    {
      id: 2,
      title: "Phone",
      value: contactData.phone,
      link: `tel:${contactData.phone}`,
      icon: FaPhone,
      color: "text-green-400",
    },

    {
      id: 3,
      title: "LinkedIn",
      value: "View Profile",
      link: contactData.linkedin,
      icon: FaLinkedin,
      color: "text-blue-400",
    },

    {
      id: 4,
      title: "GitHub",
      value: "View Repository",
      link: contactData.github,
      icon: FaGithub,
      color: "text-white",
    },

    {
      id: 5,
      title: "Location",
      value: contactData.location,
      link: "#",
      icon: FaMapMarkerAlt,
      color: "text-cyan-400",
    },

  ];

  return (

    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      <h2 className="text-4xl font-bold">
        Let's Work Together 🚀
      </h2>

      <p className="mt-6 text-slate-400 leading-8 text-lg">
        I'm currently looking for Backend Developer opportunities.
        Feel free to contact me for full-time roles,
        internships, freelance work, or collaborations.
      </p>

      <div className="space-y-6 mt-12">

        {contact.map((item) => {

          const Icon = item.icon;

          return (

            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              items-center
              gap-5
              p-5
              rounded-2xl
              bg-slate-900/80
              border
              border-slate-700
              hover:border-cyan-400
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >

              <div
                className={`
                w-14
                h-14
                rounded-xl
                bg-slate-800
                flex
                items-center
                justify-center
                text-2xl
                ${item.color}
                `}
              >
                <Icon />
              </div>

              <div>

                <h3 className="font-semibold text-lg">

                  {item.title}

                </h3>

                <p className="text-slate-400">

                  {item.value}

                </p>

              </div>

            </a>

          );

        })}

      </div>

    </motion.div>

  );

};

export default ContactInfo;