import {useState} from 'react'

import {CarousselItem} from './index'
import { testimonials } from '../Constants'
import { AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { RxDotFilled } from 'react-icons/rx'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '../Animations'


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

 
  return (
    <div className='tesimonials-section w-full flex items-center justify-center' id='testimonials'>
        <motion.div 
            variants={fadeUpAnimation}
            initial='hidden'
            whileInView='visible'
            viewport={{once : true}} 
            className='container relative w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
            <div className='heading relative'>
                <h1 className='title  text-2xl font-bold lg:text-4xl'>Testimonials</h1>
                <h1 className=' underTitle absolute text-5xl font-bold left-1/2 text-blue-900 -top-1/2 -z-10 md:text-7xl'>5</h1>
            </div>
            <div className="caroussel mt-8 overflow-hidden w-full flex flex-col justify-center lg:w-[100%]">
                <div className="inner whitespace-nowrap transition-all duration-500" style={{transform : `translate(-${activeIndex *100}%)`}}>
                    {testimonials.map((item) => (
                        <CarousselItem key={item.id} item={item}/> ))}
                </div>
                <div className='caroussel-controls my-4 w-full relative flex flex-row justify-between items-center'>
                    <div className='hidden cursor-pointer px-8 py-1 border-[1px] border-black transition-all duration-300 md:block hover:border-yellow-500 hover:text-yellow-500 '>
                        <AiOutlineArrowLeft onClick={()=>{
                            updateIndex(activeIndex - 1)
                        }} size={30} className=''/>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        {
                            testimonials.map((item,index) => (
                                <div key={item.id} className={`text-xl transition-all duration-300 cursor-pointer ${index === activeIndex ? 'text-yellow-500' : 'text-yellow-900/10'} `} onClick={() => updateIndex(index)} >
                                    <RxDotFilled size={35}/>
                                </div>
                            ))
                        }
                    </div>

                    <div className='hidden cursor-pointer px-8 py-1 border-[1px] border-black transition-all duration-300 md:block hover:border-yellow-500 hover:text-yellow-500'>
                        <AiOutlineArrowRight onClick={()=>{
                            updateIndex(activeIndex + 1)
                        }} size={30} />
                    </div>

                </div>
            </div>
        </motion.div>   

        
    </div>
  )
}

export default Caroussel