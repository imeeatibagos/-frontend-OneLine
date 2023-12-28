import React, { useEffect, useState } from "react";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();

  // handle scroll function
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li tabIndex={0}>
        <details className="relative">
          <summary className="w-35 cursor-pointer">Categories</summary>
          <ul className="p-2 w-60 flex flex-col items-center absolute top-full left-0 bg-white border border-base-300 shadow z-[2] max-h-40 overflow-y-auto">
            <li>
              <Link
                to="/allproducts"
                className={location.pathname === "/allproducts" ? "hidden" : ""}
              >
                All
              </Link>
            </li>
            <li>
              <Link
                to="/vegetables"
                className={location.pathname === "/vegetables" ? "hidden" : ""}
              >
                Vegetables
              </Link>
            </li>
            <li>
              <Link
                to="/fruits"
                className={location.pathname === "/fruits" ? "hidden" : ""}
              >
                Fruits
              </Link>
            </li>
            <li>
              <Link
                to="/meat&seafoods"
                className={
                  location.pathname === "/meat&seafoods" ? "hidden" : ""
                }
              >
                Meat and Seafoods
              </Link>
            </li>
            <li>
              <Link
                to="/drinks"
                className={location.pathname === "/drinks" ? "hidden" : ""}
              >
                Drinks
              </Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <header className="max-w-screen-2xl container shadow-white mx-auto  top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar xl:px-24 shadow-lg ${
          isSticky
            ? "shadow-md bg-base-100  transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          <a href="/" className=" lg:flex">
            <img src="/static/icon/logo.png" alt="" />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className=" flex lg:flex md:flex navbar-end">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </button>
          {/* {cart items} */}
          <Link to="cart-page"></Link>
          {/* {btn} */}
          <a className="btn lg:flex bg-green rounded-full px-7  text-white flex items-center gap-2">
            <FaUserAlt />
            <Link to="/">Logout</Link>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
