import React, { useState } from 'react';


const ToggleButton = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        open: {
           
        },
        closed:{
          clipPath: 'circle(30px at 50px 50px)',
          transition:{
            delay: 0.5,
            dumping: 40,
            stiffness: 400,
          }
        },
    };

    return (
        <div className='fixed top-0 left-0 w-5 bg-white'
        animate={open ? "open" : "closed"}>
            <button onClick={() => setOpen((prev) => !prev)}
            className='w-10 h-10 left-6 fixed top-8 cursor-pointer bg-transparent border-none' 
            variants={variants}> 
                Button
            </button>
        </div>
    )
}

export default ToggleButton;
