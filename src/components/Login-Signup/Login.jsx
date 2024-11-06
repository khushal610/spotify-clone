import React from 'react'
import { FaSpotify,FaFacebook,FaApple } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";
import FormBtn from '../Buttons/FormBtn'
import { Link } from 'react-router-dom';
import '../../App.css';

function Login() {

  const showPassword = () => {
    var loginPass = document.getElementById("loginPass");
    if(loginPass.type == 'password'){
        loginPass.type = 'text';
    }
    else{
        loginPass.type = 'password';
    }
  }

  return (
    <div className='login-body w-full h-auto flex flex-col justify-center'>
        <div className='login-container mt-4 flex flex-col justify-center w-2/4 rounded-md text-white'>
          
          <div className='text-4xl text-center flex items-center flex-col p-4'>
              <FaSpotify className='text-white '/>
              <h1 className='text-4xl font-medium text-white'>
              Log in to Spotify
              </h1>
          </div>

          <div className='login-btns p-5 flex flex-col gap-3 w-3/6'>
              <FormBtn btnIcon={<FcGoogle className='text-2xl float-start ml-4 text-red-500'/>} btnText={"Continue with Google"}/>
              <FormBtn btnIcon={<FaFacebook className='text-2xl float-start ml-4 text-blue-500'/>} btnText={"Continue with Facebook"}/>
              <FormBtn btnIcon={<FaApple className='text-2xl float-start ml-4'/>} btnText={"Continue with Apple"}/>
              <FormBtn btnText={"Continue with phone number"}/>
          </div>

          <div className='w-full p-5 flex justify-center'>
            <hr className='w-5/6 bg-slate-50'/>
          </div>

          <div className='login-form w-3/6 flex flex-col gap-2 p-3'>
              <p>Email or username</p>
              <input type="text" className='p-2 rounded-md bg-transparent border border-slate-300 outline-none' placeholder='Email or username' />
              <p>Password</p>
              <input type="password" id='loginPass' className='p-2 rounded-md bg-transparent border border-slate-300 outline-none' placeholder='Password' />
              <p><input type="checkbox" onClick={showPassword} /> Show Password</p>
              <button type="button" className='bg-green-500 p-3 rounded-full font-bold text-black'>Next</button>
              <Link to={"#"} className='underline text-center pt-4'>
              Forgot your password?
              </Link>
          </div>

          <div className='w-full p-5 flex justify-center'>
            <hr className='w-5/6 bg-slate-50'/>
          </div>

          <div className='p-6 text-center'>
              <p>Don't have an account?
                  <Link to={"/signup"} className='underline px-1'>Sign up for Spotify</Link>
              </p>
          </div>

        </div>
        
        <div className='login-footer text-white w-full mt-5'>
          <p className='p-7 text-center'>This site is protected by reCAPTCHA and the Google 
            <Link to={"#"} className='underline px-1'>Privacy Policy</Link>
            and 
            <Link to={"#"} className='underline px-1'>Terms of Service</Link>
            apply.</p>
        </div>
    </div>
  )
}

export default Login
