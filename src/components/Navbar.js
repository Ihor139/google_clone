import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import { ReactComponent as GoogleLogo } from "../media/img/google-logo.svg";
import { ReactComponent as LightIco } from "../media/img/sun.svg";
import { ReactComponent as DarkIco } from "../media/img/moon.svg";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="w-full mx-auto p-6 pb-0 mb-10 flex flex-wrap flex-col sm:justify-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between space-x-5 w-full">
        <Link to="/" className="flex logo">
          <span className="flex items-end w-full h-9">
            {<GoogleLogo className="w-full" />}
            <sub className="text-blue-500 font-bold">clone</sub>
          </span>
        </Link>

        <Search />
        
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="theme-toggle flex items-start"
        >
          {darkTheme ? (
            <LightIco className="w-full h-14" />
          ) : (
            <DarkIco className="w-full h-14" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
