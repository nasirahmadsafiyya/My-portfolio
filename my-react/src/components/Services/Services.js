import React, { useRef } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 1,
      delay: 0.5,
    },
  },
};

const Services = () => {

  const ref = useRef()

  // const isInView = (ref,{margin:"-100px"})

  return (
    <motion.div
      className="services flex flex-col justify-between gap-16"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div
        variants={variants}
        className="textContainer flex items-center gap-5 flex-1 self-end"
      >
        <p className="font-light text-lg text-gray-500 text-right">
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr className="w-80 border border-t-gray-900" />
      </motion.div>
      <motion.div
        variants={variants}
        className="titleContainer flex-2 flex items-center flex-col"
      >
        <div className="title">
          <img className="object-cover" src="/people.webp" alt="people" />
          <h2 className="h2 font-thin">
            <motion.b className="font-bold" whileHover={{color:'orange'}}>Unique</motion.b> Ideas
          </h2>
        </div>
        <div className="title">
          <h2 className="h2 font-thin">
            <motion.b className="font-bold" whileHover={{color:'orange'}}>For Your</motion.b> Business.
          </h2>
          <button className="text-black border-0 cursor-pointer">
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer flex-2 flex mx-20">
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2 className="h2">Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            earum porro nulla amet? Nemo, quisquam in deserunt libero harum
            iure.
          </p>
          <button className="button">GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            earum porro nulla amet? Nemo, quisquam in deserunt libero harum
            iure.
          </p>
          <button className="button">GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            earum porro nulla amet? Nemo, quisquam in deserunt libero harum
            iure.
          </p>
          <button className="button">GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            earum porro nulla amet? Nemo, quisquam in deserunt libero harum
            iure.
          </p>
          <button className="button">GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
