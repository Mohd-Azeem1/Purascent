import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const ProfileMenu = ({pMenu, profileItems, handlePClick}) => {
  return (
    <ul
            ref={pMenu}
            id="profileSideBar"
            className="bg-[#3A0D4F] fixed top-0 right-0 w-[50vw] md:w-[10vw] flex-col p-5 gap-[1vw] tracking-wider shadow-[-10px_10px_10px_rgba(0,0,0,0.3)] transform translate-x-[120%] opacity-0"
          >
            <li onClick={handlePClick} className="mb-7 cursor-pointer">
              <FontAwesomeIcon icon={faX} />
            </li>
            {profileItems.map((item) => (
              <li
                className="hover:tracking-widest res-nav-item border-b-[1px] border-[#F8CBFF] hover:scale-[1.1] px-1 pr-2 py-1/2 transition-all"
                key={item.name}
              >
                <Link to={item.slug}>{item.name}</Link>
              </li>
            ))}
          </ul>
  )
}

export default ProfileMenu
