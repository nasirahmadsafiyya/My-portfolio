import { React, useState } from 'react'
import { delay, motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButtons/ToggleButton"

function Sidebar() {

  const [open, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: "circle(1000px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: "circle(700px at 50px 50px)",
      transition: {
        type: "spring",
        delay: 0.5,
        damping: 400,
        stiffness: 40
      }
    }
  }


  return (
    <motion.div className='flex flex-col align-center justify-center bg-white text-pink' animate={open ? "open" : "closed"}>
      <motion.div className='fixed bottom-0 top-0 left-0 w-1/3 bg-white' variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen}  variants={variants}/>
    </motion.div>
  )
}

export default Sidebar
