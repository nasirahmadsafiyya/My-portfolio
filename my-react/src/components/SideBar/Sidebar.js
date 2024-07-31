import { React, useState } from 'react'
import { motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButtons/ToggleButton";

const Sidebar = () => {

  const [open, setOpen] = useState(false)

  const variants = {
    closed:{
      clipPath: "circle(100px at 30px 30px)",
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 10,
      }

    },
    open:{
      clipPath: "circle(500px at 100px 100px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }
  return <motion.div className='sidebar flex flex-col align-middle justify-center bg-white text-black'
    animate={open ? "open" : "closed"}>
    
      <motion.div className='bg fixed bottom-0 top-0 left-0 w-40 h-auto bg-white'
      variants={variants }>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  
}

export default Sidebar
