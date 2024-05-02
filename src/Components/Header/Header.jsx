import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { stagger } from "framer-motion";

function Header() {
  const bucket = useSelector((state) => state.bucket.bucket);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
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
  ];

  const [openOrClose, setopenOrClose] = useState(false);
  const menu = useRef();

  const tl = useRef();

  useEffect(() => {
    console.log("done");
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(menu.current, {
      display: 'flex',
      top:0,
      opacity: 1,
      duration: 0.5,
    });
    
  }, []);
  useEffect(() => {
    openOrClose ? tl.current.play() : tl.current.reverse();

  }, [openOrClose]);

  const close = () => {

    setopenOrClose(!openOrClose);

  };

  return (
    <header className="w-full z-[99] h-[2vh] md:h-[10vh] max-md:h-10 fixed text-[#F8CBFF] backdrop-blur-[3vh]  justify-between items-center px-12 max-md:px-2 py-8 flex junge">
      <div
        onClick={() => {
          close();
          
        }}
        className=" md:hidden hover:text-xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="w-[10vw] flex">
        <NavLink
          className="hover:tracking-widest hover:scale-[1.05] transition-all text-2xl max-md:text-sm  justify-center items-center shadow-[#F8CBFF]"
          to={"/"}
        >
          PURASCENT
        </NavLink>
      </div>

      <ul
        ref={menu}
        className={`sidebar hidden  w-[40vw] h-screen flex-col fixed top-[-100vh] left-0 opacity-0 justify-start bg-[#3A0D4F] p-5 gap-[2vw] tracking-wider shadow-[_10px_10px_10px_rgba(0,0,0,0.3)]`}
      >
        <li
          onClick={() => {
            close();
          }}
          className="mb-7"
        >
          <FontAwesomeIcon icon={faX} />
        </li>
        {navItems.map((item) => (
          <li
         
            onClick={() => {
              close();
            }}
            className={({ isActive }) =>
              `hover:tracking-widest ${
                isActive ? "scale-[1.2]" : "scale-[1]"
              } res-nav-item opacity-0 top-[10vh] border-[1px] border-[#F8CBFF] fixed hover:scale-[1.1] px-2 py-1 transition-all `
            }
            key={item.name}
          >
            <Link to={item.slug}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <ul className="flex max-md:hidden gap-[2vw] tracking-wider">
        {navItems.map((item) => (
          <li
            className="hover:tracking-widest hover:scale-[1.1] hover:border-[1px] hover:border-[#F8CBFF] px-2 py-1 transition-all rounded-full"
            key={item.name}
          >
            <Link to={item.slug}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {authStatus ? (
        <Link to={"/cart"}>
          <div className="md:text-[2vw] text-[7vw] items-center flex">
            <FontAwesomeIcon icon={faCartShopping} />
            <h3 className="md:text-[1.5vw] text-[5vw] md:w-[2vw] w-[5vw] md:h-[2vw] h-[5vw] bg-white rounded-full flex justify-center items-center  text-black mb-4">
              {bucket?.length}
            </h3>
          </div>
        </Link>
      ) : (
        <div className="w-[8vw] md:mr-0 mr-10 flex">
          <Link
            className="border-2 px-[1.5vw] py-[0.7vw] justify-center items-center hover:text-xl transition-all border-[#F8CBFF] rounded-full "
            to={"login"}
          >
            LOGIN
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
