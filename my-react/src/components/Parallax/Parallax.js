import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="parallax relative flex justify-center items-center"
      style={{
        background:
          type === "Services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        className="service font-bold text-7xl
        items-center"
        style={{ y: yText }}
      >
        {type === "Services" ? "What We Do?" : "What We Did?"}
      </motion.h1>

      <motion.div className="mountains">
        <img src="/mountains.png" alt="mountain" />
      </motion.div>

      <motion.div
        ref={ref}
        className="planets"
        style={{
          y: yText,
          backgroundImage: `url(${
            type === "Services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      >
        <img src={type === "Services" ? "/planets.png" : "/sun.png"} alt="planet or sun" />
      </motion.div>

      <motion.div 
      // ref={ref} 
      className="stars" style={{ x: xBg }}>
        <img src="/stars.png" alt="stars" />
      </motion.div>
    </div>
  );
};

export default Parallax;
