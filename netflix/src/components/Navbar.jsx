import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to="/signin">
            <button className="text-white pr-4">Sign In</button>
        </Link>
        
        <Link to="/signup">
        <button className="text-white bg-red-600 px-4 py-2 rounded cursor-pointer">
          Sign Up
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
