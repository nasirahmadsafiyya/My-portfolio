import { React, useState } from 'react'
import { motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButtons/ToggleButton"

const Sidebar = () => {

  const [open, setOpen] = useState(false)

  const variants = {
    open:{
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
         
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }
  return( <motion.div className='sidebar flex flex-col align-middle justify-center bg-white text-black'
    animate={open ? "open" : "closed"}>
    
      <motion.div className='bg fixed bottom-0 top-0 left-0 w-28 bg-white'
      variants={variants }>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
