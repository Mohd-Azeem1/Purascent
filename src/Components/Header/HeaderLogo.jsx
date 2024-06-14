import React from 'react'
import { NavLink } from 'react-router-dom'

const logo = () => {
  return (
    <div className="w-[10vw] flex">
        <NavLink
          className="hover:tracking-widest hover:scale-[1.05] transition-all text-2xl max-md:text-sm justify-center items-center shadow-[#F8CBFF]"
          to="/"
        >
          PURASCENT
        </NavLink>
      </div>
  )
}

export default logo
