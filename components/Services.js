/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Services() {
  return (
    <div id="services" className='bg-white sm:pt-10 lg:pt-16'>
      <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-tr bg-clip-text text-transparent from-[#C9217C]  to-black'>
        Services
      </h1>
      <section className='max-w-7xl mt-20 mx-auto relative z-10 px-4 sm:px-6 lg:py-10 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-y-20 sm:gap-x-10 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
          <div className='flex flex-col border-2  relative bg-white rounded-2xl shadow-md'>
            <div className='absolute top-[-50px] left-10'>
              <img
                src='/webdesign.png'
                className='max-w-[7rem] p-2 shadow-sm rounded-2xl border-2'
                alt=''
              />
            </div>
            <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
              <h3 className='text-xl font-medium text-gray-900'>
                Web Development
              </h3>
              <p className='mt-4 text-base text-gray-500'>
                Full stack Web Application Design, Development, Maintenance and
                Support for projects of all size and scopes. We create
                responsive, cross-browser and cross-device compatible web design
                to suit all screen sizes and resolutions.
              </p>
            </div>
          </div>

          <div className='flex flex-col border-2 bg-white rounded-2xl shadow-md'>
            <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
              <div className='absolute top-[-50px] left-10'>
                <img
                  src='/design.png'
                  className='max-w-[7rem] shadow-sm rounded-2xl border-2'
                  alt=''
                />
              </div>
              <h3 className='text-xl font-medium text-gray-900'>
                UI / UX Design & Development
              </h3>
              <p className='mt-4 text-base text-gray-500'>
                Business value-driven applications with Spectacular User
                Interface (UI) and Best User Experience (UX). This plays a
                greater role in the design considerations of web and mobile
                applications to be as satisfying as possible for the customer.
              </p>
            </div>
          </div>

          <div className='flex flex-col relative border-2 bg-white rounded-2xl shadow-md'>
            <div className='absolute top-[-50px] left-10'>
              <img
                src='/mobiledesign.png'
                className='max-w-[7rem] shadow-sm rounded-2xl border-2'
                alt=''
              />
            </div>
            <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
              <h3 className='text-xl font-medium text-gray-900'>
                Mobile App Development
              </h3>
              <p className='mt-4 text-base text-gray-500'>
                Mobile application development for Android & iOS devices
                tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
