import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {authService} from './Appwrite/auth'
import { login, logout } from './Store/authslice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function App() {
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
    <div></div>
  ) : (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
