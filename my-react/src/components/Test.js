import React from 'react'
import { motion } from "framer-motion";

function Test() {
  return (
    <div className='flex align-center justify-center h-5 m-48'>
        <motion.div className='p-11 bg-blue-500 h-200 w-200'
        initial={{opacity: 0, scale: 1}} 
        animate={{opacity: 1, scale: 3, x: 100, y: 300 }} 
        whileInView={{opacity: 0.5, scale: 1}}
        transition={{delay: 1, duration: 2}}
        >

        </motion.div>
    </div>
  )
}

export default Test
