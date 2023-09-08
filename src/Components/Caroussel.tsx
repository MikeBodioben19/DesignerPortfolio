import React,{useState} from 'react'

import {CarousselItem} from './index'
import { testimonials } from '../Constants'
import { AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { RxDotFilled } from 'react-icons/rx'
import { slide1,slide2,slide3 } from "../assets"


const Caroussel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const updateIndex = (newIndex :number)=> {
        if(newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= testimonials.length){
            newIndex = testimonials.length - 1
        }
        setActiveIndex(newIndex)
    }

    const items = [
        {
            id:1,
            name:'Leida',
            work:'Baker',
            content :"Lorem ipsum dolor sit amet consectetur. A in odio sit convallis diam rhoncus nunc. Fermentum facilisis tortor suscipit viverra neque elit urna egestas sed. Malesuada eget dolor egestas amet. Elementum mus at scelerisque ipsum vel nisl. Malesuada volutpat cursus pharetra felis rhoncus ",
            img: slide1,
        },
        {
            id:2,
            name:'Leida',
            work:'Baker',
            content :"Lorem ipsum dolor sit amet consectetur. A in odio sit convallis diam rhoncus nunc. Fermentum facilisis tortor suscipit viverra neque elit urna egestas sed. Malesuada eget dolor egestas amet. Elementum mus at scelerisque ipsum vel nisl. Malesuada volutpat cursus pharetra felis rhoncus ",
            img: slide2,
        },
        {
            id:3,
            name:'Leida',
            work:'Baker',
            content :"Lorem ipsum dolor sit amet consectetur. A in odio sit convallis diam rhoncus nunc. Fermentum facilisis tortor suscipit viverra neque elit urna egestas sed. Malesuada eget dolor egestas amet. Elementum mus at scelerisque ipsum vel nisl. Malesuada volutpat cursus pharetra felis rhoncus ",
            img: slide3,
        },
        {
            id:4,
            name:'Leida',
            work:'Baker',
            content :"Lorem ipsum dolor sit amet consectetur. A in odio sit convallis diam rhoncus nunc. Fermentum facilisis tortor suscipit viverra neque elit urna egestas sed. Malesuada eget dolor egestas amet. Elementum mus at scelerisque ipsum vel nisl. Malesuada volutpat cursus pharetra felis rhoncus ",
            img: slide2,
        },
    ]

  return (
    <div className='tesimonials-section w-full flex items-center justify-center' id='testimonials'>
        <div className='container relative w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
            <div className='heading relative'>
                <h1 className='title  text-2xl font-bold lg:text-4xl'>Testimonials</h1>
                <h1 className=' underTitle absolute text-5xl font-bold left-1/2 text-blue-900 -top-1/2 -z-10 md:text-7xl'>5</h1>
            </div>
            <div className="caroussel overflow-hidden w-full flex flex-col justify-center lg:w-[700px]">
                <div className="inner whitespace-nowrap transition-all duration-500" style={{transform : `translate(-${activeIndex *100}%)`}}>
                    {items.map((item) => {
                    return <CarousselItem item={item}/> })}
                </div>
                <div className='caroussel-controls my-4 w-full relative flex flex-row justify-between items-center'>
                    <div className=' cursor-pointer px-8 py-2 border-2 transition-all duration-300'>
                        <AiOutlineArrowLeft onClick={()=>{
                            updateIndex(activeIndex - 1)
                        }} size={30} className=''/>
                    </div>

                    <div className='flex'>
                        {
                            items.map((item,index) => (
                                <div key={index} className={`text-xl transition-all duration-300 cursor-pointer ${index === activeIndex ? 'text-yellow-500' : 'text-black'} `} onClick={() => updateIndex(index)} >
                                    <RxDotFilled size={25}/>
                                </div>
                            ))
                        }
                    </div>

                    <div className='block cursor-pointer px-8 py-2 border-2 transition-all duration-300'>
                        <AiOutlineArrowRight onClick={()=>{
                            updateIndex(activeIndex + 1)
                        }} size={30} />
                    </div>

                </div>
            </div>
        </div>   

        
    </div>
  )
}

export default Caroussel