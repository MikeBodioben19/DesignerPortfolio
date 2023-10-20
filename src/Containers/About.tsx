import { useRef,useEffect } from "react"
import { motion,useInView, useAnimation } from "framer-motion"
import { profile } from "../assets"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref,{once : true})
  const mainControls = useAnimation()
  const slideControls = useAnimation()

   useEffect(() => {
     if(isInView) {
        mainControls.start('visible')
        slideControls.start('visible')
     }
   
   }, [isInView])
   
  return (
    <div ref={ref}  className='w-full relative flex items-center justify-center pt-16' id='about'>
        <motion.div 
          initial={{opacity : 0, y : 75}}
          animate={{opacity : 1, y : 0}}
          transition={{duration : 2, type : "spring"}}
          className='container  w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center lg:flex-row-reverse lg:gap-x-6'>
            <div className='about-img w-ful h-[500px] lg:w-[500px]'>
              <img className="w-full h-full object-cover" src={profile} alt="profile" />
            </div>
            <motion.div 

              className='about-text relative overflow-hidden w-full my-4 flex flex-col justify-center lg:w-[500px]'>

              <div className=" relative overflow-hidden w-full">
              <motion.div 
                variants={{
                  hidden : {left : 0},
                  visible : {left : "100%"}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration : 0.5,ease : "easeIn",}}
                className="absolute top-2 bottom-2 left-0 right-0 bg-yellow-500 z-20"
              ></motion.div>
                <h1 className='text-2xl mb-2 font-bold text-left lg:text-4xl lg:mb-6'>Mike Bodioben</h1>
              </div>
              <div className=" relative overflow-hidden w-full">
              <motion.div 
                variants={{
                  hidden : {left : 0},
                  visible : {left : "100%"}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration : 0.5,ease : "easeIn",delay :0.25}}
                className="absolute top-2 bottom-2 left-0 right-0 bg-yellow-500 z-20"
              ></motion.div>
                  <h1 className='title text-2xl font-bold text-left text-blue-950 lg:text-4xl lg:mb-4'>UI/UX Designer</h1>
              </div>
              <div className=" relative overflow-hidden w-full">
              <motion.div 
                variants={{
                  hidden : {left : 0},
                  visible : {left : "100%"}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration : 0.5,ease : "easeIn",delay :0.5}}
                className="absolute top-2 bottom-2 left-0 right-0 bg-yellow-500 z-20"
              ></motion.div>
                  <h1 className='title text-2xl mb-2 font-bold text-left text-blue-950 lg:text-4xl lg:mb-4'>Graphic Designer</h1>
              </div>
              <div className=" relative overflow-hidden w-full">
              <motion.div 
                variants={{
                  hidden : {left : 0},
                  visible : {left : "100%"}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration : 0.5,ease : "easeIn",delay :0.75}}
                className="absolute top-2 bottom-2 left-0 right-0 bg-yellow-500 z-20"
              ></motion.div>
                <p className='text-lg text-justify font-medium lg:text-xl'>
                I'm a young Cameroonian with a passion for UI/UX Design and Graphic Design, with 4 years of experience. I'm a creative guy who sketches on vacation as if it's recreation. And I'm looking for new challenges, so welcome to my world.
                </p>
              </div>

                
               
            </motion.div>
        </motion.div>
        <div className='hidden absolute blur-container -bottom-20 right-2 w-[360px] h-[360px] bg-yellow-700 lg:block'>
            
        </div>

    </div>
  )
}

export default About