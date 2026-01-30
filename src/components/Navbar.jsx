import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "Projects", path: "/projects" },
    { id: 3, link: "Experience", path: "/experience" },
    { id: 4, link: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full px-4 h-20 text-white bg-black fixed z-40">
      <div>
        <h1 className="text-5xl m-2 font-signature">Hamza Sahi</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="md:flex hidden">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-gray-500 hover:scale-105 duration-200 font-medium"
          >
            <Link to={path}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div
        className="md:hidden cursor-pointer text-gray-500 z-50 pr-4"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-linear-to-b from-black to-gray-800 text-gray-500 z-40">
          {links.map(
            (
              { id, link, path }, // <--- Yahan 'path' add kiya hai
            ) => (
              <li
                key={id}
                className="px-4 py-6 text-4xl cursor-pointer text-gray-500 hover:scale-105 duration-200"
              >
                {/* Click par menu band ho jaye isliye onClick add kiya */}
                <Link onClick={() => setNav(false)} to={path}>
                  {link}
                </Link>
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
