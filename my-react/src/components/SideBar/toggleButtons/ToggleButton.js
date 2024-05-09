import React, { useState } from 'react';


function ToggleButton() {

    // const [open, setOpen] = useState(false)

    // const variants = {
    //     open: {
    //         clipPath: "circle(1200px at 50px 50px)",
    //         transition: {
    //             type: "spring",
    //             stiffness: 20,
    //             restDelta: 2
    //         } 
    //     },
    //     closed:{
    //         clipPath: "circle(30px at 50px 50px)",
    //         transition: {
    //             delay: 0.5,
    //             type: "spring",
    //             stiffness: 400
    //         }
    //   animate={open ? "open" : "closed"}
    //     }
    // }

    return (
        <div className=''>
            <button className='fixed rounded py-2 bg-transparent top-8 left-8 border-0 text-black cursor-pointer'>
                button
            </button>
        </div>
    )
}

export default ToggleButton;
