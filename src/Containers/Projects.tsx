
import { Slider } from '../Components'
import { brandingDesignContent, illustrationContent, logoDesignContent, packagingDesignContent } from '../Constants'

const Projects = () => {
    return (
        <div className='projects-section w-full flex items-center justify-center'>
            <div className='container relative w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
                <div className='heading relative'>
                    <h1 className='title  text-2xl font-bold lg:text-4xl'>Projects</h1>
                    <h1 className=' underTitle absolute text-5xl font-bold left-1/2 text-blue-900 -top-1/2 -z-10 md:text-7xl'>2</h1>
                </div>
                <div className="projects-type flex flex-col my-6 ">
                    <h2 className="project-type_name title text-2xl text-center font-bold mt-2 text-blue-950 md:text-4xl">Branding Design</h2>
                    {brandingDesignContent.map((item) => (
                        <div key={item.id} className={`w-full flex flex-col  justify-center my-4 lg:${item.flex} lg:gap-x-4`}>
                            <div className='lg:w-[500px]'>
                                <p className='font-bold text-xl my-4 '>{item.title}</p>
                                <p className='text-justify text-lg '>{item.content}</p>
                                <div className="tools flex my-4 items-center gap-x-4 ">
                                    <div>
                                        <item.icon size={40} className='text-yellow-500' />
                                    </div>
                                    <div className={`color w-[32px] h-[32px]`} style={{ backgroundColor: item.col1 }}>
                                    </div>
                                    <div className={`color w-[32px] h-[32px] shadow-md `} style={{ backgroundColor: item.col2 }} >
                                    </div>
                                    <div className={`color w-[32px] h-[32px]`} style={{ backgroundColor: item.col3 }} >
                                    </div>
                                </div>
                            </div>
                            <div className="image-container w-full h-[500px] bg-red-400 flex flex-col gap-y-2 lg:w-[500px]">
                                <Slider
                                    imgSrc={item.slides}
                                />
                            </div>

                        </div>
                    ))}
                    <div className='w-full flex flex-col justify-center items-center mt-10 mb-4'>
                        <h2 className="project-type_name title text-2xl text-center font-bold mt-2 text-blue-950 md:text-4xl">Logo Design</h2>
                        <div className="container w-full bg-indigo-400 flex-wrap my-4 flex  justify-center items-start lg:flex-row lg:gap-x-4">
                            {
                                logoDesignContent.map((item) => (
                                    <div key={item.id} className='w-full lg:w-[500px] my-4 '>
                                        <p className='font-bold text-xl my-4  '>{item.title}</p>
                                        <p className='w-full text-justify text-lg lg:w-[500px]'>{item.content}</p>
                                        <div className="tools flex my-4 items-center gap-x-4 ">
                                            <div>
                                                <item.icon size={40} className='text-yellow-500' />
                                            </div>
                                            <div className={`color w-[32px] h-[32px]`} style={{ backgroundColor: item.col1 }}>
                                            </div>
                                            <div className={`color w-[32px] h-[32px] shadow-md `} style={{ backgroundColor: item.col2 }} >
                                            </div>
                                            <div className={`color w-[32px] h-[32px]`} style={{ backgroundColor: item.col3 }} >
                                            </div>
                                        </div>
                                        <div className="image-container flex flex-col gap-y-2">
                                            <div className="main-image w-full h-[500px] mt-4 bg-gray-400 lg:w-[500px]">
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <h2 className="project-type_name title text-2xl text-center font-bold mt-2 text-blue-950 md:text-4xl">Packaging Design</h2>
                    {packagingDesignContent.map((item) => (
                        <div key={item.id} className={`w-full flex flex-col justify-center my-4 lg:${item.flex} lg:gap-x-4`}>
                            <div className='lg:w-[500px]'>
                                <p className='font-bold text-xl my-4 '>{item.title}</p>
                                <p className='text-justify text-lg '>{item.content}</p>
                                <div className="tools flex my-4 items-center gap-x-4 ">
                                    <div>
                                        <item.icon size={40} className='text-yellow-500' />
                                    </div>
                                    <div className={`color w-[32px] h-[32px]`} style={{ backgroundColor: item.col1 }}>
                                    </div>
                                    <div className={`color w-[32px] h-[32px] shadow-md `} style={{ backgroundColor: item.col2 }} >
                                    </div>
                                    <div className={`color w-[32px] h-[32px]`} style={{ backgroundColor: item.col3 }} >
                                    </div>
                                </div>
                            </div>
                            < div className="image-container w-full h-[500px] flex flex-col gap-y-2 lg:w-[500px]">
                                <Slider
                                    imgSrc={item.slides}
                                />

                            </div>

                        </div>
                    ))}

                    <div className='w-full flex flex-col justify-center items-center mt-10 mb-4'>
                        <h2 className="project-type_name title text-2xl text-center font-bold mt-2 text-blue-950 md:text-4xl">Illustration</h2>
                        <div className="container w-full flex-wrap my-4 flex flex-col justify-center items-start lg:flex-row lg:gap-x-4">
                            {
                                illustrationContent.map((item) => (
                                    <div key={item.id} className='w-full lg:w-[500px] my-4 '>
                                        <p className='font-bold text-xl my-4  '>{item.title}</p>
                                        <p className='w-full text-justify text-lg lg:w-[500px]'>{item.content}</p>
                                        <div className="tools flex my-4 items-center gap-x-4 ">
                                            <div>
                                                <item.icon size={40} className='text-yellow-500' />
                                            </div>
                                            <div className={`color w-[32px] h-[32px]`} style={{ backgroundColor: item.col1 }}>
                                            </div>
                                            <div className={`color w-[32px] h-[32px] shadow-md `} style={{ backgroundColor: item.col2 }} >
                                            </div>
                                            <div className={`color w-[32px] h-[32px]`} style={{ backgroundColor: item.col3 }} >
                                            </div>
                                        </div>
                                        <div className="image-container w-full h-[500px] flex flex-col gap-y-2">
                                            <Slider
                                                imgSrc={item.slides}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='hidden absolute blur-container -bottom-20 right-1/3 top-1/2 w-[360px] h-[360px] bg-yellow-700 lg:block'>
                </div>
            </div>
        </div>
    )
}

export default Projects