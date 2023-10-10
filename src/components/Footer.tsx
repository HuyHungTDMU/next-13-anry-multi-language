import React from "react";
import Image from "next/image";
import logoVN from "../../public/images/logoVN.png";
import logoJP from "../../public/images/logoJP.jpg";
import { SvgFacebook, SvgInstagram, SvgTwitter } from "./Icons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t to-[#2c7873] from-[#466E73] p-7 sm:px-16 lg:px-32">
      <div className="w-full mx-auto px-6 grid grid-cols-3 gap-7">
        <div className="flex flex-col">
          <Image
            width={50}
            height={50}
            className="rounded"
            src={logoVN}
            alt="logoVN"
          />
          <ul className="text-gray-100">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              ANRI International Co.,Ltd
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Head Office: Charmington La Pointe Bldg.Block B, 8-3A
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              181 Cao Thang Str., 12 Ward, Dist.10, Ho Chi Minh City, 72510,
              Vietnam
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              TEL:84-2838370761 FAX:84-2838372571
            </li>

            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Ha Noi Rep. Office V-Tower Bldg.302
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              649 Kim Ma Str., Ba Dinh Dist., Ha Noi City, 11112, Vietnam
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              TEL:84-903824785 FAX:84-2437664511
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
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

          <p className="text-white mb-4 font-medium text-lg">Product</p>
          <ul className="text-gray-100 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
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
          <Image
            width={50}
            height={50}
            className="rounded"
            src={logoJP}
            alt="logoJP"
          />
          <ul className="text-gray-100 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              MIRAI COMPANY
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              〒451-0062 名古屋市西区花の木2-21-14
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              2-21-14 Hananoki, Nishi-ku,Nagoya-shi,4510062,Japan
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              TEL:052-982-9347 FAX: 052-982-9348
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              JP:09032595515 VN:+84-909000671 mail: amj-admin@jinno.co.jp
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
