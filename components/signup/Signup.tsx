"use client"

import { error } from 'console'
import React, { useState } from 'react'
import { BiShow } from "react-icons/bi";
import { CgPassword } from 'react-icons/cg';
import { BiHide } from "react-icons/bi";

const Signup = () => {
  // const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)
  const [showpassword,setShowpassword]=useState(false)

  const handleSignin=async(e:React.FormEvent)=>{
    e.preventDefault()
    setError('')
    setLoading(true)

    if(password.length<6){
      setError("Password should be at least 6 characters long.")
      setLoading(false)
      return
    }
  }
  
  return (
    <>
      <section className='bg-black/50 fixed top-0 left-0 h-screen w-full
        text-black shadow-2xl flex flex-col items-center justify-center'>

        <div className='flex bg-white gap-8 rounded-xl px-10 py-12 h-auto ' >
          <div className='  bg-[#01239E1A] rounded-2xl  py-8 hidden md:block '>
            <img
              src="/loginimg.png"
              alt="logo"
              className='w-80 py-14 px-10 '
            />
          </div>

          <div>
            
            <h1 className='font-bold text-lg'>Welcome To Paynix</h1>
            
            <h6 className='text-[#868686] text-sm font-medium'>Sign In To Access Accounts </h6>

            <div className='grid gap-1'>
              <span className='font-medium'>User Name</span>
              <input
                type="name"
                placeholder='Enter Your Name'
                className='border-1 border-[#C6C6C6] p-2 rounded-md' 
                required
              />
            </div>


            <div className='grid gap-1'>
              <span className='font-medium'>Email</span>
              <input
                type="email"
                placeholder='Enter Your Email'
                className='border-1 border-[#C6C6C6] p-2 rounded-md' 
                required
              />
            </div>


            <span className='font-medium'>Password</span>
            <div className='flex flex-col'>
              <input
                type={showpassword? "text": "password"}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='Enter Your Password'
                className='border-1 border-[#C6C6C6] p-2  rounded-md' 
                required
                disabled={loading}
              />
              <button 
              type='button'
              onClick={()=>setShowpassword(!showpassword)}
              className='cursor-pointer absolute ml-[244px] mt-[13px]'
              aria-label={showpassword? "Hide Password": "Show Password"}
              >
                {showpassword? <BiHide />:<BiShow />}
              </button>
              
              
            </div>


            <div className='flex justify-between items-center gap-7 py-2'>
              <div className='flex items-center justify-center text-[#868686]'>
              <input
                type="checkbox"
              />
              <span>Remember Me</span>
              </div>

              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                        Forgot Password?
                    </a>
            </div>
            <div className='flex items-center justify-center bg-[#01239E] py-2 text-white rounded-md cursor-pointer my-2'>
            <button 
            className='cursor-pointer'
            onClick={handleSignin}
            >
                Register
                </button>
            </div>


            <div className='flex justify-center'>
              <span className='border-t w-25 border-[#C6C6C6] my-3 mx-2'></span>
              <span className='text-[#C6C6C6]'>OR</span>
              <span className='border-t w-25 border-[#C6C6C6] my-3 mx-2'></span>
            </div>

            <div className='flex items-center gap-2 border-1 border-[#C6C6C6] px-10 py-1 rounded-md cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48 " className=' w-6 h-6'>
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <button className='text-sm font-medium cursor-pointer'>Sign In With Google</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
