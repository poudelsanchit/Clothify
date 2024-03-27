import React, { useState } from "react";
import Clothify from "../../assets/clothify-dark.png";
import { IoFingerPrintOutline, IoSearch } from "react-icons/io5";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductsCount } from "../../redux/Slices/Cart/cartSlice";
import { getFavouritesCount } from "../../redux/Slices/favorites/favorites";

import { PiGithubLogoThin } from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";
import SeachBox from "./SeachBox";
const NavBar = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const [isActive, setIsActive] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Track input focus

  const productsCount = useSelector(getProductsCount);
  const favoritesCount = useSelector(getFavouritesCount);
  const [searchText,setSearchText] = useState('');

  return (
    <div className="sticky bg-white py-1 top-0  z-50 w-full font-Poppins text-black flex flex-col items-center bg-red">
      <div className="flex justify-between items-center  text-lg font-medium sm:h-16 h-14 w-11/12 ">
        <Link to={"/"}>
          <img
            src={Clothify}
            alt=""
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain "
          />
        </Link>

        <div className="w-96 relative">
          <div className="bg-[#f4f4f4] flex justify-center items-center rounded-md">
            <IoSearch className="text-[#a6a6a6] text-xl mx-2" />
            <input
              type="text"
              className="bg-[#f4f4f4] rounded-xl focus:outline-none  text-[#a6a6a6] h-10 w-32 sm:w-72 sm:placeholder:text-sm sm:text-sm text-xs placeholder:text-xs"
              placeholder="Search"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
            />
          </div>
          {isSearchFocused && 
          <SeachBox  searchQuery={searchText}/>
          }
        </div>

        <div className="flex justify-center items-center w-3/11 gap-2 cursor-pointer ">
          {isLoading ? (
            <div> Loading....</div>
          ) : isAuthenticated ? (
            <>
              <div className="relative  w-48 rounded-md">
                <img
                  src={user.picture}
                  className=" w-12 float-right rounded-full border-solid border-[1px] border-secondary-bg"
                  onClick={() => setIsActive((prev) => !prev)}
                />

                <div
                  className={
                    isActive
                      ? "absolute top-16  right-0 bg-white border-2  text-white h-full flex gap-2 rounded-md items-center bottom-0 z-50"
                      : " top-16 hidden right-0 bg-white border-2  text-white h-full flex gap-2 rounded-md items-center bottom-0 z-50"
                  }
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <div className="w-10  text-6xlxl flex justify-center items-center rounded-l-md bg-white text-black h-full">
                    <FiLogOut />
                  </div>
                  <div className="flex justify-center items-center bg-black h-full w-full  pr-4  rounded-r-md">
                    Logout
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                className="flex gap-1 justify-center items-center"
                onClick={() => loginWithRedirect()}
              >
                {" "}
                <IoFingerPrintOutline className="sm:text-2xl text-sm hover:scale-[1.01]" />
                <span className="text-sm"> Log In</span>
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
            {/* <NavLink
              className={({ isActive }) => (isActive ? "text-active" : "")}
              to={"/kids"}
            >
              Kids
            </NavLink> */}
            <NavLink
              className={({ isActive }) => (isActive ? "text-active" : "")}
              to={"/sports"}
            >
              Sports
            </NavLink>
            {/* <NavLink
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
            </NavLink> */}
          </div>
        </div>

        <div>
          <div className="flex  justify-center items-center gap-5">
            <Link to={"/contributers"}>
              <PiGithubLogoThin className=" text-2xl sm:text-3xl hover:scale-[1.01] cursor-pointer " />
            </Link>

            <Link to={"/cart"}>
              <div className="relative cursor-pointer">
                <CiShoppingCart className="text-2xl sm:text-3xl hover:scale-[1.01] " />
                <div className=" absolute h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-yellow-400 top-0 right-0 flex justify-center items-center text-xs font-Chakra">
                  {productsCount}
                </div>
              </div>
            </Link>
            <Link to={"/favorites"}>
              <div className="relative cursor-pointer">
                <CiHeart className="text-2xl sm:text-3xl hover:scale-[1.01] " />
                <div className=" absolute h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-yellow-400 top-0 right-0 flex justify-center items-center text-xs font-Chakra">
                  {favoritesCount}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
