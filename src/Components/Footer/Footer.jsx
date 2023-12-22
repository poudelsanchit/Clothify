import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";
import Nike from './nike.png'

export function Footer() {
  return (
    <footer className="w-full">
      <hr className="my-4" />
      <div className="mx-auto my-2 max-w-7xl items-center justify-between pr-10 md:flex lg:px-0">
        <div className="inline-flex items-center">
        <Link to={"/"}>
          <img src={Nike} alt="" className="h-12" />
        </Link>
          <span className="ml-4 mb-4 text-lg font-bold">NIKE</span>
        </div>
        <div className=" mr-10 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© 2024 NIKE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
