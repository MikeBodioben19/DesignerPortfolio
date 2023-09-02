import React from 'react'

const About = () => {
  return (
    <div className='w-full relative flex items-center justify-center pt-16'>
        <div className='container w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center lg:flex-row-reverse lg:gap-x-6'>
            <div className='about-img w-full bg-red-500 h-[340px] lg:w-[500px]'>

            </div>
            <div className='about-text w-full my-4 flex flex-col justify-center lg:w-[500px]'>
                <h1 className='text-2xl mb-2 font-bold text-left lg:text-4xl lg:mb-6'>Mike Bodioben</h1>
                <h1 className='title text-2xl font-bold text-left text-blue-950 lg:text-4xl lg:mb-4'>UI/UX Designer</h1>
                <h1 className='title text-2xl mb-2 font-bold text-left text-blue-950 lg:text-4xl lg:mb-4'>Graphic Designer</h1>
                <p className='text-lg text-justify font-medium lg:text-xl'>
                Je suis un jeune camerounais passionné d’UI/UX Design et de Design Graphique, avec 4 ans d’expérience. Je suis un mec créatif qui fait des croquis en vacances comme ci c’est récréatif. Et je suis à la recherche de nouveaux challenges, bienvenue dans mon univers.
                </p>
            </div>
        </div>
        <div className='hidden absolute blur-container -bottom-20 right-2 w-[360px] h-[360px] bg-yellow-700 lg:block'>
            
        </div>

    </div>
  )
}

export default About