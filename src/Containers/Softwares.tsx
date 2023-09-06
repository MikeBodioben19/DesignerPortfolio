import React from 'react'

import { DiIllustrator, DiPhotoshop} from 'react-icons/di'
import { FaFigma} from 'react-icons/fa'
import { LiaHtml5} from 'react-icons/lia'
import { RiCss3Line} from 'react-icons/ri'

const Softwares = () => {

  return (
    <div className='softwares-section w-full flex items-center justify-center' id='softwares'>
        <div className='container w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
            <div className='heading'>
                <h1 className='title  text-2xl font-bold '>Softwares</h1>
            </div>
            <div className="domains-name w-full  p-4 flex flex-col justify-evenly items-center md:flex-row">
              <div className="domains-name_item w-full flex flex-row flex-wrap justify-evenly items-center my-2 ">
                <div className="icon-container relative flex flex-col mx-4 my-6  items-center">
                    <DiIllustrator size={80} className='icon text-black'/>
                    <h2 className='title text-xl font-bold mt-2 text-black '>Illustrator</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className=' absolute -z-10 -top-4 transition-all duration-500' width="124" height="130" viewBox="0 0 124 130" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M58.5568 0.535405C75.0975 2.29676 87.007 14.2962 98.132 26.6463C110.592 40.479 125.489 54.5163 123.88 73.0528C122.049 94.1472 108.711 113.375 89.7778 122.906C70.466 132.628 46.5234 132.618 28.1319 121.255C11.4318 110.937 8.75134 89.6261 4.81664 70.4126C1.05006 52.02 -4.68583 31.8058 6.76466 16.917C18.3698 1.82712 39.6115 -1.48201 58.5568 0.535405Z" fill="none" className='software-icon cursor-pointer '/>
                    </svg>
                </div>

                <div className="icon-container relative flex flex-col mx-4 my-6 items-center">
                    <DiPhotoshop size={80} className='icon text-black'/>
                    <h2 className='title text-xl font-bold mt-2 text-black '>Photoshop</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" className=' absolute -z-10 -top-4 transition-all duration-500' viewBox="0 0 120 120" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.7913 0.150341C72.3985 1.48611 81.458 16.0677 91.9489 27.6999C103.888 40.9382 121.333 52.3748 119.919 70.1456C118.352 89.8465 103.066 106.292 85.0494 114.416C67.5388 122.312 47.2696 119.721 30.4171 110.504C14.6355 101.872 4.43277 86.1273 1.03263 68.4637C-2.21786 51.5776 2.30649 34.2801 13.18 20.9583C23.8955 7.83014 39.907 -1.29474 56.7913 0.150341Z" fill="none" className='software-icon cursor-pointer '/>

                        </svg>
                </div>

                <div className="icon-container relative flex flex-col mx-4 my-6 items-center">
                    <FaFigma size={80} className='icon text-black'/>
                    <h2 className='title text-xl font-bold mt-2 text-black '>Figma</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="125" className=' absolute -z-10 -top-4 transition-all duration-500' viewBox="0 0 120 125" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.3665 0.0306354C69.8799 -0.589399 85.7589 8.26241 97.6696 21.117C111.005 35.5098 122.298 53.1555 119.598 72.5902C116.642 93.8653 103.561 114.156 83.6301 122.165C64.7888 129.735 44.1402 120.769 27.0728 109.768C12.8076 100.574 4.22049 85.6296 1.07179 68.9527C-1.91037 53.158 1.31808 37.083 10.9148 24.1884C20.9603 10.6907 35.5513 0.625946 52.3665 0.0306354Z" fill="none" className='software-icon cursor-pointer '/>
                    </svg>
                </div>

                <div className="icon-container relative flex flex-col mx-4 my-6 items-center">
                    <div className="group-icon flex">
                        <LiaHtml5 size={45} className='icon text-black'/>
                        <RiCss3Line size={45} className='icon text-black'/>

                    </div>
                    <h2 className='title text-xl font-bold mt-7 text-black '>HTML/CSS</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className=' absolute -z-10 -top-4 transition-all duration-500' width="136" height="118" viewBox="0 0 136 118" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M127.483 102.244C117.084 116.424 97.3896 117.213 79.815 117.795C65.1322 118.281 52.0171 113.422 39.8806 105.144C23.3766 93.887 -1.78609 83.6407 0.676301 63.8154C3.13599 44.0118 32.1697 44.4793 48.7877 33.4306C65.388 22.3937 75.7495 -2.6644 95.3705 0.856518C115.788 4.52033 124.615 28.3863 130.879 48.1615C136.617 66.2784 138.721 86.9188 127.483 102.244Z" fill="none" className='software-icon cursor-pointer '/>
                    </svg>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Softwares