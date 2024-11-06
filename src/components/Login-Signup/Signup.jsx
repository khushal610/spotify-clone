import React from 'react'
import { FaSpotify,FaFacebook,FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import '../../App.css'
import FormBtn from '../Buttons/FormBtn';

function Signup() {
  return (
    <div className='sign-up-page w-full flex justify-center'>
      <div className='signup-container flex flex-col w-1/4 p-5'>
        
        <div className='text-4xl text-center flex items-center p-4 flex-col'>
            <FaSpotify className='text-white text-center'/>
            <h1 className='text-4xl font-medium text-white z-10'>
              Sign up to start listening
            </h1>
        </div>
        
        <div className='signup-form flex flex-col p-5 pt-8 gap-3'>
            <p className='text-white'>Email address</p>
            <input type="text" className='p-3 bg-transparent border border-white rounded-md' placeholder='name@domain.com' />
              <Link to={"#"}
              className='underline text-green-500'>
                Use phone number instead.
              </Link>
              <button type="button" className='bg-green-500 p-3 rounded-full font-bold'>Next</button>
        </div>

        <div className='flex justify-evenly '>
          <hr className='line1' />
          <p className='text-white'>or</p>
          <hr className='line1' />
        </div>

        <div className='w-full flex justify-center flex-col gap-2 p-3 mb-5'>
            <FormBtn btnIcon={<FcGoogle className='text-2xl float-start ml-4 text-red-500'/>} btnText={"Sign up with Google"}/>
            <FormBtn btnIcon={<FaFacebook className='text-2xl float-start ml-4 text-blue-500'/>} btnText={"Sign up with Facebook"}/>
            <FormBtn btnIcon={<FaApple className='text-2xl float-start ml-4'/>} btnText={"Sign up with Apple"}/>
        </div>

        <hr />

        <div className='pt-5 p-3 text-white text-center'>
            <p className='py-4'>
              Already have an account? 
              <Link to={"/login"} className='underline px-1'>Log in here.</Link>
            </p>
            <p className='text-sm'>
              This site is protected by reCAPTCHA and the Google  
              <Link to={"#"} className='underline px-1 text-slate-600'>Privacy Policy </Link>
              and 
              <Link to={"#"} className='underline px-1 text-slate-600'>Terms of Service </Link>
              apply.
            </p>
        </div>

      </div>
    </div>
  )
}

export default Signup
