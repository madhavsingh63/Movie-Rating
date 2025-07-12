"use client";
import { useState } from "react";
import {
  FiSearch,
  FiFilm,
  FiMonitor,
  FiUsers,
  FiBriefcase,
  FiTag,
  FiChevronDown,
} from "react-icons/fi";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const menuItems = [
  { icon: <FiSearch />, label: "All" },
  { icon: <FiFilm />, label: "Titles" },
  { icon: <FiMonitor />, label: "TV episodes" },
  { icon: <FiUsers />, label: "Celebs" },
  { icon: <FiBriefcase />, label: "Companies" },
  { icon: <FiTag />, label: "Keywords" },
];

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All");

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex min-w-fit justify-between  items-center   text-black px-3 gap-1  rounded-md text-sm font-bold "
      >
        {selectedItem}
        {open ? (
          <TiArrowSortedUp color="black" />
        ) : (
          <TiArrowSortedDown color="black" />
        )}
      </button>

      {open && (
        <div className="absolute mt-2 w-56 bg-gray-900 text-white shadow-lg  z-50">
          <ul className="py-1">
            {menuItems.map((item, index) => (
              <li
                onClick={() => (setSelectedItem(item.label), setOpen(false))}
                key={index}
                className={`flex items-center px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer ${
                  selectedItem === item.label ? "text-yellow-400" : "text-white"
                }`}
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
