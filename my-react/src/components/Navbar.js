import { motion } from "framer-motion";
import React from "react";
// import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div>
      {/* <sidebar></sidebar> */}
      <div className="navbar bg-blue-500 flex justify-between align-center mx-20 my-10 rounded-md">
        <motion.span
          className="span text-3xl m-3 font-black text-black"
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Safiyya Nasir
        </motion.span>
        <div className="icons justify-between items-center gap-3 mx-3 w-36 flex">
          <a href="#f">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="#f">
            <img src="/github.png" alt="github" />
          </a>
          <a href="#f">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
