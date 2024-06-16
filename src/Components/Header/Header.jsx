import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import AuthButtons from "./AuthButtons";
import ProfileMenu from "./ProfileMenu";
import { authService } from "../../Appwrite/auth";
import { logout } from "../../Store/authslice";

function Header() {
  // Variable declarations
  const bucket = useSelector((state) => state.bucket.bucket);
  const Dispatch = useDispatch()
  const authStatus = useSelector((state) => state.auth.status);
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
    {name: "Logout", slug:"/"}
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
    console.log(authService.getCurrentUser())
  };

  const handleLogout = () => {
    console.log("Nahi karunga Logout")
    authService.logout().then(()=>{
      console.log("you are about to logout")
      Dispatch(logout())
    })
  }

  return (
    <header className="w-full z-[99] h-[2vh] md:h-[10vh] max-md:h-10 fixed text-[#F8CBFF] backdrop-blur-[3vh] justify-between items-center px-12 max-md:px-2 py-8 flex junge">
      <div onClick={close} className="md:hidden hover:text-xl cursor-pointer">
        <FontAwesomeIcon icon={faBars} />
      </div>

      <HeaderLogo />
      <SideBar menu={menu} navItems={navItems} close={close} />
      <Navbar navItems={navItems}/>
      <AuthButtons authStatus={authStatus} bucket={bucket} handlePClick={handlePClick}/>
      <ProfileMenu pMenu={pMenu} profileItems={profileItems} handlePClick={handlePClick} handleLogout={handleLogout}/>
    </header>
  );
}

export default Header;
