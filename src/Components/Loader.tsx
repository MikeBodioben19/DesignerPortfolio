import {motion} from 'framer-motion'


const Loader = () => {
    const loaderVariants = {
        animateOne : {
            x : [-100,100,100,-100],
            transition : {
                x : {
                    repeat: "Loop",
                    duration : 3,
                    // repeatDelay :3,

                },
            }
        },
        animateTwo : {
            x : [100,-100,-100,100],
            transition : {
                x : {
                    repeat: "Loop",
                    duration : 3,
                    delay : 1.5,
                    // repeatDelay :1,
                },
            }
        },
        animateThree : {
            x : [-100,100,100,-100],
            transition : {
                x : {
                    repeat: "Loop",
                    duration : 3,
                    delay : 1.5,
                },
            }
        },
        animateFour : {
            y : [0,30,30,0],
            transition : {

                y : {
                    repeat : Infinity,
                    duration : 3,
                    // repeatDelay: 0.1,
                }
            }
        }
    }
  return (
    <div className='absolute loader w-full h-screen'>
        <div className="loader-container flex flex-col items-center justify-center w-full h-full">
            <motion.div 
                variants={{
                    hidden : {opacity : 0},
                    visible : {opacity : 1},
                }}
                initial = "hidden"
                animate = "visible"
                transition = {{duration : 1, ease : "easeIn",staggerChildren :3}}
            className='w-[75px] bg-transparent overflow-hidden '>
                <motion.div 
                    variants={loaderVariants}
                    animate = "animateOne"
                    className="line w-[50px] h-[5px] bg-yellow-500 my-2 rounded-full "></motion.div>
                <motion.div 
                    variants={loaderVariants}
                    animate = "animateTwo"
                    className="line w-[50px] h-[5px] bg-yellow-500 my-2 rounded-full "></motion.div>
                <motion.div 
                    variants={loaderVariants}
                    animate = "animateThree"
                    className="line w-[50px] h-[5px] bg-yellow-500 my-2 rounded-full "></motion.div>
            </motion.div>
            <div>
                <motion.p variants={loaderVariants} animate='animateFour'>Loading...</motion.p>
            </div>
        </div>
    </div>
  )
}

export default Loader