import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Submenus from "./Submenus";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [subMenu, setSubMenu] = useState("");
  const [navBG, setNavBG] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY >= 35 ? setNavBG(true) : setNavBG(false);
  });

  return (
    <>
      <nav
        className={`flex justify-between items-center font-montserrat px-5 md:px-20 sticky sm:fixed top-0 z-10 h-[49.6px] w-full select-none text-slate-700 ${
          navBG ? "bg-white/95 shadow" : "bg-transparent"
        }`}
      >
        <span className="font-cookie text-3xl text-red-500">Meru</span>
        <section className="hidden lg:flex items-center">
          <Link
            to="/"
            className="relative group px-5 py-3 hover:bg-white/25 border-b-2 border-b-transparent hover:border-b-red-500 text-base cursor-pointer duration-200"
          >
            <span className="flex items-center group-hover:text-red-500 duration-200">
              Home
            </span>
          </Link>
          <div className="relative group px-5 py-3 hover:bg-white/25 border-b-2 border-b-transparent hover:border-b-red-500 text-base cursor-pointer duration-200">
            <span className="flex items-center group-hover:text-red-500 duration-200">
              <span>Popular outstation routes</span>
              <MdOutlineKeyboardArrowDown className="group-hover:-rotate-180 duration-200 text-red-500" />
            </span>
            <ul className="absolute top-[40px] group-hover:top-[49.6px] duration-100 invisible group-hover:visible opacity-0 group-hover:opacity-100 left-0 rounded-md text-sm bg-white overflow-hidden shadow w-full">
              <li
                onMouseEnter={() => setSubMenu("mumbai")}
                onMouseLeave={() => setSubMenu("")}
                className={`px-5 py-2 flex items-center justify-between ${
                  subMenu === "mumbai" ? "bg-slate-100 text-red-500" : ""
                }`}
              >
                <span>Mumbai</span>
                <MdOutlineKeyboardArrowDown className="-rotate-90 text-base text-red-500" />
              </li>
              <li
                onMouseEnter={() => setSubMenu("pune")}
                onMouseLeave={() => setSubMenu("")}
                className={`px-5 py-2 flex items-center justify-between ${
                  subMenu === "pune" ? "bg-slate-100 text-red-500" : ""
                }`}
              >
                <span>Pune</span>
                <MdOutlineKeyboardArrowDown className="-rotate-90 text-base text-red-500" />
              </li>
              <li
                onMouseEnter={() => setSubMenu("bangalore")}
                onMouseLeave={() => setSubMenu("")}
                className={`px-5 py-2 flex items-center justify-between ${
                  subMenu === "bangalore" ? "bg-slate-100 text-red-500" : ""
                }`}
              >
                <span>Bangalore</span>
                <MdOutlineKeyboardArrowDown className="-rotate-90 text-base text-red-500" />
              </li>
            </ul>
            <Submenus subMenu={subMenu} setSubMenu={setSubMenu} />
          </div>
          <Link className="relative group px-5 py-3 hover:bg-white/25 border-b-2 border-b-transparent hover:border-b-red-500 text-base cursor-pointer duration-200">
            <span className="flex items-center group-hover:text-red-500 duration-200">
              Meru biz
            </span>
          </Link>
          <div className="relative group px-5 py-3 hover:bg-white/25 border-b-2 border-b-transparent hover:border-b-red-500 text-base cursor-pointer duration-200">
            <span className="flex items-center group-hover:text-red-500 duration-200">
              <span>About meru</span>
              <MdOutlineKeyboardArrowDown className="group-hover:-rotate-180 duration-200 text-red-500" />
            </span>
            <ul className="absolute top-[40px] group-hover:top-[49.6px] duration-100 invisible group-hover:visible opacity-0 group-hover:opacity-100 left-0 rounded-md text-sm border bg-white overflow-hidden border-slate-200 shadow w-full">
              <Link to="/about/our-journey">
                <li className="px-5 py-2 hover:bg-slate-100 hover:text-red-500">
                  Our journey
                </li>
              </Link>
              <Link to="/about/our-services">
                <li className="px-5 py-2 hover:bg-slate-100 hover:text-red-500">
                  Our services
                </li>
              </Link>
              <Link to="/about/our-investors">
                <li className="px-5 py-2 hover:bg-slate-100 hover:text-red-500">
                  Our investors
                </li>
              </Link>
            </ul>
          </div>
          <AiOutlineMenuFold
            onClick={() => setOpenSidebar(true)}
            className="text-2xl ml-5 cursor-pointer text-red-500"
          />
        </section>

        {/* Responsive Menu */}
        <section className="group relative block lg:hidden">
          <AiOutlineMenuFold
            onClick={() => setOpenSidebar(true)}
            className="text-2xl ml-5 cursor-pointer text-red-500"
          />
        </section>

        {/* Sidebar */}
        <section
          className={`fixed top-0 left-0 w-full h-full bg-black/50 ${
            openSidebar ? "visible" : "invisible"
          }`}
        >
          <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </section>
      </nav>
    </>
  );
};

export default Navbar;
