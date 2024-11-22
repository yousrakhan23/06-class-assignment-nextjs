"use client";
import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/images/Ddsgnr Library (1).svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        };

    return (
        <div>
            <div className="w-[1152px] h-[44px] justify-center ">
                <Image
                    src={logo}
                    alt="logo"
                    width={130.6}
                    height={41}
                    className="pt-[39px] pb-[29px] gap-[10.5px]  ml-[100px] "
                />
            </div>
            <button 
            className='block md:hidden text-black'
            onClick={toggleMenu}
            >
            {isOpen ? <FaTimes size={24} className='ml-[22rem]'  /> : <GiHamburgerMenu size={24} className='ml-[22rem]' /> }
            </button>

            <div className=" hidden md:flex w-[1577px] h-[72px] top-[170px] left-[100px] border-b-[1px] pr[64px] pl-[64px] bg-[#FFFFFF] border-[#676767] ">
                <ul className="w-[687px] h-[44px] gap-[32px] ml-[500px] justify-center">
                    <li className="flex justify-center ">
                        <a href="#" className=" p-[10px] gap-[10px] border-b-[1px] border-[#000000] ml-[24px] ">Home</a>
                        <a href="#" className=" p-[10px] gap-[10px] ml-[24px]">Courses</a>
                        <a href="#" className=" p-[10px] gap-[10px] ml-[24px]">Services</a>
                        <a href="#" className=" p-[10px]  ml-[24px]">Achievement</a>
                        <a href="#" className="w-[64px] h-[44px] p-[10px] gap-[10px] ml-[30px]">About Us</a>
                        <a href="#" className="w-[64px] h-[44px] p-[10px] gap-[10px] ml-[30px]">Testimonial</a>
                        <div className="flex pl-[68px] gap-[26px] ">
                            <button className="w-[80px] h-[40px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px] border border-[#000000] rounded-[5px]">Login</button>
                            <button className="w-[100px] h-[40px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px] border border-[#000000] rounded-[5px] bg-[#000000] text-[#ffffff]">Sign Up</button>
                        </div>

                    </li>
                </ul>
            </div>
            
            {isOpen && (
                <nav className='absolute top-[72px] left-0 w-full bg-[#F7F7F7] shadow-lg z-50'>
                    <ul className="flex flex-col items-start p-4 gap-4">
                    <div className="w-full border-b pb-4">
                    <p className="text-sm">
                Phone Number: <span className="font-semibold">956 742 455 678</span>
              </p>
              <p className="text-sm mt-2">
                Email: <span className="font-semibold">info@ddsgnr.com</span>
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>

              </div>
            </div>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Achievement
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-700">
                Testimonial
              </a>
            </li>
            <div className="w-full flex flex-col gap-4 mt-4">
              <button className="w-full px-4 py-2 border border-gray-400 text-gray-600 rounded hover:bg-gray-200">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Sign Up
              </button>
              </div>




                    </ul>
                </nav>
            )
            
            }
            
        </div>

    );
}

export default Navbar