import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ menu, navItems, close }) => {
  return (
    <ul
        ref={menu}
        className="sidebar bg-[#3A0D4F] fixed top-0 left-0 w-[40vw] h-screen flex-col p-5 gap-[1vw] tracking-wider shadow-[_10px_10px_10px_rgba(0,0,0,0.3)] transform translate-x-[-100%] opacity-0"
      >
        <li onClick={close} className="mb-7 cursor-pointer">
          <FontAwesomeIcon icon={faX} />
        </li>
        {navItems.map((item) => (
          <li
            onClick={close}
            className="hover:tracking-widest res-nav-item border-b-[1px] border-[#F8CBFF] hover:scale-[1.1] px-1 pr-2 py-1/2 transition-all"
            key={item.name}
          >
            <NavLink
              to={item.slug}
              className={({ isActive }) =>
                isActive ? "scale-[1.2] tracking-widest" : "scale-[1]"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
  )
}

export default SideBar
