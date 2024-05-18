import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {authService} from './Appwrite/auth'
import { login, logout } from './Store/authslice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';


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

  

  return loading ? (
    <div className='w-screen h-screen'>
      <div className='w-1/2 h-full flex items-center justify-evenly'>
        <div className='h-1/2 w-full rounded bg-[#c0c0c0] m-5'></div>
        <div className='h-1/2 w-full rounded bg-[#c0c0c0] m-5'></div>
      </div>
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
