import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavCategory = () => {
  const [isSticky, setSticky] = useState(false);

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

  return (
    <header className="max-w-screen-2xl container mx-auto  top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar xl:px-24 shadow-lg ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
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
          </div>

          <a href="/" className=" lg:flex">
            <img src="/static/icon/logo.png" alt="" />{" "}
          </a>
        </div>

        <div className=" flex lg:flex md:flex navbar-end">
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

export default NavCategory;
