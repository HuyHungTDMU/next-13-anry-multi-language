"user client";

import React, { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

const flags =[
  { text: "Vietnamese", id: "vn", img:'/images/flags/VN.png'},
  { text: "England", id: "en", img:'/images/flags/EN.png'},
  { text: "Japan", id: "jp", img:'/images/flags/JP.png'},
];

const LocaleSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const currentFlag = flags.find(item=>item.id === locale);

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

  function onSelectChange(value:string) {
      router.replace(pathname, { locale: value });
  }
  
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <div ref={dropdownRef}>
        {currentFlag&& (
          <div className="cursor-pointer text-white flex flex-row gap-2 items-center round" onClick={toggleMenu}>
            <img src={currentFlag.img} alt={currentFlag.id} className="w-[20px] h-[20px] object-center object-cover rounded-full"/>
            <span>{currentFlag.text}</span>
        </div>
        )}
      </div>

      {isOpen && (
        <div
          className="origin-top-right min-w-[150px] absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="p-3 flex flex-col gap-3" role="none">
            {flags.map((item)=>(
              <div key={item.id} className="cursor-pointer flex flex-row gap-3" onClick={()=>onSelectChange(item.id)}>
                <img src={item.img} alt={item.id} className="w-[20px] h-[20px] object-center object-cover"/>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
