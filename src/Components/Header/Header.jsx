import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




function Header() {
  const bucket = useSelector(state => state.bucket.bucket)
  console.log(bucket)
  const authStatus = useSelector((state)=> state.auth.status)
const navigate = useNavigate()
const navItems = [
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
]
  return (
    <header className='w-full z-[99] h-[10vh] fixed text-[#F8CBFF] backdrop-blur-[2vw]  justify-between items-center px-12 py-8 flex junge'>
      <div className='w-[10vw] flex'>
          <Link className='hover:tracking-widest hover:scale-[1.05] transition-all text-2xl  justify-center items-center shadow-[#F8CBFF]' to={"/"}>PURASCENT</Link>
      </div>

     <ul className='flex gap-[2vw] tracking-wider'>
      {navItems.map((item)=> (<li className='hover:tracking-widest hover:scale-[1.1] hover:border-[1px] hover:border-[#F8CBFF] px-2 py-1 transition-all  rounded-full' key={item.name}><Link to={item.slug}>{item.name}</Link></li>))}
     </ul>

     
     
    
     {authStatus ? <Link to={'/cart'}>
     <div className='text-2xl items-center flex'>
     <FontAwesomeIcon icon={faCartShopping} />
     <h3 className='text-xl bg-white rounded-full flex justify-center items-center w-[20px] h-[20px] text-black mb-4'>{bucket?.length}</h3>
     </div>
     </Link>
     :  <div className='w-[8vw] flex'><Link className='right-10 border-2 px-5 py-2 justify-center items-center hover:text-xl transition-all border-[#F8CBFF] rounded-full ml-7' to={'login'}>LOGIN</Link></div>
     }
     

    </header>
  )
}

export default Header
