"use client";

import React from "react";
import Image from "next/image";
import logoVN from "../../public/images/logoVN.png";
import { SvgFacebook, SvgInstagram, SvgTwitter } from "./Icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Index");

  return (
    <div className="bg-[#031E2F] z-0 opacity-100 p-7 sm:px-16 lg:px-32 flex flex-col gap-4">
      <div className="w-full mx-auto px-6 grid sm:grid-cols-3 grid-cols-1 gap-7">
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
              ANRI INTERNATIONAL CO.,LTD{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Professional hotel supplies for home, experience professional
              hotel high quality life.
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all"></li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all"></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <ul className="text-gray-100 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              CONTACT US{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              &nbsp;{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              090-900-0671 ( Mr. Jinno ){" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              090-382-4785 (Vietnamese){" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              E-mail : anri-info @jinno.co.jp{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              • Head Office: Charmington La Pointe Bldg.Block B, 8-3A{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              181 Cao Thang Str., 12 Ward, Dist.10, Ho Chi Minh City, 72510,
              Vietnam{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              • Ha Noi Rep. Office V-Tower Bldg.302 649 Kim Ma Str., Ba Dinh
              Dist., Ha Noi City, 11112, Vietnam{" "}
            </li>
          </ul>
        </div>

        <div className="flex gap-3 flex-col items-center">
          <div className="mx-2 items-center justify-center flex p-2">
            <img
              src="/images/logo_hiephoikhan.png"
              alt="logo-hiephoikhan"
              className="w-[90px] h-[100px] object-center object-cover rounded"
            />
          </div>
          <div className="flex gap-3 w-full justify-center items-center mt-2 mb-8 -mx-2">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
