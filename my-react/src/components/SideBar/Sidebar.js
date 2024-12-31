import{ React, useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links/Links';
import ToggleButton from './ToggleButtons/ToggleButton';

const variants ={
  open:{
    clipPath: 'circle(1000px at 50px 50px)',
    transition:{
      type:'spring',
      delay: 0.3,
      stiffness: 40,
      damping: 20,
    },
  },
  closed:{
    clipPath: 'circle(25px at 30px 30px)',
    transition:{
      type:'spring',
      stiffness: 40,
      damping: 20,
      delay:0.3,
    }
  }
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative z-10'>
      <motion.div className='fixed bottom-0 top-0 left-0
       bg-white z-10 w-60 flex flex-col justify-center 
       items-center text-2xl'
      variants={variants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}>

        <Links  />
      </motion.div>
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Sidebar