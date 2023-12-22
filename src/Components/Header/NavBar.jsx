import React from 'react'
import Nike from '../../assets/nike.png'
import { IoFingerPrintOutline,IoSearch  } from "react-icons/io5";
import { CiHeart,CiShoppingCart  } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';
import { getProductsCount } from '../../redux/Slices/Cart/cartSlice';
import { PiGithubLogoThin } from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";

const NavBar = () => {
  const { loginWithRedirect, logout,user, isAuthenticated, } = useAuth0();
  const productsCount = useSelector(getProductsCount);
  return (
    <div className="sticky bg-white py-1 top-0  z-50 w-full font-Poppins text-black flex flex-col items-center bg-red">
      <div className="flex justify-between items-center  text-lg font-medium sm:h-16 h-14 w-11/12 ">
        <Link to={"/"}>
          <img
            src={Nike}
            alt=""
            className="h-8 w-8 sm:h-12 sm:w-12 object-contain "
          />
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
            className="bg-[#f4f4f4] rounded-xl focus:outline-none  text-[#a6a6a6] h-10 2-32 sm:w-72 sm:placeholder:text-sm sm:text-sm text-xs placeholder:text-xs"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer ">
          {/* Auth0 */}

          {isAuthenticated ? (
            <>
              <img
                src={user.picture}
                className=" w-12 rounded-full border-solid border-2  border-black"
              />
              <button
                className="flex gap-2 items-center"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <div>Logout</div>
              </button>
            </>
          ) : (
            <>
              <button
                className="flex gap-1 justify-center items-center"
                onClick={() => loginWithRedirect()}
              >
                {" "}
                <IoFingerPrintOutline className="sm:text-2xl text-sm hover:scale-[1.01]" />
                <span className='text-sm'> Log In</span>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-between w-11/12   font-medium tracking-tighter py-3  border-b-[0.1px] border-[#f4f4f4] ">
        <div>
          <CgMenuLeft className="text-2xl sm:hidden block" />
          <div className="sm:flex gap-10 hidden ">
            <NavLink
              className={({ isActive }) => (isActive ? "text-active" : "")}
              to={"/"}
            >
              Home
            </NavLink>
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
        </div>

        <div>
          <div className="flex  justify-center items-center gap-5">
            <a href="https://github.com/poudelsanchit/Ecommerce" target="blank">
              {" "}
              <PiGithubLogoThin className=" text-2xl sm:text-3xl hover:scale-[1.01] cursor-pointer " />
            </a>
            <Link to={"/cart"}>
              <div className="relative cursor-pointer">
                <CiShoppingCart className="text-2xl sm:text-3xl hover:scale-[1.01] " />
                <div className=" absolute h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-yellow-400 top-0 right-0 flex justify-center items-center text-xs font-Chakra">
                  {productsCount}
                </div>
              </div>
            </Link>

            <CiHeart className="text-2xl sm:text-3xl hover:scale-[1.01] cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar