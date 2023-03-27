import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="bg-[#1C2B35]">
      <div className="navbar container mx-auto text-white">
        <div className="flex-1">
          <img
            className="btn btn-ghost normal-case text-xl"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
