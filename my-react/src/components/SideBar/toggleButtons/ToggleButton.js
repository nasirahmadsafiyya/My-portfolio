import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ isOpen, setIsOpen }) => {
 

  return (
    <motion.button
      className='fixed top-4 left-3 text-black rounded-full cursor-pointer flex items-center justify-center z-20'
      onClick={() => setIsOpen(!isOpen)} // Toggle sidebar state
     
    >
     <svg width="30" height="30" viewBox='0 0 40 40'>
      
      {/* Top Line */}
      <motion.path
      strokeWidth="3"
      stroke='black'
      strokeLinecap='round'
      d='M 10 12 H 30'
      initial='false'
      animate={isOpen ? {d: "M 10 10 L 30 30"} : {d: "M 10 12 H 30"}}
      transition={{duration: 0.8, delay: 0.3}}
      />

      {/* Middle Line */}
      <motion.path 
      strokeWidth="3" 
      stroke='black'  
      strokeLinecap='round' 
      d='M 10 20 H 30'
      initial='false'
      animate={isOpen ? {opacity: 0} : {opacity:1}}
      transition={{duration:0.8, delay: 0.3}}
      />

      {/* Bottom Line */}
      <motion.path
      strokeWidth="3"
      stroke='black'
      strokeLinecap='round'
      d='M 10 28 H 30'
      initial='false'
      animate={isOpen ? {d: 'M 10 30 L 30 10'} : {d: 'M 10 28 H 30'}}
      transition={{duration:0.2, delay: 0.3}}
      />
     </svg>
    </motion.button>
  );
};

export default ToggleButton;
