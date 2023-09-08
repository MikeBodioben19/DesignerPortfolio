import React,{useState} from 'react'

import {slide1,slide2, slide3} from  '../assets'
import { AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { RxDotFilled } from 'react-icons/rx'
import { testimonials } from '../Constants'

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
const [currentVal, setCurrentVal] = useState(0)
const backSlide = () =>{
    const val = currentVal === 0;
    const newVal = currentVal -100
    setCurrentVal(newVal)
    console.log(newVal);
    
}

  return (
    <div className='tesimonials-section w-full flex items-center justify-center' id='testimonials'>
        <div className='container relative w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
            <div className='heading relative'>
                <h1 className='title  text-2xl font-bold lg:text-4xl'>Testimonials</h1>
                <h1 className=' underTitle absolute text-5xl font-bold left-1/2 text-blue-900 -top-1/2 -z-10 md:text-7xl'>5</h1>
            </div>
            <div className='w-full '>
                <div className='slider-container relative w-full h-full flex flex-row  '>

                    <div className={`w-[300vw] absolute top-0 h-[400px] flex flex-row p-2 bg-green-900 `}
                        style={{left : ${setCurrentVal}vw}
                    >
                        <div className='w-screen h-full bg-amber-400'>
                            <h2 className='title text-2xl my-2'>Les délices de Leida</h2>
                            <p className='text-md mb-4'>Lorem ipsum dolor sit.</p>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim. </p>
                        </div>
                        <div className='w-screen h-full bg-amber-400'>
                            <h2 className='title text-2xl my-2'>Les délices de eida</h2>
                            <p className='text-md mb-4'>Lorem ipsum dolor sit.</p>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim. </p>
                        </div>
                        <div className='w-screen h-full bg-amber-400'>
                            <h2 className='title text-2xl my-2'>Les délices de Leida</h2>
                            <p className='text-md mb-4'>Lorem ipsum dolor sit.</p>
                            <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim. </p>
                        </div>

                        {/* <img src={slides[currentIndex]} alt="" className='w-full h-full' /> */}
                        {/* {
                            testimonials.map((item) => (
                                <div className=' w-full h-full p-2'>
                                    <h2 className='title text-2xl my-2'>{item.name}</h2>
                                    <p className='text-md mb-4'>{item.work}</p>
                                    <p className='text-md'>{item.content} </p>
                                </div>
                            ))
                        } */}
                    </div>
                </div>
                <div className='w-full relative flex flex-row justify-between items-center'>
                    <div className=' cursor-pointer px-8 py-2 border-2 transition-all duration-300'>
                        <AiOutlineArrowLeft onClick={backSlide} size={30} className=''/>
                    </div>

                    <div className='flex'>
                        {
                            slides.map((item,index) => (
                                <div key={index} className='text-xl cursor-pointer' onClick={() => goToIndex(index)} >
                                    <RxDotFilled/>
                                </div>
                            ))
                        }
                    </div>

                    <div className='block cursor-pointer px-8 py-2 border-2 transition-all duration-300'>
                        <AiOutlineArrowRight onClick={nextSlide} size={30} />
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Slider