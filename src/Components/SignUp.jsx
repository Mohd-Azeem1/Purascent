import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../Appwrite/auth'
import { login } from '../Store/authslice'
import { useDispatch } from 'react-redux'



function SignUp() {

    const [userName, setUserName ] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const signup = async(data) => {
        setError("")
        try {
            const userData = authService.createAccount(data)
            if(userData){
                const userData = authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error)
        }

    }
  
  
    const handleSignUp = (e) => {
        e.preventDefault()
        const data = {userName,email, password}
        signup(data)
    }
  
    
  console.log(email, password)
  
    return (
      <div id='logincon' className='w-full h-screen flex justify-center items-center'>
          <div className='w-full h-screen backdrop-blur-sm bg-[#0000001b] flex justify-center items-center'>
  
              <div className='h-1/2 w-1/2 px-[3vw] backdrop-blur-lg bg-[#ffffff32] rounded-xl flex-col justify-between items-center'>
                  <h1 className='arizonia text-[5vh] text-center text-[#F8CBFF] mx-auto'>Sign Up</h1>
  
                  <div className='h-[85%] bg-transparent mx-auto'>
                      <h3 className='junge text-[#F8CBFF]'>Username</h3>
                      <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}  className='w-full bg-transparent text-white border-b-2 mb-3 ' />
                      <h3 className='junge text-[#F8CBFF]'>email</h3>
                      <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value);}}  className='w-full bg-transparent text-white border-b-2 mb-3 ' />
                      <h3 className='junge text-[#F8CBFF]'>Password</h3>
                      <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value);}} className='w-full bg-transparent text-white border-b-2 mb-3 ' />
                      <div className='flex justify-center items-center w-full '><h1 className='text-white md:text-[1.8vw] text-[2.5vw] m-auto'>Already have an account <span className='text-[#F8CBFF] '><Link to={'/login'}>Login</Link></span></h1></div>
                      <button type='submit' onClick={(e)=>{handleSignUp(e)}} className='junge w-full py-[.7vw] px-[3vw] rounded-full mx-auto md:mt-[1vw] mt-[5vw] hover:scale-[1.1] transition-all  text-[#fff] bg-[#F8CBFF] border-[1px] border-white'>Sign Up</button>
                  </div>
              </div>
              
          </div>
          
        
      </div>
    )
  
  
}

export default SignUp
