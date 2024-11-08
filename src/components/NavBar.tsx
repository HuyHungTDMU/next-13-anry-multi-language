"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../public/images/logoVN.png";
import DropdownMenu from "./DropdownMenu";

const CustomLink = ({
  href,
  title,
  scrollActive,
  className = "",
  classHover = "",
}: {
  href: string;
  title: string;
  scrollActive: boolean;
  className?: string;
  classHover: string;
}) => {
  // const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`inline-block h-[1px] left-0 absolute -bottom-0.5 ease duration-300 group-hover:w-full w-0 ${classHover} 
        //{router. === href && "w-full"} 
        ${scrollActive ? "bg-[#031E2F]" : "bg-white"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const t = useTranslations("Index");

  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <header
      className={`relative fixed top-0 z-30 transition-all w-full px-7 sm:px-16 lg:px-32 py-5 font-medium flex items-center bg-[#031E2F] justify-between ${
        scrollActive && "bg-light shadow-2xl"
      }`}
    >
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="rounded absolute left-16 lg:block hidden"
      />

      <nav className={`space-x-7 text-ellipsis lg:block hidden text-white`}>
        <CustomLink
          href="/"
          title={t("home")}
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/products"
          title={t("products")}
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/about"
          title={t("about")}
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/projects"
          title={t("projects")}
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/news"
          title={t("news")}
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/contact"
          title={t("contact")}
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
      </nav>

      <nav
        className={`space-x-7 text-ellipsis lg:hidden ${
          scrollActive ? "text-[#031E2F]" : "text-white"
        }`}
      >
        <DropdownMenu />
      </nav>

      <nav className="gap-5 flex items-center">
        <img
          src="/images/logo_hiephoikhan.png"
          alt="logo-hiephoikhan"
          className="w-[50px] h-[50px] object-center object-cover rounded"
        />
        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default NavBar;
