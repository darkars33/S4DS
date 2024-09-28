import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  window.addEventListener('click', (e) => {
    if (e.target.tagName !== 'LI') {
      setIsDropDownOpen(false)
    }
  })

  const location = useLocation().pathname;

  const isAboutUs = location.includes("/about-us");


  return (
    <nav className="bg-white w-screen shadow-sm fixed z-50 backdrop-blur-2">
      <div className="w-[90%] py-3 px-10 flex justify-between flex-wrap items-center mx-auto lg:w-[100%] md:w-[90%] lg:px-2 max-w-[1440px]">
        <Link
          to="/"
          className="w-12 h-12 object-contain"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        ></Link>
        <div className="flex items-center gap-10 lg:gap-5 md:hidden">
          <ul className="flex justify-center items-center space-x-12 lg:space-x-4">
            <NavLink to="/" className="text-lg hover:underline cursor-pointer">
              Home
            </NavLink>
            <li

              className={`relative text-lg hover:underline cursor-pointer ${isAboutUs && "underline font-normal"}`}
              onMouseEnter={() => setIsDropDownOpen(true)}
            >
              About Us
              {isDropDownOpen && (
                <div className="absolute p-3 w-[200px] bg-white top-10 left-0 shadow-md">
                  <ul className="flex flex-col gap-2">
                    <NavLink
                      to="/about-us/vision-mission"
                      className="hover:underline cursor-pointer"

                    >
                      Vision and Mission
                    </NavLink>
                    <NavLink
                      to="/about-us/objectives"
                      className="hover:underline cursor-pointer"

                    >
                      Objectives
                    </NavLink>
                    <NavLink
                      to="/about-us/brahmasutras"
                      className="hover:underline cursor-pointer"

                    >
                      Brahmasutras
                    </NavLink>
                    <NavLink
                      to="/about-us/charter"
                      className="hover:underline cursor-pointer"

                    >
                      Charter
                    </NavLink>
                    <NavLink
                      to="/about-us/goals"
                      className="hover:underline cursor-pointer">
                      Goals
                    </NavLink>
                    <NavLink
                      to="/about-us/framework"
                      className="hover:underline cursor-pointer">
                      Framework
                    </NavLink>
                    <NavLink to="/about-us/executive" className="hover:underline cursor-pointer">
                      Executive
                    </NavLink>
                  </ul>
                </div>
              )}
            </li>
            <NavLink
              to="/s4ds"
              className="text-lg hover:underline cursor-pointer"
            >
              S4DS
            </NavLink>
            <NavLink
              to="/our-drive"
              className="text-lg hover:underline cursor-pointer"
            >
              Our Drive
            </NavLink>
            <NavLink
              to="/membership"
              className="text-lg hover:underline cursor-pointer"
            >
              Membership
            </NavLink>
            <NavLink
              to="/awards"
              className="text-lg hover:underline cursor-pointer"
            >
              Awards
            </NavLink>
            <NavLink
              to="/icdmai"
              className="text-lg hover:underline cursor-pointer"
            >
              ICDMAI
            </NavLink>
          </ul>
          <button className="p-2 px-12 lg:px-8 bg-brand text-white">
            Join Us
          </button>
        </div>
        <div className="hidden md:block">
          <RxHamburgerMenu
            className="text-[2rem] text-black hover:text-slate-400"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div
          className={`absolute hidden md:block w-full left-0 top-14 shadow-lg rounded--b-md py-3 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          {/* for mobile view */}
          <div className="p-2 flex flex-col items-center gap-5 bg-white">
            <ul className="flex flex-col justify-center items-center place-items-center gap-4">
              <NavLink
                to="/"
                className="text-xl  hover:underline cursor-pointer"
              >
                Home
              </NavLink>
              <li

                className={`relative text-lg hover:underline cursor-pointer ${isAboutUs && "underline font-normal"}`}
                onMouseEnter={() => setIsDropDownOpen(true)}
              >
                About Us
                {isDropDownOpen && (
                  <div className="absolute p-3 w-[200px] bg-white top-10 left-0 shadow-md">
                    <ul className="flex flex-col gap-2">
                      <NavLink
                        to="/about-us/vision-mission"
                        className="hover:underline cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        Vision and Mission
                      </NavLink>
                      <NavLink
                        to="/about-us/objectives"
                        className="hover:underline cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        Objectives
                      </NavLink>
                      <NavLink
                        to="/about-us/brahmasutras"
                        className="hover:underline cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        Brahmasutras
                      </NavLink>
                      <NavLink
                        to="/about-us/charter"
                        className="hover:underline cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        Charter
                      </NavLink>
                      <NavLink
                        to="/about-us/goals"
                        className="hover:underline cursor-pointer" onClick={() => setIsOpen(false)}>
                        Goals
                      </NavLink>
                      <NavLink
                        to="/about-us/framework"
                        className="hover:underline cursor-pointer" onClick={() => setIsOpen(false)}>
                        Framework
                      </NavLink>
                      <NavLink to="/about-us/executive" className="hover:underline cursor-pointer">
                        Executive
                      </NavLink>
                    </ul>
                  </div>
                )}
              </li>
              <NavLink
                to="/s4ds"
                className="text-xl hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                S4DS
              </NavLink>
              <NavLink
                to="/our-drive"
                className="text-xl  hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Our Drive
              </NavLink>
              <NavLink
                to="/membership"
                className="text-xl  hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Membership
              </NavLink>
              <NavLink
                to="/awards"
                className="text-xl  hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Awards
              </NavLink>
              <NavLink
                to="/icdmai"
                className="text-xl  hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ICDMAI
              </NavLink>
            </ul>
            <button className="p-2 px-5 bg-brand text-white">Join Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
