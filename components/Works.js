/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";

const OURWORKS = [
  {
    title: "Dev Converter",
    Description: "Converter app for developers",
    key: 1,
    image: "devconverter.png",
    visit: "https://devconverter.vercel.app/home",
  },
  {
    title: "Tailwood UI",
    Description: "Tailwind component library",
    key: 1,
    visit: "https://tailwoodui.vercel.app",
    image: "tailwoodui.png",
  },
];

export default function Works() {
  return (
    <div id='works'>
      {OURWORKS.map((work) => (
        <div key={work.key}>
          <div className='px-8 sm:px-[3rem]  lg:max-w-5xl mx-auto sm:pt-8 lg:pt-[2.5rem]'>
            <h1 className=' text-black sm:text-[30px] lg:text-[73px] font-bold'>
              {work.title}
            </h1>
            <h2 className='sm:text-[25px] lg:text-[55px] font-semibold  text-[#721346]'>
              {work.Description}
            </h2>

            <a
              href={work.visit}
              className='inline-flex cursor-pointer sm:mb-3 sm:mt-2 md:mt-1.5 lg:mt-8'>
              <span className='md:text-xl lg:text-4xl text-[#721346] font-medium'>
                Visit
              </span>

              <svg
                viewBox='0 0 27 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 mt-1  sm:ml-1.5 lg:w-8 lg:h-8 lg:ml-2 lg:mt-2'>
                <path
                  d='M13.1185 2.18652L24.0499 13.1179L13.1185 24.0493V2.18652ZM22.9574 13.1179H2.18713Z'
                  fill='#721346'
                />
                <path
                  d='M22.9574 13.1179H2.18713M13.1185 2.18652L24.0499 13.1179L13.1185 24.0493V2.18652Z'
                  stroke='#721346'
                  strokeWidth='3.74812'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>
          <div className='p-5'>
            <div className='max-w-6xl mx-auto p-5 sm:p-10  bg-gray-600 bg-opacity-5 rounded-lg'>
              <img
                src={work.image}
                className='rounded-2xl shadow-md devconverter'
                alt='devconverter'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
