import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import cursor from "../assets/cursor-click.svg";

const Footer = () => {
  return (
    <div className="relative md:flex md:flex-col pt-20">
      <div className="p-10 bg-text-color absolute bottom-0 left-24 lg:left-10 flex flex-col gap-4 md:hidden">
        <img src={cursor} alt="cursor" className="w-10 h-10" />
        <div>
          <h1 className="text-[2rem] font-semibold leading-tight text-white">
            Become a <br /> Member
          </h1>
          <p className="text-[0.8rem] text-white">Get to access</p>
        </div>
        <button className="p-2 bg-brand text-white">Register</button>
      </div>
      <div className="p-4 bg-background flex justify-center md:flex-col">
        <div className="hidden md:flex p-10 bg-text-color flex-col gap-5">
          <img src={cursor} alt="cursor" className="w-10 h-10" />
          <div>
            <h1 className="text-[2rem] font-semibold leading-tight text-white">
              Become a <br /> Member
            </h1>
            <p className="text-[0.8rem] text-white">Get to access</p>
          </div>
          <button className="p-2 bg-brand text-white">Register</button>
        </div>
        <div className="w-[90%] float-right max-w-[1440px]">
          <div className="float-right md:float-none md:flex flex-col">
            <div className="list-none flex gap-10 md:flex-col lg:gap-0 flex-wrap">
              <Link to="/" className="p-3 hover:text-brand">
                Home
              </Link>
              <Link to="/about-us" className="p-3 hover:text-brand">
                About Us
              </Link>
              <Link to="/s4ds" className="p-3 hover:text-brand">
                S4DS
              </Link>
              <Link to="/our-drive" className="p-3 hover:text-brand">
                Our Drive
              </Link>
              <Link to="/membership" className="p-3 hover:text-brand">
                Membership
              </Link>
              <Link to="/awards" className="p-3 hover:text-brand">
                Awards
              </Link>
              <Link to="/icdmai" className="p-3 hover:text-brand">
                ICDMAI
              </Link>
            </div>
            <hr className="md:hidden" />
            <div className="p-3 flex justify-between md:flex-col md:gap-10">
              <div className="flex gap-10 md:flex-col">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="text-[0.9rem] text-[#4E4E5C]">Email</p>
                    <a
                      href="mailto:secretary@s4ds.org"
                      className="hover:text-[#1DA1F2]"
                    >
                      secretary@s4ds.org
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[0.9rem] text-[#4E4E5C]">Phone</p>
                    <p>+91 9923602490</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-[0.9rem] text-[#4E4E5C]">
                      Important Links
                    </p>
                    <Link className="hover:text-brand">Who We Are</Link>
                    <Link className="hover:text-brand">Our Goals</Link>
                    <Link className="hover:text-brand">
                      Membership Benefits
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <FaLinkedin className="text-2xl text-[#0077B5]" />
                <FaXTwitter className="text-2xl text-[#1DA1F2]" />
                <FaFacebook className="text-2xl text-[#4267B2]" />
                <FaYoutube className="text-2xl text-[#FF0000]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
