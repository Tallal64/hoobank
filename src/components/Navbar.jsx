import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-10 navbar">
      <img src={logo} alt="logo" className="w-32 h-10" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-sm md:text-base text-dimWhite hover:text-white cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="cursor-pointer flex flex-1 justify-end items-center sm:hidden ">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          alt="menu"
          className="w-7 h-7 object-contain"
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-20 right-0 bg-black-gradient rounded-xl min-w-[144px] sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-sm cursor-pointer ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-10"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
