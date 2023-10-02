"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SvgInstagram, SvgMenu, SvgPinterest, SvgTwitter } from "./Icons";
import { motion } from "framer-motion";
import LocaleSwitcher from "./LocaleSwitcher";

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
        // {router.pathname === href && "w-full"} 
        ${scrollActive ? "bg-[#2c7873]" : "bg-white"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <header
      className={`fixed top-0 z-30 transition-all w-full px-7 sm:px-16 lg:px-32 py-5 font-medium flex items-center bg-[#65A69A] justify-between ${
        scrollActive && "bg-light shadow-2xl"
      }`}
    >
      <nav
        className={`space-x-7 text-ellipsis lg:block hidden ${
          scrollActive ? "text-[#2c7873]" : "text-white"
        }`}
      >
        <CustomLink
          href="/"
          title="Home"
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/about"
          title="About"
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/projects"
          title="Projects"
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/news"
          title="News"
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
        <CustomLink
          href="/contact"
          title="Contact"
          scrollActive={scrollActive}
          classHover={`${scrollActive && "bg-purple-950"}`}
        />
      </nav>

      <nav
        className={`space-x-7 text-ellipsis lg:hidden ${
          scrollActive ? "text-[#2c7873]" : "text-white"
        }`}
      >
        <Link
          href="/"
          title="Home"
          className={`${scrollActive && "bg-purple-950"}`}
        >
          <SvgMenu />
        </Link>
      </nav>

      <nav className="gap-5 flex items-center">
        <motion.a
          className={`bg-white rounded-full items-center justify-center flex w-7 h-7 shadow-md ${
            scrollActive && "shadow-2xl"
          }`}
          href="https://twitter.com/"
          target="_blank"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
        >
          <SvgTwitter />
        </motion.a>

        <motion.a
          className={`bg-white rounded-full items-center justify-center flex w-7 h-7 shadow-md ${
            scrollActive && "shadow-2xl"
          }`}
          href="https://www.pinterest.com/"
          target="_blank"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
        >
          <SvgPinterest />
        </motion.a>

        <motion.a
          className={`bg-white rounded-full items-center justify-center flex w-7 h-7 shadow-md ${
            scrollActive && "shadow-2xl"
          }`}
          href="https://www.instagram.com/"
          target="_blank"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
        >
          <SvgInstagram />
        </motion.a>

        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default NavBar;
