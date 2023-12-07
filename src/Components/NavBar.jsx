import React from 'react'
import Nike from '../assets/nike.png'
import { IoFingerPrintOutline,IoSearch  } from "react-icons/io5";
import { CiHeart,CiShoppingCart  } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect, logout,user, isAuthenticated, } = useAuth0();

  return (
    <div className="sticky bg-white py-1 top-0  z-50 w-full font-Poppins text-black flex flex-col items-center">
      <div className="flex justify-between items-center  text-lg font-medium h-16 w-11/12 ">
        <Link to={"/"}>
          <img src={Nike} alt="" className="h-12" />
        </Link>
        {/* <div className='flex gap-5'>
          <div>New & Featured</div>
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </div> */}
        <div className="bg-[#f4f4f4] flex justify-center items-center rounded-md">
          <IoSearch className="text-[#a6a6a6] text-xl mx-2" />
          <input
            type="text"
            className="bg-[#f4f4f4] rounded-xl focus:outline-none  text-[#a6a6a6] h-10 w-72 placeholder:text-sm text-sm"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer ">

          {/* Auth0 */}

          {isAuthenticated?  (<>
          <img src={user.picture} className=' w-12 rounded-full border-solid border-2  border-black' /> 
          <button className='flex gap-2 items-center' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          <div>Logout</div>
           </button>  
          </>) :  
          (<><IoFingerPrintOutline className="text-2xl hover:scale-[1.01]" />
          <button onClick={() => loginWithRedirect()}>Log In</button></>) }

         



        </div>
      </div>
      <div className="flex justify-between w-11/12   font-medium tracking-tighter py-3  border-b-[0.1px] border-[#f4f4f4]">
        <div className="flex gap-10 ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-active" : "")}
            to={"/men"}
          >
            Men
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-active" : "")}
            to={"/women"}
          >
            Women
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-active" : "")}
            to={"/kids"}
          >
            Kids
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-active" : "")}
            to={"/sports"}
          >
            Sports
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-active" : "")}
            to={"/new"}
          >
            New
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-active" : "")}
            to={"/sales"}
          >
            Sales
          </NavLink>
        </div>
        <div>
          <div className="flex  justify-center items-center gap-5">
            <div className="relative cursor-pointer">
              <CiShoppingCart className="text-3xl hover:scale-[1.01] " />
              <div className=" absolute h-4 w-4 rounded-full bg-yellow-400 top-0 right-0 flex justify-center items-center text-xs font-Chakra">
                4
              </div>
            </div>

            <CiHeart className="text-3xl hover:scale-[1.01] cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar