import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open:{
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  closed:{
    transition: {
      staggerChildren: 0.05,
    }
  }
}
const itemVariants = {
  open:{
    y: 0,
    opacity: 1,
  },
  closed:{
    y:50,
    opacity: 1,
  }
}

const links = () => {
  const items = ["HomePage", "Services", "Portfolio", "Contact"];

  return (
    <motion.div
    className='text-center text-black font-bold absolute flex flex-col justify-center gap-2 align-center'
    variants={variants}
    >
    {items.map((item) => (
      <motion.a href= {`#${item}`}
      key={item}
      variants={itemVariants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
      >
        {item}
        </motion.a>
    ))}
    </motion.div>
  )
}

export default links
