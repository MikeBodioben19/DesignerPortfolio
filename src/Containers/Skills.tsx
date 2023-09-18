
import { motion } from 'framer-motion'
import { hardSkills, softSkills } from '../Constants'
import {dots1, dots2} from "../assets"
import { fadeInAnimation, fadeUpAnimation } from '../Animations'

const Skills = () => {

    return (
        <div className='skills-section w-full flex items-center justify-center overflow-hidden' id='skills'>
            <div className='container relative w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
                <div className='heading relative'>
                    <h1 className='title  text-2xl font-bold lg:text-4xl'>Skills</h1>
                    <h1 className=' underTitle absolute text-5xl font-bold left-1/2 text-blue-900 -top-1/2 -z-10 md:text-7xl'>4</h1>
                </div>
                <div className="skill-type w-full my-6 flex flex-col lg:flex-row">
                    <div className='w-full p-2 '>
                        <h2 className="skill-type_name title text-xl font-bold my-4 text-blue-950 text-center md:text-2xl">Soft skills</h2>
                        <div className="skill-container_small flex flex-col gap-y-4">
                            {
                                softSkills.map((item,index) => (
                                    <motion.ul 
                                        initial ='hidden'
                                        whileInView="animate"
                                        variants={fadeInAnimation}
                                        viewport={{once : true}}
                                        custom={index}
                                        key={item.id} className='w-full  bg-yellow-600 rounded-full p-2 my-2 text-center shadow-md sm:hidden'>
                                        <li className='text-lg capitalize'>{item.title}</li>
                                    </motion.ul>
                                ))
                            }
                        </div>
                        <div className="skill-container hidden sm:block">
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.05}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[65%]  bg-yellow-600 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 hover:bg-yellow-500'>creativity</p>
                                <p className='w-[35%] bg-blue-950 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.1}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[75%]  bg-yellow-600 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 hover:bg-yellow-500'>communication</p>
                                <p className='w-[25%] bg-blue-950 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.15}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[65%]  bg-yellow-600 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 hover:bg-yellow-500'>curiosity</p>
                                <p className='w-[35%] bg-blue-950 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.2}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[85%]  bg-yellow-600 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 hover:bg-yellow-500'>teamwork</p>
                                <p className='w-[15%] bg-blue-950 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.25}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[80%]  bg-yellow-600 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 hover:bg-yellow-500'>critical mind</p>
                                <p className='w-[20%] bg-blue-950 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.3}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[65%]  bg-yellow-600 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 hover:bg-yellow-500'>proactivity</p>
                                <p className='w-[35%] bg-blue-950 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.35}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[70%]  bg-yellow-600 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 hover:bg-yellow-500'>organisation</p>
                                <p className='w-[30%] bg-blue-950 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.4}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[40%]  bg-yellow-600 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 hover:bg-yellow-500'>deepwork</p>
                                <p className='w-[60%] bg-blue-950 p-3 rounded-full'></p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='w-full p-2 '>
                        <h2 className="skill-type_name title text-xl font-bold my-4 text-blue-950 text-center md:text-2xl">Hard skills</h2>
                        <div className="skill-container_small flex flex-col gap-y-4">
                            {
                                hardSkills.map((item,index) => (
                                    <motion.ul 
                                        initial ='initial'
                                        whileInView="animate"
                                        variants={fadeInAnimation}
                                        viewport={{once : true}}
                                        custom={index}
                                        key={item.id} className='w-full  bg-blue-950 rounded-full p-2 my-2 text-center shadow-md sm:hidden'>
                                        <li className='text-lg capitalize text-white'>{item.title}</li>
                                    </motion.ul>
                                ))
                            }
                        </div>
                        <div className="skill-container hidden sm:block">
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.05}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-full  bg-blue-950 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 text-white hover:bg-blue-700 '>use of usage scenarios</p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.1}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[75%]  bg-blue-950 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 text-white hover:bg-blue-700 '>illustrator</p>
                                <p className='w-[25%] bg-yellow-600 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.15}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[60%] bg-blue-950  rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 text-white hover:bg-blue-700 '>colors knowledge</p>
                                <p className='w-[40%] bg-yellow-600 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.2}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[85%]  bg-blue-950 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 text-white hover:bg-blue-700 '>mastery of typography</p>
                                <p className='w-[15%] bg-yellow-600 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.25}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[40%]  bg-blue-950 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 text-white hover:bg-blue-700 '>figma</p>
                                <p className='w-[60%] bg-yellow-600 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.3}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[65%]  bg-blue-950 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 text-white hover:bg-blue-700'>photoshop</p>
                                <p className='w-[35%] bg-yellow-600 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.35}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[70%]  bg-blue-950 rounded-full p-3 text-center shadow-md text-lg capitalize transition-all duration-300 text-white hover:bg-blue-700 '>using personas</p>
                                <p className='w-[30%] bg-yellow-600 p-3 rounded-full'></p>
                            </motion.div>
                            <motion.div 
                                variants={fadeUpAnimation}
                                initial = 'hidden'
                                whileInView = 'visible'
                                transition = {{delay : 0.4}}
                                // viewport={{once : true}}
                                className='flex flex-row gap-x-2 my-3'>
                                <p className=' w-[80%]  bg-blue-950 rounded-full p-3 text-center shadow-md text-lg capitalize text-white transition-all duration-300 hover:bg-blue-700 '>affordance mastery</p>
                                <p className='w-[20%] bg-yellow-600 p-3 rounded-full'></p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                    <img src={dots1} alt="" className='dots-container absolute -z-10 -left-2 top-2' />
                    <img src={dots2} alt="" className='dots-container absolute -z-10 -right-2 bottom-2' />
            </div>
        </div>
    )
}

export default Skills