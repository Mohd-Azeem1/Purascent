import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faX} from "@fortawesome/free-solid-svg-icons";


const AuthButtons = ({authStatus, bucket, handlePClick}) => {
  const navigate = useNavigate();
  return (
        <div>
        {authStatus ? (
        <div id="cart-profile-icon-container" className="flex md:gap-5 gap-2">
          <Link to="/cart">
            <div className="md:text-[2vw] text-[7vw] items-center flex">
              <FontAwesomeIcon icon={faCartShopping} />
              <h3 className="md:text-[1.5vw] text-[5vw] md:w-[2vw] w-[5vw] md:h-[2vw] h-[5vw] bg-white rounded-full flex justify-center items-center text-black mb-4">
                {bucket?.length}
              </h3>
            </div>
          </Link>

          {/* Profile icon */}
          <div
            onClick={handlePClick}
            id="profile-icon"
            className="rounded-full md:h-[2.5vw] h-[8vw] md:w-[2.5vw] w-[8vw] overflow-hidden"
          >
            <img id="user-img" className="h-full w-full rounded-full" alt="" />
          </div>

        </div>
      ) : (
        <div className="w-[8vw] md:mr-0 mr-10 flex">
          <Link
            className="border-2 px-[1.5vw] py-[0.7vw] justify-center items-center hover:text-xl transition-all border-[#F8CBFF] rounded-full"
            to="login"
          >
            LOGIN
          </Link>
        </div>
      )}
      </div>
    )
  
}

export default AuthButtons
