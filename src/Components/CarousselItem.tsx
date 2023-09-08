import React from 'react'

const CarousselItem = ({ item }) => {
  return (
    <div className='carousel-item w-full h-[500px] bg-white inline-flex items-center justify-center relative shadow-md ' >
        <div></div>
        <div className="item-image w-full h-full ">
            <img src={item.img} className='object-contain' alt="" />
        </div>
        <div className='absolute bottom-0 rounded-tl-md rounded-tr-md p-2 bg-gradient-to-t from-blue-950 to-blue-300/10 w-full h-[350px]'>
            <p className='title text-2xl my-2 '>{item.name} </p>
            <p className='text-lg mb-4'>{item.work} </p>
            <p className='text-lg whitespace-normal text-justify my-2'>  {item.content}</p>
        </div>

    </div>
  )
}

export default CarousselItem