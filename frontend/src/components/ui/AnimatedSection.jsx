import { motion } from "framer-motion";

const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;