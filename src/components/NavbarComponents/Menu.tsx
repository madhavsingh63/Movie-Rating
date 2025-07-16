"use client";
import { useState, useEffect, useRef } from "react";
import { FiFilm, FiMonitor, FiUsers, FiStar, FiGlobe } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { MdLocalMovies, MdLiveTv } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
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
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-white rounded-2xl hover:bg-[#484848] cursor-pointer   px-3 py-1 transition-all duration-300 ease-in-out "
      >
        <IoMenu size={24} />
        <span className="text-sm font-semibold hidden sm:block">Menu</span>
      </button>

      {open && (
        <div className="absolute left-1.5 sm:-left-16 lg:left-0 mt-2 w-[95vw]  md:max-w-6xl bg-[#121212] text-white p-6 grid grid-cols-2 sm:grid-cols-4 gap-8 shadow-lg z-50 animate-slideDown ">
          {/* Movies */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <MdLocalMovies className="text-yellow-400" />
              <span>Movies</span>
            </div>
            <ul className="space-y-1 text-sm sm:ml-7">
              <li>Release calendar</li>
              <li>Top 250 movies</li>
              <li>Most popular movies</li>
              <li>Browse movies by genre</li>
              <li>Top box office</li>
              <li>Showtimes & tickets</li>
              <li>Movie news</li>
              <li>India movie spotlight</li>
            </ul>
          </div>

          {/* TV Shows */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <MdLiveTv className="text-yellow-400" />
              <span>TV shows</span>
            </div>
            <ul className="space-y-1 text-sm sm:ml-7">
              <li>What's on TV & streaming</li>
              <li>Top 250 TV shows</li>
              <li>Most popular TV shows</li>
              <li>Browse TV shows by genre</li>
              <li>TV news</li>
            </ul>
          </div>

          {/* Watch */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <BsPlayFill className="text-yellow-400" />
              <span>Watch</span>
            </div>
            <ul className="space-y-1 text-sm sm:ml-7">
              <li>What to watch</li>
              <li>Latest trailers</li>
              <li>IMDb Originals</li>
              <li>IMDb Picks</li>
              <li>IMDb Spotlight</li>
              <li>Family entertainment guide</li>
              <li>IMDb Podcasts</li>
            </ul>
          </div>

          {/* Awards & Community */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <FiStar className="text-yellow-400" />
              <span>Awards </span>
            </div>
            <ul className="space-y-1 text-sm mb-6 sm:ml-7">
              <li>Emmys</li>
              <li>Superheroes Guide</li>
              <li>San Diego Comic-Con</li>
              <li>Summer Watch Guide</li>
              <li>Best Of 2025 So Far</li>
              <li>Disability Pride Month</li>
              <li>STARmeter Awards</li>
              <li>Awards Central</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default MegaMenu;