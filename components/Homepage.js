/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HomePage() {
  return (
    <div
      id='home'
      className='my-6 sm:my-0 px-8 sm:py-14 sm:px-14 md:py-12 md:px-14 lg:pt-8 xl:py-16 xl:px-20'>
      <div className='grid-max max-w-5xl mx-auto rounded-2xl bg-[#f6f6fc] '>
        <div className=' py-6 px-5 sm:px-8 sm:py-[2.8rem] md:px-10 md:py-[3.5rem] lg:py-[4.5rem] lg:px-14 xl:px-16  xl:py-20'>
          <div className=' font-bold space-y-3 '>
            <h1 className='text-transparent text-[12px] mb-[-13px]  sm:text-[30px] sm:mb-[-18px] md:text-[34px] lg:text-[45px] xl:text-[56px] md:mb-[-20px] bg-clip-text bg-gradient-to-tr xl:mb-[-30px] to-[#C9217C] from-black text'>
              Web & Mobile
            </h1>

            <h2 className='text-[14px]  text-transparent sm:text-[27px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold bg-clip-text bg-gradient-to-tr from-[#C9217C]  to-black'>
              Apps Are Easy
            </h2>
          </div>

          <p
            className='text-[7.5px] mt-2 max-w-[95px] sm:text-[15px] md:text-[20px] sm:mt-4 md:mt-6 lg:mt-8 sm:max-w-[11rem] sm:h-[3rem] md:max-w-[14rem] 
          lg:max-w-[18rem]  md:text-base lg:leading-8 lg:text-[24px]  font-bold tracking-wider text-[#3c3c3c]'>
            Develop softwares, all type of desktop and mobile applications for
            your needs
          </p>
          <a href='#works'>
            <button className='text-[10px]  rounded-md py-[2px] px-[5px] mt-3.5  sm:py-0.5 sm:px-2 md:px-2.5 md:py-1 sm:mt-[4.5rem] md:mt-[5.5rem]  lg:mt-[8rem] text-white  sm:text-[15px] md:text-[22px] lg:text-[27px] xl:text-[1.8rem] border-2 border-gray-800 sm:rounded-lg text-center font-bold   bg-gray-900  outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
              Our works
            </button>
          </a>
        </div>
        <div className=''>
          <img
            className='rounded-r-lg bg-center bg-no-repeat bg-cover'
            width={"100%"}
            height={"100%"}
            src='/homepage.jpg'
            alt='homepage'
          />
        </div>
      </div>
    </div>
  );
}
