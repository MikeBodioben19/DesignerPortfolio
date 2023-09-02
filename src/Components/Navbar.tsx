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
                <a href='#' className='text-2xl font-bold transition-all duration-500 hover:tracking-widest'>Mike Bodioben</a>
            </div>
            <div className='menu-btn lg:hidden'>
                {toggleMenu ? <AiOutlineClose size={20} className='cursor-pointer' onClick={closeMenu}/> : <AiOutlineMenu className='text-2xl cursor-pointer' onClick={openMenu}/>}
            </div>  
            <div className='navlink-container hidden lg:flex md:flex-row items-center justify-center'>
                <ul className='flex flex-row'>
                    {navLinks.map((link)=>(
                        <li key={link.id} className='mx-2 text-xl capitalize font-medium transition-all  duration-300 hover:tracking-wider hover:text-white'><a href={`#${link.id}`}>{link.title}</a></li>
                    ))}
                </ul>
            </div>
            <button className='hidden bg-white mx-2 w-[150px] p-2 transition-all duration-500 lg:block hover:bg-blue-950 hover:text-white'>Download my cv</button>  
        </div>
        {
            toggleMenu ? 
            <div className="menu absolute w-full h-[75%] top-[50px] p-4 bg-yellow-500 flex flex-col transition-all duration-1000 lg:hidden">
                        <ul className='w-full flex flex-col items-center'>
                            {navLinks.map((link)=> (
                            <li key={link.id} className='my-2'><a href={`#${link.id}`}className=' text-xl capitalize font-medium transition-all  duration-300 hover:tracking-wider hover:text-white'>{link.title}</a></li>
                            ))}
                        </ul>
                        <button className='bg-white mx-auto my-2 w-[250px] p-2 transition-all duration-500 hover:bg-blue-950 hover:text-white'>Download my cv</button>   
                    </div> : <div className="menu absolute w-full h-[75%] top-[-100vh] p-4 bg-yellow-500 flex flex-col transition-all duration-1000">
                        <ul className='w-full  flex flex-col items-center'>
                                {navLinks.map((link)=> (
                                <li key={link.id} className='my-2'><a href={`#${link.id}`}className=' text-xl capitalize font-medium transition-all duration-300 '>{link.title}</a></li>
                                ))}
                            </ul>
                            <button className='bg-white mx-auto my-2 w-[250px] p-2 transition-all duration-500 hover:bg-blue-950 hover:text-white'>Download my cv</button>  
                    </div> 
                        
                
        }
 
    </div>
  )
}

export default Navbar