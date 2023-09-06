import React from 'react'

import {  AiOutlineCreditCard, AiOutlineBook } from 'react-icons/ai'
import {  LuLayoutDashboard } from 'react-icons/lu'
import {  PiNotePencilDuotone, PiCodesandboxLogoLight } from 'react-icons/pi'


const Domains = () => {
  return (
    <div className='domains-section w-full flex items-center justify-center' id='domains'>
        <div className='container w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
            <div className='heading relative'>
                <h1 className='title  text-2xl font-bold lg:text-4xl'>Domains</h1>
                <h1 className=' underTitle absolute text-5xl font-bold left-1/2 text-blue-900 -top-1/2 -z-10 md:text-7xl'>1</h1>
            </div>    
            <div className="domains-name w-full  p-4 flex flex-col justify-evenly items-center md:flex-row">
              <div className="domains-name_item flex flex-col items-center my-2 ">
                <div className="icon flex ">
                  <AiOutlineBook size={80} className='text-yellow-500'/>
                  <AiOutlineCreditCard size={40} className='text-yellow-500'/>
                </div>

                <h2 className='title text-xl font-bold mt-2 text-blue-950'>Corporate Design</h2>
              </div>
              <div className="domains-name_item flex flex-col items-center my-2">
                <div className="icon flex ">
                  <PiCodesandboxLogoLight size={80} className='text-yellow-500'/>
                </div>

                <h2 className='title text-xl font-bold mt-2 text-blue-950'>Packaging Design</h2>
              </div>
              <div className="domains-name_item flex flex-col items-center my-2">
                <div className="icon flex ">
                  <PiNotePencilDuotone size={80} className='text-yellow-500'/>
                </div>

                <h2 className='title text-xl font-bold mt-2 text-blue-950'>Illustration</h2>
              </div>
              <div className="domains-name_item flex flex-col items-center my-2">
                <div className="icon flex ">
                  <LuLayoutDashboard size={80} className='text-yellow-500'/>
                </div>

                <h2 className='title text-xl font-bold mt-2 text-blue-950'>UI/UX Design</h2>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Domains