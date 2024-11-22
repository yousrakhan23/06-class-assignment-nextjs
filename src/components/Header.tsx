"use client";
import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import { Roboto } from "next/font/google";

const fontRoboto = Roboto({ subsets: ['latin'], weight: "500" });
const Header = () => {
    return (

        <div className=" hidden md:flex bg-[#FFFFFF] top-[100px] left-[100px] ">

            <header className="w-[1577px] h-[54px] top-[100px] left-[100px] pr-[64px] pl-[62px] bg-[#F7F7F7] box-shadow: 0px -1px 0px 0px #000000 inset">

                <div className=" h-[30px] gap-[16px] pt-4 ">
                    <p className={`${fontRoboto.className} w-full h-[21px] `}>Phone Number: 956 742 455 678 <span className="border border-[#676767] w-[30px] mx-[7px]"></span> Email:info@ddsgnr.com</p>
                    <hr className="w-[1585px] border border-[#000000] m-4 ml-[-70px] " />
                </div>
                <div className="w-[736px] h-[24px] gap-[16px] flex pl-[600px] mx-[600px]  ">
                    <FaFacebookF className="w-[10px] h-[18px] top-[3px] left-[7px]" />
                    <FaInstagram className="w-[18px] h-[18px] top-[3px] left-[3px]" />
                    <FaTwitter className="w-[18px] h-[15.3px] top-[4.5px] left-3px" />
                    <FaLinkedin className="w-[18px] h-[18px] top-[3px] left-[3px]" />
                </div>

            </header>
        </div>
    )
}
export default Header;