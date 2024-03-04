import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className='text-slate-100 items-center p-0 mx-auto px-4 bg-blue-500 rounded-lg flex justify-between text-2xl z-1'>
            <div>
                <h1 className='font-bold w-full p-5'>SafiyyaNasir</h1>
            </div>

            <div className='p-2 justify-between flex hidden'>
                <Link to="/Home" className='hover:bg-cyan-300 hover:text-slate-600 px-3 py-2 rounded-md'>Home</Link>
                <Link to="Projects" className=' hover:bg-cyan-300 hover:text-slate-600 px-3 py-2 rounded-md'>Projects</Link>
                <Link to="/Contact" className=' hover:bg-cyan-300 hover:text-slate-600 px-3 py-2 rounded-md'>Contact </Link>
            </div>

            <div onClick={handleNav} className='block md:hidden'>
                { nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>


             <div className={!nav ? `fixed top-0 left-0 w-[40%] h-full       border-r-blue-950 text-white bg-blue-500 uppercase text-1xl ease-in-out duration-500 ${nav ? '' : '-[-100%]'}`: 'fixed left-[-100%] max-v-[640px]'}>
                
                     <h1 className='font-bold p-5 w-full'>SafiyyaNasir</h1>
                 <ul>
                     <li className='list-none hover:bg-cyan-300 hover:text-slate-600 px-3 py-2 rounded-md border-b border-cyan-400'><Link to="/Home">Home</Link>
                     </li>
                     <li className='list-none hover:bg-cyan-300 hover:text-slate-600 px-3 py-2 rounded-md border-b border-cyan-400'><Link to="Projects">Projects</Link>
                     </li>
                     <li className='list-none hover:bg-cyan-300 hover:text-slate-600 px-3 py-2 rounded-md border-b border-cyan-400'><Link to="/Contact">Contact </Link>
                     </li>
                 </ul>
         </div>
        </nav>
    )
}

export default Navbar
