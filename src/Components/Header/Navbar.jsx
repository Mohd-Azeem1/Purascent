import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({navItems}) => {
  return (
    <ul id="main_nav_bar" className="flex max-md:hidden gap-[2vw] tracking-wider">
        {navItems.map((item) => (
          <li
            className="hover:tracking-widest hover:scale-[1.1] hover:border-[1px] hover:border-[#F8CBFF] px-2 py-1 transition-all rounded-full"
            key={item.name}
          >
            <Link to={item.slug}>{item.name}</Link>
          </li>
        ))}
      </ul>
  )
}

export default Navbar
