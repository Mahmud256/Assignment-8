import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {

  return (
    <div className="container mx-auto">
      <nav className="flex flex-wrap justify-center md:justify-around lg:justify-between items-center py-6">

        <Logo></Logo>

        <ul className="flex gap-5 text-lg font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Donation
            </NavLink>


          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Statistics
            </NavLink>


          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;