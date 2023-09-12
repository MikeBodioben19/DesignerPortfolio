import React,{useState} from 'react'

import {slide1,slide2, slide3} from  '../assets'
import { AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { RxDotFilled } from 'react-icons/rx'
import { brandingDesignContent, slidesBranding, testimonials } from '../Constants'

const Slider = () => {
    const slides  = [
        slide1,
        slide2,
        slide3,
    ] 
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () =>{
        const isFirstSlide  = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToIndex = (slideIndex:number) =>{
        setCurrentIndex(slideIndex)
    }



  return (
    <div className='slider-section relative w-full h-full flex items-center justify-center'>
        <div className='container relative w-full h-full flex flex-col justify-center items-center group transition-all duration-500'>
            <div className='w-full h-full '>
                <img src={slidesBranding[currentIndex]} className='w-full h-full object-cover' alt="" />



                    {/* <div className='flex'>
                        {
                            slidesBranding.map((item,index) => (
                                <div key={index} className='text-xl cursor-pointer' onClick={() => goToIndex(index)} >
                                    <RxDotFilled/>
                                </div>
                            ))
                        }
                    </div> */}



                
            </div>
            <div className='absolute hidden group-hover:block left-0 translate-y-1/2 cursor-pointer  transition-all duration-500'>
                <AiOutlineArrowLeft onClick={prevSlide} size={30} className=''/>
            </div>
            <div className='absolute hidden group-hover:block right-0  translate-y-1/2 cursor-pointer  transition-all duration-300'>
                <AiOutlineArrowRight onClick={nextSlide} size={30} />
            </div>
        </div>

    </div>
  )
}

export default Slider