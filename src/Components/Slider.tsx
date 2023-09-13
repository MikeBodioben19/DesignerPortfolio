import {useState} from 'react'

import {slide1,slide2, slide3} from  '../assets'
import { AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { motion } from 'framer-motion'


type Props = {
    imgSrc:string[];
}
const Slider = ({imgSrc}:Props) => {
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
    // const goToIndex = (slideIndex:number) =>{
    //     setCurrentIndex(slideIndex)
    // }

    const fadeUpVariants = {
        animated : {
            hidden : { opacity : 0, y : 75},
            visible : { opacity : 1, y : 0},
            transition : {
                hidden: {
                    delay : 0.5,
                    duration : 1,
                },
                visible: {
                    delay : 0.5,
                    duration : 1,
                },
            }

        }
    }

  return (
    <motion.div 
        variants={fadeUpVariants}
        animate='animated'
        className='slider-section relative w-full h-full flex items-center justify-center'>
        <div className='slider-container relative w-full h-full flex flex-col justify-center items-center '>
            <div className='w-full h-full '   
            >
                <motion.img src={imgSrc[currentIndex]} className='w-full h-full object-cover' alt="" />                
            </div>
            <div className='control absolute left-0 translate-y-1/2 cursor-pointer text-white rounded-full p-2 bg-black/10'>
                <AiOutlineArrowLeft onClick={prevSlide} size={30} className=''/>
            </div>
            <div className='control absolute right-0  translate-y-1/2 cursor-pointer text-white rounded-full p-2 bg-black/10'>
                <AiOutlineArrowRight onClick={nextSlide} size={30} />
            </div>
        </div>

    </motion.div>
  )
}

export default Slider