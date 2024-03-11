import React from 'react'
import{ Link } from 'react-router-dom';

function navbar() {
  return (
  <div>
    {/* <sidebar></sidebar> */}
    <div className='bg-blue-500 flex justify-between align-center p-2 rounded-2xl mx-16 my-10 h-20'>
   <span className='text-2xl text-center font-black text-black py-3'>SafiyyaNasir</span>
   <div className=' justify-between align-center flex p-1 '>
      <a href='#'><img src='/facebook.png' alt='facebook' /></a>
      <a href='#'><img src='/github.png' alt='github' /></a>
      <a href='#'><img src='/linkedin.png' alt='linkedin' /></a>
   </div>
    </div>
  </div>
  )
}

export default navbar
