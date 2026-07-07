import { motion } from "framer-motion";
import TimelineContent from "./TimelineContent";
import TimelineBadge from "./TimelineBadge";

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex mb-24">

      {/* Timeline Badge */}
      <TimelineBadge />

      {/* Left Side */}
      <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-14">

        {isLeft && (
          <motion.div
            initial={{
              opacity: 0,
              x: -120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="w-full max-w-xl"
          >
            <TimelineContent item={item} />
          </motion.div>
        )}

      </div>

      {/* Right Side */}

      <div className="w-full md:flex md:w-1/2 md:justify-start md:pl-14">

        {!isLeft && (
          <motion.div
            initial={{
              opacity: 0,
              x: 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="w-full max-w-xl"
          >
            <TimelineContent item={item} />
          </motion.div>
        )}

        {/* Mobile */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="md:hidden w-full"
        >
          <TimelineContent item={item} />
        </motion.div>

      </div>

    </div>
  );
};

export default TimelineItem;