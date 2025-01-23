import React from 'react'
import { motion } from 'framer-motion'

const textVariant = {
  initial : {
    x: -500,
    opacity: 0,
  },
  animate : {
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton : {
    opacity: 0,
    y: 10,
    transition: {
      transition: 2,
      repeat: Infinity,
    }
  }
};

const sliderVariants = {
  initial : {
    x: 0,
  },
  animate : {
    x: "-220%",
    transition : {
      opacity: 0,
      y: 10,
      repeatType: "mirror",
      duration: 20,
      repeat: Infinity,
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
      <motion.div className='text-container justify-center ' variants={textVariant} initial="initial" animate="animate">
        <motion.h2 className='font-bold text-2xl text-purple-600 space-x-9' variants={textVariant}>SOPHY</motion.h2>
        <motion.h2 className='font-bold text-4xl' variants={textVariant}>WEB DEVELOPER AND CONTENT CREATOR</motion.h2>
        <motion.div className='buttons flex flex-row gap-3 m-3' variants={textVariant}>
          <motion.button className='button font-semibold' variants={textVariant}>See the latest works</motion.button>
          <motion.button className='button' variants={textVariant}>Contact Me</motion.button>
        </motion.div>
      <motion.img className='scrollImage' src='/scroll.png' variants={textVariant} animate="scrollButton" alt='scroll' />
      </motion.div>
      </div>
      <motion.div className='slidingTextContainer absolute font-bold text-6xl whitespace-nowrap -bottom-0.5 text-neutral-600' variants={sliderVariants} initial="initial" animate="animate">Writer Content Creator Influencer</motion.div>
      <div className='imageContainer'>
        <img src='./hero.png' alt='hero' />
      </div>
    </div>
  )
}

export default Hero
