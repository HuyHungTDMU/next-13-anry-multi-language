"user client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logoVN.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

const DropdownMenu: React.FC = () => {
  const t = useTranslations("Index");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <div ref={dropdownRef}>
        <Image
          onClick={toggleMenu}
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="rounded cursor-pointer"
        />
      </div>

      {isOpen && (
        <div
          className="origin-top-right min-w-[150px] absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              {t("home")}
            </Link>
            <Link
              href="/products"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              {t("products")}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              {t("about")}
            </Link>
            <Link
              href="/projects"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              {t("projects")}
            </Link>
            <Link
              href="/news"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              {t("news")}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
