import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { authService } from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login as authlogin } from '../Store/authslice'

function Login() {


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [Error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const login = async(data) => {
    

    setError("")
    try {
      const session = await authService.login(data)
      console.log(session)
      if(session){
        const userData = await authService.getCurrentUser();
        console.log(userData)
        if(userData){
          dispatch(authlogin(data))
        }
        console.log("login completed")
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
      console.log(Error)
      throw error;
    }
  }

  const handleLogin = (e)=>{
    e.preventDefault()
    const data = {
      email: email,
      password: password
    }
    console.log(data.email, data.password);
    login(data)
    

  }

  


  return (
    <div id='logincon' className='w-full h-screen flex justify-center items-center'>
        <div className='w-full h-screen backdrop-blur-sm bg-[#0000001b] flex justify-center items-center'>

            <div className='h-1/2 w-1/2 px-[3vw] backdrop-blur-lg bg-[#ffffff32] rounded-xl flex-col justify-between items-center'>
                <h1 className='arizonia text-[5vh] text-center text-[#F8CBFF] mx-auto'>Login</h1>

                <div className='h-[85%]  bg-transparent mx-auto'>
                    
                    <h3 className='junge text-[#F8CBFF]'>email</h3>
                    <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value);}}  className='w-full bg-transparent text-white border-b-2 mb-3 ' />
                    <h3 className='junge text-[#F8CBFF]'>Password</h3>
                    <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value);}} className='w-full bg-transparent text-white border-b-2 mb-3 ' />
                    <div className='flex justify-center items-center w-full '><h1 className='text-white md:text-[1.8vw] text-[2.5vw] m-auto'>Don't have an account <span className='text-[#F8CBFF] '><Link to={'/SignUp'}>Sign Up</Link></span></h1></div>
                    <button type='submit' onClick={(e)=>{handleLogin(e)}} className='junge w-full py-[1vw] px-[3vw] rounded-full mx-auto mt-[8vw] md:mt-[3vw]  hover:scale-[1.1] transition-all  text-[#fff] bg-[#F8CBFF] border-[1px] border-white'>Login</button>
                </div>
            </div>

        </div>
        
      
    </div>
  )
}

export default Login
