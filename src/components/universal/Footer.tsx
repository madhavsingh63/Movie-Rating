import React from "react";
import QR from "@/assests/qr.png";
import {
  FaTiktok,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";
import Image from "next/image";
import { RiShareBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" w-full bg-black text-white text-sm py-10 px-4">
      <div className="max-w-[900px] mx-auto  flex flex-col gap-8 ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 ">
          {/* Social Media Container */}
          <div className="border border-gray-600 rounded-md p-5 w-full  md:w-[50%]">
            <p className="font-bold text-xl mb-3 text-center">
              Follow IMDb on social
            </p>
            <div className="flex items-center gap-5 justify-evenly text-xl">
              <FaTiktok />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
              <FaFacebookF />
            </div>
          </div>

          {/* QR Code Container */}
          <div className="border border-gray-600 rounded-md w-full  md:w-[50%] flex items-center justify-between">
            <div className="py-5 pl-5">
              <p className="font-bold text-xl mb-3">Get the IMDb App</p>
              <p className="text-sm text-gray-300 ">For Android and iOS</p>
            </div>
            <div className="rounded-md overflow-hidden">
              <Image
                src={QR}
                alt="QR Code"
                className="w-22 h-22 object-contain pr-5 "
              />
            </div>
          </div>
        </div>

        {/* Link Section */}
        
        <div className="flex flex-wrap justify-center gap-x-6  text-gray-300">
          {[
            "Help",
            "Site Index",
            "IMDbPro",
            "Box Office Mojo",
            "License IMDb Data",
          ].map((text, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline text-center text-[1rem] flex items-center justify-center"
            >
              {text}<RiShareBoxLine />
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-6  text-gray-300">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline text-center text-[1.2rem] flex items-center justify-center"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Bottom Branding Section */}
        <div className="text-center text-gray-400 text-sm space-y-1">
          <p>
            <span className="text-white font-semibold">an </span>
            <span className="text-white font-bold">amazon</span>
            <span className="text-white"> company</span>
          </p>
          <p className="text-xs">© 1990-2025 by IMDb.com, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerLinks = [
  "Press Room",
  "Advertising",
  "Jobs",
  "Conditions of Use",
  "Privacy Policy",
  "Your Ads Privacy Choices",
];
