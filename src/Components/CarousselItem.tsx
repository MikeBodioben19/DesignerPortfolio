import React from 'react'

const CarousselItem = ({ item }) => {
  return (
    <div className='carousel-item w-full h-[450px] bg-white inline-flex items-center justify-center relative shadow-md ' >
        <div className='mobile w-full h-full md:hidden'>

        <div className="item-image w-full h-full bg-cover bg-center bg-no-repeat object-fill " style={{backgroundImage: `url(${item.img})`}} >
            {/* <img src={item.img} className='object-contain' alt="" /> */}
        </div>
        <div className='absolute bottom-0 rounded-tl-md rounded-tr-md p-4 bg-gradient-to-t from-blue-950 to-blue-300/10 w-full h-[400px]'>
            <p className='title text-2xl text-white font-bold my-2 '>{item.name} </p>
            <p className='text-lg text-white mb-4'>{item.work} </p>
            <p className='text-lg text-white font-bold whitespace-normal text-justify my-2'>" {item.content} "</p>
        </div>
        </div>
        
        <div className='hidden w-full h-full md:inline-flex'>

        <div className="item-image w-full h-full " >
            <img src={item.img} className='object-cover w-full  h-full' alt="" />
        </div>
        <div className='rounded-tl-md h-full w-full rounded-tr-md p-4  '>
            <p className='title  text-blue-950 font-bold my-2 text-4xl '>{item.name} </p>
            <p className='text-xl mb-4'>{item.work} </p>
            {/* <span className='title text-7xl font-bold'>"</span> */}
                <p className='text-lg  whitespace-normal text-justify my-2 font-bold '> " {item.content}"</p>
            {/* <span className='title text-7xl font-bold'>"</span> */}
        </div>
        </div>

    </div>
  )
}

export default CarousselItem