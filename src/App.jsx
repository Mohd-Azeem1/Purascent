import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {authService} from './Appwrite/auth'
import { login, logout } from './Store/authslice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function App() {

  // setInterval(()=>{
  //   document.getElementsByClassName("loading-tems").style.backgroundColor = "#c0c0c0b2"
  // })


  const locomotiveScroll = new LocomotiveScroll();
  

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  useGSAP(()=>{
    gsap.to("#loding_cercle",{
      rotate: 360,
      duration: 1,
      repeat: -1,
      ease: 'none'
    })
  })

  

  return loading ? (
    <div className='w-screen h-screen bg-[#3A0D4F] flex items-center justify-center'>
      <div id='loding_cercle' className=' bg-transparent rounded-full border-[#EABEFF]  border-t-[5px] border-b-[5px] md:h-[10vw] md:w-[10vw] h-[10vw] w-[10vw]'></div>
    </div>
  ) : (
    <div className='bg-black overflow-x-hidden '>
       <Header />
       <Outlet />
       <Footer />
    </div>
  )
}

export default App
