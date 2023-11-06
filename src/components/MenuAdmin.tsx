"use client";

import React from "react";
import UpdateProjects from "./updateProjects";
import UpdateProducts from "./updateProducts";
import DraftEditor from "./DraftEditor";
import Link from "next/link";

const MenuAdmin = ({ id, data }: { id: number; data: any[] }) => {
  const tabs = [
    { id: 1, name: "Projects" },
    { id: 2, name: "Products" },
    { id: 3, name: "News" },
  ];

  const renderMenu = () => {
    switch (id) {
      case 1:
        return (
          <div className="flex flex-col gap-4 p-4 ">
            <h1>Projects</h1>
            <UpdateProjects list={data} />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-4 p-4 ">
            <h1>Products</h1>
            <UpdateProducts list={data} />
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-4 p-4 ">
            <h1>News</h1>
            <DraftEditor content={data[0].content} />
          </div>
        );
      default:
        return (
          <div className="flex flex-col gap-4 p-4 ">
            <h1>Projects</h1>
            <UpdateProjects list={data} />
          </div>
        );
    }
  };

  return (
    <div className="border-b border-[#40605be6] flex flex-col gap-7">
      <div className="flex">
        {tabs.map((tab) => (
          <Link
            href={`/admin-post/${tab.id}`}
            className={`${
              id === tab.id
                ? "bg-[#40605be6] text-white"
                : "text-[#40605be6] hover:bg-blue-100"
            } flex-1 py-2 px-4 font-semibold focus:outline-none`}
            key={tab.id}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      {renderMenu()}
    </div>
  );
};

export default MenuAdmin;
