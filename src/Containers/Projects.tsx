import React from 'react'
import { brandingDesignContent } from '../Constants'
import { DiIllustrator } from 'react-icons/di'

const Projects = () => {
  return (
    <div className='projects-section w-full flex items-center justify-center'>
        <div className='container w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
            <div className='heading relative'>
                <h1 className='title  text-2xl font-bold '>Projects</h1>
                <h1 className=' underTitle absolute text-5xl font-bold left-1/2 text-blue-900 -top-1/2 -z-10'>2</h1>
            </div>
            <div className="projects-type my-6">
                <h2 className="project-type_name title text-xl font-bold mt-2 text-blue-950">Branding Design</h2>
                {brandingDesignContent.map((item) => (
                    <div key={item.id} className='w-full flex flex-col lg:flex-row lg:gap-x-4'>
                        <div className='lg:w-[500px]'>
                            <p className='font-bold text-xl my-4 '>{item.title}</p>
                            <p className='text-justify text-lg '>{item.content}</p>
                            <div className="tools flex my-4 items-center gap-x-4 ">
                                <div>
                                    <DiIllustrator size={40} className='text-yellow-500'/>
                                </div>
                                <div className='color w-[32px] h-[32px] bg-[#ffc265] '>
                                </div>
                                <div className='color w-[32px] h-[32px] bg-[#fff] shadow-md '>
                                </div>
                                <div className='color w-[32px] h-[32px] bg-[#181818] '>
                                </div>
                            </div>
                        </div>    
                        <div className="main-image w-full h-[500px] mt-4 bg-gray-400 lg:w-[500px]">

                        </div>
                    </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default  Projects