import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div className='services  flex flex-col justify-between gap-16'>
     <motion.div className='textContainer flex items-center gap-5 flex-1 self-end'>
        <p className='font-light text-lg text-gray-500 text-right'>I focus on helping your brand grow 
            <br />and move forward
          </p>
            <hr className='w-80 border border-t-gray-900' />
     </motion.div>
     <motion.div className='titleContainer flex-2 flex items-center flex-col'>
      <div className='title'>
      <img className='object-cover' src='/people.webp' alt='people' />
        <h2><b>Unique Ideas</b></h2>
      </div>
      <div className='title'>
        <h2><b>For Your Business.</b></h2>
      <button className='button'>WHAT WE DO?</button>
      </div>
    
     </motion.div>
     <motion.div className='listContainer flex-2'>
      <div className='box'>
        <h2>Branding</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus earum porro nulla amet? Nemo, quisquam in deserunt libero harum iure.
         
        </p>
        <button>GO</button>
      </div>
      <div className='box'>
        <h2>Branding</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus earum porro nulla amet? Nemo, quisquam in deserunt libero harum iure.
          
        </p>
        <button>GO</button>
      </div>
      <div className='box'>
        <h2>Branding</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus earum porro nulla amet? Nemo, quisquam in deserunt libero harum iure.
          
        </p>
        <button>GO</button>
      </div>
      <div className='box'>
        <h2>Branding</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus earum porro nulla amet? Nemo, quisquam in deserunt libero harum iure.
          
        </p>
        <button>GO</button>
      </div>
     </motion.div>
    </motion.div>
  )
}

export default Services
