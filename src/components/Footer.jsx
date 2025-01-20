import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm ">
        {/* leftside  */}
        <div className="">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="  w-full md:w-2/3 text-gray-600 leading-6  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* centertside  */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*rightside  */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>+237680807883 </li>
            <li>forchitbrandon57@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          copyright 2024@Health-Frist - All right Reword
        </p>
      </div>
    </div>
  );
};

export default Footer;
