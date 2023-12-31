import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DropDown from "./DropDown";
import CloseIcon from '@mui/icons-material/Close';
// import '../assets/dark-theme-logo.svg'

export default function Navbar() {
  const [isDropMenu,setIsDropDown] = useState(false);
  return (
    <nav className="ml-6 flex flex-row lg:justify-between items-center  text-lg">
      <div className=" flex items-center justify-between md:justify-normal md:space-x-32 py-6 px-2 ">
        <img
          className="w-32"
          src="https://inros.gbjsolution.com/content/images/2021/12/dark-theme-logo.svg"
          alt="logo"
        />
        <div className="hidden lg:block lg:w-auto">
          <ul className="flex items-center md:space-x-6">
            <li>Features</li>
            <li>Elements</li>
            <li>Membership</li>
            <li>Tags</li>
            <div className="relative group">
              <button className="z-10">
                More
                <ExpandMoreIcon />
              </button>
              <ul
                id="dropdown"
                className=" text-lg bg-hovr-d-blue flex-col space-y-5 font-medium min-w-max hidden group-hover:flex absolute z-10 p-4 rounded-lg border border-border-grey"
              >
                <li>Authors</li>
                <li>Monthly archive</li>
                <li>Monthly archive 2</li>
                <li>Yearly archive</li>
                <li>Yearly archive 2</li>
                <li>Contact</li>
                <li>Documentation</li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div className="mr-4 hidden lg:block">
        <ul className="flex flex-row items-center space-x-4">
          <li>Sign in</li>
          <li>
            <button onClick={()=>{document.body.requestFullscreen();}} className="bg-sk-blue rounded-2xl px-3 py-1">Sign Up</button>
          </li>
          <li>
            <SearchIcon />
          </li>
          <li>
            <LightModeIcon />
          </li>
        </ul>
      </div>
      <div className="ml-auto mr-4 lg:hidden relative">
        <button onClick={()=> setIsDropDown(!isDropMenu)}>
            {!isDropMenu ? <MenuIcon fontSize="large"/>: <CloseIcon fontSize="large"/>} 
        </button>
        {isDropMenu ? <DropDown/>: ''}
      </div>
    </nav>
  );
}
