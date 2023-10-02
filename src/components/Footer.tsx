import React from "react";
import { SvgFacebook, SvgInstagram, SvgTwitter } from "./Icons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t to-[#2c7873] from-[#466E73] p-7 sm:px-16 lg:px-32">
      <div className="w-full mx-auto px-6 grid grid-cols-3 lg:grid-cols-5 gap-7">
        <div className="lg:col-span-2 col-span-3 flex flex-col items-center justify-center">
          <p className="mb-4 text-white text-center">
            <strong className="font-medium">ANRI</strong> is a private virtual
            network that has unique features and has high security.
          </p>
          <div className="flex w-full justify-center items-center mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <SvgFacebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <SvgTwitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <SvgInstagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-white">©{new Date().getFullYear()} - ANRI</p>
        </div>

        <div className="flex flex-col">
          <p className="text-white mb-4 font-medium text-lg">Product</p>
          <ul className="text-gray-100 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-white mb-4 font-medium text-lg">Engage</p>
          <ul className="text-gray-100">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-white mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-gray-100">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
