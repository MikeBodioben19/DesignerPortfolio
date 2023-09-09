import React from 'react'

import { AiOutlineMenu, AiOutlineClose, AiOutlineBehance, AiOutlineDribbble, AiOutlineLinkedin,AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-section w-full bg-blue-950 flex items-center justify-center' >
        <div className='container relative w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col justify-between items-center md:flex-row'>
                <div className='flex gap-x-2 justify-center items-center text-lg text-white'>
                    <AiOutlineMail/>
                    <p className=''>Miguelbodio@gmail.com | </p> 
                    <p className=''>Mike1ben9@outlook.com</p>
                </div>
                <div className="social-link w-[250px] flex flex-row justify-between items-center">
                                    <a href="https://behance.net/mikebodioben" className=' flex justify-center items-center  w-[40px] h-[40px]  cursor-pointer border-transparent border-2 text-white transition-all duration-500 hover:border-2 hover:border-yellow-500 hover:text-yellow-500' ><AiOutlineBehance size={24} /></a>
                                    <a href="https://dribbble.com/mikeben19" className=' flex justify-center items-center  w-[40px] h-[40px]  cursor-pointer border-transparent border-2 text-white transition-all duration-500 hover:border-2 hover:border-yellow-500 hover:text-yellow-500' ><AiOutlineDribbble size={24} /></a>
                                    <a href="https://linkedin.com/in/mike-bodioben" className=' flex justify-center items-center w-[40px] h-[40px] cursor-pointer border-transparent border-2 text-white transition-all duration-500 hover:border-2 hover:border-yellow-500 hover:text-yellow-500' ><AiOutlineLinkedin size={24} /></a>
                </div>
            </div>
            <div className='w-full border-t-[1px] mt-2 border-white'></div>
            <p className='text-lg text-white mt-2'>Made by <span className='text-yellow-500 font-bold'> Mike Bodioben</span>, 2023 </p>
        </div>
    </div>
  )
}

export default Footer