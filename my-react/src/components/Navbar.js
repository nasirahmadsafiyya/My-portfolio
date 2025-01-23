import { motion } from 'framer-motion';
import React from 'react'
// import { Link } from 'react-router-dom';

function navbar() {


  return (
    <div>
      {/* <sidebar></sidebar> */}
      <div className= 'bg-blue-950 flex justify-between align-center mx-24 my-5'>
        <motion.span className='text-center font-black text-black m-4'
        initial={{ opacity: 0.5, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }}>Safiyya_Nasir</motion.span>
        <div className=' justify-between align-center flex size-16 m-4'>
          <a href='#f'><img src='/facebook.png' alt='facebook' /></a>
          <a href='#f'><img src='/github.png' alt='github' /></a>
          <a href='#f'><img src='/linkedin.png' alt='linkedin' /></a>
        </div>
      </div>
    </div>
  )
}

export default navbar
