import {motion} from 'framer-motion'


const Loader = () => {
    const loaderVariants = {
        animateOne : {
            x : [-100,100,100,-100],
            transition : {
                x : {
                    yoyo:10,
                    duration : 5,
                    ease : "easeInOut"
                },
            }
        }
    }
  return (
    <div className='absolute loader w-screen h-screen z-50 bg-blue-200'>
        <div className="container bg-green-800 flex flex-col items-center gap-y-2 justify-center w-full h-full">
            <motion.div 
                variants={loaderVariants}
                animate = "animateOne"
                className="line w-[50px] h-[5px] bg-yellow-500 "></motion.div>
        </div>
    </div>
  )
}

export default Loader