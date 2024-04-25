import React from 'react'
// import { motion } from "framer-motion";
import Links from "./Links/Links.js";
import ToggleButton  from "./toggleButtons/ToggleButton.js";

function Sidebar() {

  return (
    <div className='flex flex-col align-center justify-center bg-white text-black h-10'>
      <div className='fixed top-0 left-0 w-1/3 bg-white'>
      <Links />
      Links
      </div>
      <toggleButton />
    </div>
  )
}

export default Sidebar
