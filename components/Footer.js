import React from "react";

export default function Footer() {
  return (
    <footer id='footer' className='bg-gray-100'>
      <div className='mt-8 md:mt-24 p-8 sm:p-0   md:max-w-7xl mx-auto sm:max-w-[35rem] '>
        <div className='grid space-y-4 grid-cols-2  rounded-2xl  grid-rows-2  sm:gap-x-10  sm:grid-cols-3  md:flex md:p-10 justify-between '>
          <div className='lg:mt-2.5 max-w-[38rem] sm:col-start-1 sm:col-end-4 col-start-1 col-end-3 '>
            <h1 className='text-[#721346] font-semibold  text-2xl'>
              Imagine Coders
            </h1>
            <p className='mt-2 text-sm  text-gray-500'>
              Imagine coders is a Products and Services company in the
              Information Technology space. Our customer-centric approach comes
              from understanding that our clients need more than technology
              professionals. We offer a strong team of developers in common and
              niche skill areas.
            </p>
          </div>

          <div>
            <h1 className='text-[#721346]'>Contact us</h1>
            <div className='mt-2 text-gray-500 text-sm space-y-2'>
              <p className='hover:text-gray-700'>
                <a href='https://www.instagram.com/iam_santheep/?hl=en'>
                  Instagram
                </a>
              </p>
              <p className='hover:text-gray-700'>
                <a href='https://www.linkedin.com/in/santheepkumar-v-838377168'>
                  Linkedin
                </a>
              </p>
              <p className='hover:text-gray-700'>
                <a href='https://twitter.com/SantheepHoney'>Twitter</a>
              </p>
            </div>
          </div>
          <div>
            <h1 className='text-[#721346]'>Works</h1>
            <div className='mt-2 text-sm text-gray-500 space-y-2'>
              <p className='hover:text-gray-700'>
                <a href='https://devconverter.vercel.app/home'>Devconverter</a>
              </p>
              <p className='hover:text-gray-700'>
                <a href='https://tailwoodui.vercel.app'>TailwoodUI</a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=' border-t border-gray-200 py-5 md:flex md:items-center md:justify-between'>
            <div className='flex space-x-6 md:order-2 justify-between w-36 mx-auto'>
              <a
                href='https://www.instagram.com/iam_santheep/?hl=en'
                className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Instagram</span>
                <svg
                  className='h-6 w-6 xl:w-8 xl:h-8'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'></path>
                </svg>
              </a>

              <a
                href='https://twitter.com/SantheepHoney'
                className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Twitter</span>
                <svg
                  className='h-6 w-6 xl:w-8 xl:h-8'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
                </svg>
              </a>

              <a
                href='https://www.linkedin.com/in/santheepkumar-v-838377168/'
                className='text-gray-400 hover:text-gray-500'>
                <svg
                  className='h-6 w-6 xl:w-7 xl:h-7'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15.338 15.3381H12.67V11.1601C12.67 10.1651 12.653 8.88307 11.283 8.88307C9.893 8.88307 9.682 9.96907 9.682 11.0901V15.3381H7.014V6.74807H9.573V7.92207H9.61C9.966 7.24707 10.837 6.53507 12.136 6.53507C14.839 6.53507 15.339 8.31307 15.339 10.6271V15.3381H15.338ZM4.005 5.57507C3.80171 5.57527 3.60038 5.53542 3.41249 5.45781C3.2246 5.3802 3.05384 5.26634 2.90996 5.12273C2.76608 4.97913 2.65189 4.80859 2.57391 4.62085C2.49593 4.43312 2.4557 4.23186 2.4555 4.02857C2.4553 3.82529 2.49515 3.62395 2.57276 3.43606C2.65037 3.24818 2.76423 3.07742 2.90784 2.93353C3.05144 2.78965 3.22198 2.67546 3.40972 2.59748C3.59746 2.5195 3.79871 2.47927 4.002 2.47907C4.41255 2.47867 4.80645 2.64139 5.09704 2.93141C5.38763 3.22144 5.5511 3.61502 5.5515 4.02557C5.5519 4.43613 5.38919 4.83003 5.09916 5.12061C4.80914 5.4112 4.41556 5.57467 4.005 5.57507ZM5.3534 15.3381H2.90784V6.74807H5.3534V12.0001V15.3381ZM16.668 7.24792e-05H1.328C0.595 7.24792e-05 0 0.581073 0 1.29807V16.7011C0 17.4181 0.595 18.0001 1.328 18.0001H16.668C17.402 18.0001 18 17.4181 18 16.7011V1.29807C18 0.581073 17.402 7.24792e-05 16.668 7.24792e-05Z'
                    fill='#9ca3af'></path>
                </svg>
              </a>
            </div>
          </div>
          <p className='my-3 text-base text-gray-400 md:mt-0 md:order-1 text-center'>
            © 2022 Imaginecoders, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
