import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink , useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer " src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-autodd hidden" />
        </NavLink>

        <NavLink to="/about">
          <li className="py-1">ABOUT </li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-autodd hidden" />
        </NavLink>

        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-autodd hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-4 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <img className="w-6 md:hidden" src="data:image/svg+xml,%3csvg%20width='37'%20height='27'%20viewBox='0%200%2037%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='17'%20y='24'%20width='20'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20x='7'%20y='12'%20width='30'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20width='37'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3c/svg%3e" alt=""></img>
             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  Myprofile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  Myappointmrents
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
