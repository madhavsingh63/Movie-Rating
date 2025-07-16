import logo from "@/assests/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoSearch } from "react-icons/io5";
import { RiBookmark3Fill } from "react-icons/ri";
import DropdownMenu from "../NavbarComponents/DropdownMenu";
import UserDropdown from "../NavbarComponents/UserDropdown";
import Menu from "../NavbarComponents/Menu";

const Navbar = () => {
  return (
    <section className="w-full  h-14 bg-[#121212] flex items-center justify-between px-1 sm:px-4">
      <div className="w-full sm:max-w-[1280px]  mx-auto flex items-center justify-evenly gap-x-2  ">
        <div className="flex flex-row-reverse sm:flex-row items-center justify-between gap-x-2 ">
          <Link href="/" className="text-2xl font-bold text-gray-800 ">
            <Image
              src={logo}
              alt="Logo"
              className="min-w-[50px] sm:min-w-[65px] "
              width={65}
              height={65}
            />
          </Link>
          <Menu />
        </div>

        <div className=" bg-white w-[60vw]  rounded-sm flex items-center relative ">
          <div className="active:bg-gray-200 rounded-l-sm border-r border-gray-300 py-1  ">
            <DropdownMenu />
          </div>

          <input
            type="text"
            className="bg-transparent border-none outline-none text-black text-sm pl-1 w-[80%] md:w-[70%]   rounded-none  "
          />
          <button className=" cursor-pointer absolute right-0 bg-yellow-500 text-black px-2 py-1 rounded-r-sm hover:bg-yellow-600 transition-all duration-300 ease-in-out">
            <IoSearch size={24} />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-2 h-[31px] ">
          <div className="hidden sm:flex flex-row items-center gap-x-1 rounded-2xl hover:bg-[#484848] cursor-pointer   px-3 py-1 transition-all duration-300 ease-in-out">
            <RiBookmark3Fill color="white" size={20} />
            <p className="text-sm text-white font-semibold ">Watchlist</p>
          </div>
          <div className=" rounded-2xl hover:bg-[#484848] cursor-pointer   px-3 py-1 transition-all duration-300 ease-in-out">
            <UserDropdown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
