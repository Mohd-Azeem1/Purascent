import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()
  const footeritems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Collection",
      slug: "/collection",
      active: !authStatus,
    },
    {
      name: "About",
      slug: "/About",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
  ]


  return (
    <div  data-scroll data-scroll-speed="-0.1" id='footer' className='w-full h-[80vh] z-10 '>
      <div className='w-full h-full shadow-[0px_-10px_10px_10px_rgba(0,0,0,0.4)] backdrop-blur-sm bg-[#0000002a]  flex justify-center items-center gap-5 junge flex-wrap text-[1.5vw]'>

        <div className=' w-[17vw] h-[60%]  text-[#fff] flex flex-col justify-between '>
          <h1 className='text-[3vw]'>Purascent</h1>
          <h1>Feel good, smell grate it’s your signature</h1>
          <h1 className='text-[1vw]'><span className='mr-[10%] text-red-500'><FontAwesomeIcon icon={faLocationDot} /></span>  Bareilly, Bareilly</h1>
        </div>

        <div className=' w-[17vw] h-[60%] text-white p-5 py-2 flex flex-col justify-between'>
        <h1 className='text-[2vw] my-3 mt-2'>Navigation</h1>
        <ul className='text-[1.2vw]'>
          {footeritems.map((item)=>(<li key={item.name} className='mb-3 '><button className='text-[#ffffffa0] hover:text-white hover:scale-[1.05] hover:tracking-widest transition-all' onClick={()=>{navigate(item.slug)}}>{item.name}</button></li>))}
        </ul>
        <h1 className='text-[1vw]'><span className='mr-[8%]'><FontAwesomeIcon icon={faPhone} /></span>707-826-1344</h1>
        </div>

        <div className=' w-[17vw] h-[60%] text-white p-5 py-2 flex flex-col justify-between'>
        <h1 className='text-[2vw] my-3 mt-2'>Quick Links</h1>
        <ul className='text-[1.2vw]'>
          {footeritems.map((item)=>(<li key={item.name} className='mb-3 '><button className='text-[#ffffffa0] hover:text-white hover:scale-[1.05] hover:tracking-widest transition-all' onClick={()=>{navigate(item.slug)}}>{item.name}</button></li>))}
        </ul>
        <h1 className='text-[1vw]'><span className='mr-[5%]'><FontAwesomeIcon icon={faEnvelope} /></span>msajifdf123@gmail.com</h1>
        </div>

        <div className=' w-[17vw] h-[60%] text-white p-5 py-2 flex flex-col justify-between'>
        <h1 className='text-[2vw] my-3 mt-2'>Service</h1>
        <ul className='text-[1.2vw]'>
          {footeritems.map((item)=>(<li key={item.name} className='mb-3 '><button className='text-[#ffffffa0] hover:text-white hover:scale-[1.05] hover:tracking-widest transition-all' onClick={()=>{navigate(item.slug)}}>{item.name}</button></li>))}
        </ul>
        <div className='flex gap-5'>
        <a href="https://www.instagram.com/m0hammadazeem" target="_blank"><img className='w-[1.8vw] h-[1.8vw] hover:scale-[1.08] transition-all object-cover object-center' src="https://upload.wikimedia.org/wikipedia/commons/2/28/Instagram_logo.png" alt="" /></a>
        <img className='w-[1.8vw] h-[1.8vw] hover:scale-[1.08] transition-all object-contain object-center' src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="" />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
