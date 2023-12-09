import React from "react";
import Image from "next/image";
export default function index() {
  return (
    <div className=''>
      <div className='bg-white bg-opacity-5   rounded-2xl'>
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 '>
          <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
            <div className='space-y-5 sm:space-y-4'>
              <h1 className='text-transparent text-[25px] font-bold md:text-[34px] lg:text-[40px] xl:text-[45px] bg-clip-text bg-gradient-to-tr xl:mb-[-30px] to-[#C9217C] from-black'>
                Imagine coders
              </h1>
            </div>
            <div className='lg:col-span-2'>
              <ul
                className='
                  space-y-12
                  sm:grid sm:grid-cols-2
                  sm:gap-10
                  sm:space-y-0
                  lg:gap-x-8
                '>
                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={"/santheep.png"}
                      alt=''
                    />
                  </div>
                  <div className='text-lg leading-6 font-medium space-y-1'>
                    <h3 className='text-[#721346]'>Santheepkumar</h3>

                    <p className='text-indigo-500'>Founder</p>
                  </div>

                  <ul className='flex space-x-5'>
                    <li>
                      <a
                        href='https://twitter.com/SantheepHoney'
                        className='text-gray-400 hover:text-gray-500'>
                        <span className='sr-only'>Twitter</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          aria-hidden='true'>
                          <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/santheepkumar-v-838377168/'
                        className='text-gray-400 hover:text-gray-500'>
                        <svg
                          className='h-5 w-5 '
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M15.338 15.3381H12.67V11.1601C12.67 10.1651 12.653 8.88307 11.283 8.88307C9.893 8.88307 9.682 9.96907 9.682 11.0901V15.3381H7.014V6.74807H9.573V7.92207H9.61C9.966 7.24707 10.837 6.53507 12.136 6.53507C14.839 6.53507 15.339 8.31307 15.339 10.6271V15.3381H15.338ZM4.005 5.57507C3.80171 5.57527 3.60038 5.53542 3.41249 5.45781C3.2246 5.3802 3.05384 5.26634 2.90996 5.12273C2.76608 4.97913 2.65189 4.80859 2.57391 4.62085C2.49593 4.43312 2.4557 4.23186 2.4555 4.02857C2.4553 3.82529 2.49515 3.62395 2.57276 3.43606C2.65037 3.24818 2.76423 3.07742 2.90784 2.93353C3.05144 2.78965 3.22198 2.67546 3.40972 2.59748C3.59746 2.5195 3.79871 2.47927 4.002 2.47907C4.41255 2.47867 4.80645 2.64139 5.09704 2.93141C5.38763 3.22144 5.5511 3.61502 5.5515 4.02557C5.5519 4.43613 5.38919 4.83003 5.09916 5.12061C4.80914 5.4112 4.41556 5.57467 4.005 5.57507ZM5.3534 15.3381H2.90784V6.74807H5.3534V12.0001V15.3381ZM16.668 7.24792e-05H1.328C0.595 7.24792e-05 0 0.581073 0 1.29807V16.7011C0 17.4181 0.595 18.0001 1.328 18.0001H16.668C17.402 18.0001 18 17.4181 18 16.7011V1.29807C18 0.581073 17.402 7.24792e-05 16.668 7.24792e-05Z'
                            fill='#9ca3af'></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={"/sanjai.png"}
                      alt=''
                    />
                  </div>
                  <div className='text-lg leading-6 font-medium space-y-1'>
                    <h3 className='text-[#721346]'>Sanjaikumar</h3>

                    <p className='text-indigo-600'>CTO</p>
                  </div>
                  <div className='text-lg'></div>

                  <ul className='flex space-x-5'>
                    <li>
                      <a
                        href='https://twitter.com/SanjaiKumarv4'
                        className='text-gray-400 hover:text-gray-500'>
                        <span className='sr-only'>Twitter</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          aria-hidden='true'>
                          <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/santheepkumar-v-838377168/'
                        className='text-gray-400 hover:text-gray-500'>
                        <svg
                          className='h-5 w-5 '
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M15.338 15.3381H12.67V11.1601C12.67 10.1651 12.653 8.88307 11.283 8.88307C9.893 8.88307 9.682 9.96907 9.682 11.0901V15.3381H7.014V6.74807H9.573V7.92207H9.61C9.966 7.24707 10.837 6.53507 12.136 6.53507C14.839 6.53507 15.339 8.31307 15.339 10.6271V15.3381H15.338ZM4.005 5.57507C3.80171 5.57527 3.60038 5.53542 3.41249 5.45781C3.2246 5.3802 3.05384 5.26634 2.90996 5.12273C2.76608 4.97913 2.65189 4.80859 2.57391 4.62085C2.49593 4.43312 2.4557 4.23186 2.4555 4.02857C2.4553 3.82529 2.49515 3.62395 2.57276 3.43606C2.65037 3.24818 2.76423 3.07742 2.90784 2.93353C3.05144 2.78965 3.22198 2.67546 3.40972 2.59748C3.59746 2.5195 3.79871 2.47927 4.002 2.47907C4.41255 2.47867 4.80645 2.64139 5.09704 2.93141C5.38763 3.22144 5.5511 3.61502 5.5515 4.02557C5.5519 4.43613 5.38919 4.83003 5.09916 5.12061C4.80914 5.4112 4.41556 5.57467 4.005 5.57507ZM5.3534 15.3381H2.90784V6.74807H5.3534V12.0001V15.3381ZM16.668 7.24792e-05H1.328C0.595 7.24792e-05 0 0.581073 0 1.29807V16.7011C0 17.4181 0.595 18.0001 1.328 18.0001H16.668C17.402 18.0001 18 17.4181 18 16.7011V1.29807C18 0.581073 17.402 7.24792e-05 16.668 7.24792e-05Z'
                            fill='#9ca3af'></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
