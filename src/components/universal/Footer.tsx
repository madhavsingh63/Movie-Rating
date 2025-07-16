import React from 'react';
import {
  FaTiktok,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className=" w-full bg-black text-white text-sm py-10 px-4">
      <div className="max-w-[1280px] mx-auto  flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Social Media Container */}
          <div className="border border-gray-600 rounded-md p-5 w-full md:w-1/2">
            <p className="font-bold text-lg mb-3">Follow IMDb on social</p>
            <div className="flex gap-5 text-xl">
              <FaTiktok />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
              <FaFacebookF />
            </div>
          </div>

          {/* QR Code Container */}
          <div className="border border-gray-600 rounded-md p-5 w-full md:w-1/2 flex flex-col items-start md:items-start">
            <p className="font-bold text-lg mb-1">Get the IMDb App</p>
            <p className="text-sm text-gray-300 mb-3">For Android and iOS</p>
            <img
              src="/qr.png" // Make sure this image exists in public/
              alt="QR Code"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Link Section */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-gray-300 text-sm">
          {[
            'Help',
            'Site Index',
            'IMDbPro',
            'Box Office Mojo',
            'License IMDb Data',
            'Press Room',
            'Advertising',
            'Jobs',
            'Conditions of Use',
            'Privacy Policy',
            'Your Ads Privacy Choices',
          ].map((text, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline text-center whitespace-nowrap"
            >
              {text}
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
