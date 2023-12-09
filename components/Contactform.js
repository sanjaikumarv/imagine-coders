import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function Contactform() {
  const [state, handleSubmit] = useForm("mgedvgwy");

  return (
    <div id='contact' className='lg:mb-3 pt-10 sm:pt-[3.5rem]'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-tr to-black  from-[#C9217C] text-center text-4xl md:text-5xl lg:text-6xl sm:pt-0 font-bold px-5 sm:p-0'>
        Reach us
      </h1>
      <p className='text-center  sm:mt-1 lg:mt-2 text-[#721346] text-sm sm:text-xl font-semibold'>We will reach you in a day</p>
      <form
        className=' mx-auto items-start p-5 sm:p-0 flex justify-center  sm:mt-10 '
        onSubmit={handleSubmit}>
        <br />

        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <input
          className=' border-2 py-[3px]  md:py-1.5 pl-2 md:pr-36  border-black  rounded-md'
          id='message'
          name='message'
          placeholder=' Email / Phone'
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <br />
        <button
          className='bg-black text-[1rem] md:text-lg px-3 py-1 text-white  md:px-5 md:py-1.5 ml-2 rounded-md outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black'
          type='submit'
          disabled={state.submitting}>
          {(state.succeeded && (
            <div className='bg-black rounded-lg text-white'>
              Reached
            </div>
          )) || (
            <div className='bg-black rounded-lg text-white'>
              Send
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
