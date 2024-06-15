import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import AuthButtons from "./AuthButtons";
import ProfileMenu from "./ProfileMenu";


function Header() {
  // Variable declarations
  const bucket = useSelector((state) => state.bucket.bucket);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Collection", slug: "/collection", active: !authStatus },
    { name: "About", slug: "/about", active: true },
    { name: "Contact", slug: "/contact", active: true },
  ];

  const profileItems = [
    { name: "My Profile", slug: "/profile" },
    { name: "My Orders", slug: "/orders" },
    { name: "My Cart", slug: "/cart" },
  ];

  // SideBar animations
  const [openOrClose, setOpenOrClose] = useState(false);
  const menu = useRef(null);
  const tl = useRef(null);
  const [pMOpenClose, setpMOpenClose] = useState(false);
  const pMenu = useRef(null);
  const tl2 = useRef(null);

  useEffect(() => {
    if (menu.current) {
      tl.current = gsap.timeline({ paused: true });
      tl.current
        .to(menu.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          display: "flex",
        })
        .fromTo(
          menu.current.children,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }

    if (pMenu.current) {
      tl2.current = gsap.timeline({ paused: true });
      tl2.current
        .to(pMenu.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          display: "flex",
        })
        .fromTo(
          pMenu.current.children,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }
  }, []);

  useEffect(() => {
    if (tl.current) {
      openOrClose ? tl.current.play() : tl.current.reverse();
    }
    if (tl2.current) {
      pMOpenClose ? tl2.current.play() : tl2.current.reverse();
    }
  }, [openOrClose, pMOpenClose]);

  const close = () => {
    setOpenOrClose(!openOrClose);
  };

  // Profile bar animations
  const handlePClick = () => {
    setpMOpenClose(!pMOpenClose);
  };

  return (
    <header className="w-full z-[99] h-[2vh] md:h-[10vh] max-md:h-10 fixed text-[#F8CBFF] backdrop-blur-[3vh] justify-between items-center px-12 max-md:px-2 py-8 flex junge">
      <div onClick={close} className="md:hidden hover:text-xl cursor-pointer">
        <FontAwesomeIcon icon={faBars} />
      </div>

      <HeaderLogo />

      {/* <div className="w-[10vw] flex">
        <NavLink
          className="hover:tracking-widest hover:scale-[1.05] transition-all text-2xl max-md:text-sm justify-center items-center shadow-[#F8CBFF]"
          to="/"
        >
          PURASCENT
        </NavLink>
      </div> */}

      {/* SideBar */}

      <SideBar menu={menu} navItems={navItems} close={close} />
      {/* <ul
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
      </ul> */}

      {/* Main nav items */}

      <Navbar navItems={navItems}/>

      {/* <ul id="main_nav_bar" className="flex max-md:hidden gap-[2vw] tracking-wider">
        {navItems.map((item) => (
          <li
            className="hover:tracking-widest hover:scale-[1.1] hover:border-[1px] hover:border-[#F8CBFF] px-2 py-1 transition-all rounded-full"
            key={item.name}
          >
            <Link to={item.slug}>{item.name}</Link>
          </li>
        ))}
      </ul> */}

      {/* Conditional Login button or Cart icon */}
     <AuthButtons authStatus={authStatus} bucket={bucket} handlePClick={handlePClick}/>
     <ProfileMenu pMenu={pMenu} profileItems={profileItems} handlePClick={handlePClick}/>
    </header>
  );
}

export default Header;
