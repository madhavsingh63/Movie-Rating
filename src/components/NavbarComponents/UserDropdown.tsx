"use client";
import { useEffect, useRef, useState } from "react";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const menuItems = [
  { icon: <FaUserEdit />, label: "Profile" },
  { icon: <IoMdBookmark />, label: "Watchlist" },
  { icon: <IoLogOut />, label: "Logout" },
];

 const UserDropdown =() => {
  const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={() => setOpen(!open)}
        className=" text-black  gap-1  rounded-md  cursor-pointer"
      >
        {user ? (
          <FaUser color="white" size={18} />
        ) : (
          <p className="text-sm text-balance text-white font-semibold">Login</p>
        )}
      </button>

      {open && user && (
        <div className="absolute mt-2 w-56 -left-20 sm:left-0 bg-[#121212] text-white shadow-lg  z-50">
          <ul className="py-1">
            {menuItems.map((item, index) => (
              <li
                onClick={() => setOpen(false)}
                key={index}
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer "
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default UserDropdown;