import React from 'react'
import { useState } from 'react';

import { AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'
import { navLinks } from '../Constants';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const closeMenu = () => {
        setToggleMenu((toggleMenu) => (toggleMenu = false));
      };
    
      const openMenu = () => {
        setToggleMenu((toggleMenu) => (toggleMenu = true));
      };

  return (
    <div className=' w-screen bg-yellow-500 flex flex-row justify-center'>
        <div className='p-4 bg-yellow-500 flex flex-row items-center justify-between w-full max-w-[1440px] z-50'>
            <div className='navbar-logo'>
                <h1 className='text-xl font-bold'>Mike Bodioben</h1>
            </div>
            <div>
                {toggleMenu ? <AiOutlineClose size={20} onClick={closeMenu}/> : <AiOutlineMenu className='text-2xl' onClick={openMenu}/>}
            </div>  
        </div>
        {
            toggleMenu ? 
            <div className="menu absolute w-full h-[75%] top-[50px] p-4 bg-yellow-500 flex flex-col transition-all duration-1000">
                        <ul className='w-full flex flex-col items-center'>
                            {navLinks.map((link)=> (
                            <li key={link.id} className='my-2'><a href={`#${link.id}`}className=' text-xl capitalize font-medium '>{link.title}</a></li>
                            ))}
                        </ul>
                        <button className='bg-white my-2'>btn</button>   
                    </div> : <div className="menu absolute w-full h-[75%] top-[-100vh] p-4 bg-yellow-500 flex flex-col transition-all duration-1000">
                        <ul className='w-full bg-red-200 flex flex-col items-center'>
                                {navLinks.map((link)=> (
                                <li key={link.id} className='my-2'><a href={`#${link.id}`}className=' text-xl capitalize font-medium '>{link.title}</a></li>
                                ))}
                            </ul>
                        <button className='bg-white my-2'>btn</button>   
                    </div> 
                        
                
        }
 
    </div>
  )
}

export default Navbar