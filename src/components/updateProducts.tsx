"use client";

import React, { useState } from "react";
import {
  apiCreateProduct,
  apiDeleteProduct,
  apiUpdateProduct,
} from "../lib/api-request";

export default function UpdateProducts({
  list,
  className = "",
}: {
  list: any[];
  className?: string;
}) {
  const [isUpdate, setIsUpdate] = useState(false);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const onDelete = async (row: any) => {
    await apiDeleteProduct({ id: row.id });
    alert("Success");
    location.reload();
  };

  const onFillFormUpdate = (row: any) => {
    setIsUpdate(true);
    setTitle(row.title);
    setSubTitle(row.subTitle);
    setType(row.type);
    setImage(row.image);
    setId(row.id);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onSave = async () => {
    if (isUpdate) {
      await apiUpdateProduct({ title, subTitle, type, image, id });
    } else {
      await apiCreateProduct({ title, subTitle, type, image, id });
    }
    onClear();
    alert("Success");
  };

  const onClear = () => {
    setIsUpdate(false);
    setTitle("");
    setSubTitle("");
    setType("");
    setImage("");
    location.reload();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <div className="space-x-2">
          <span> title</span>
          <input
            className="border-b-cyan-900 border rounded px-2 py-1 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <span> subTitle</span>
          <input
            className="border-b-cyan-900 border rounded px-2 py-1 w-full"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <span>type</span>
          <input
            className="border-b-cyan-900 border rounded px-2 py-1 w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <span>image</span>
          <input
            className="border-b-cyan-900 border rounded px-2 py-1 w-full"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          onClick={onSave}
          className="bg-sky-800 text-white rounded px-4 py-2"
        >
          {isUpdate ? "Update" : "Create"}
        </button>
      </div>

      <table className="text-left table-fixed bg-gray-50 border border-b-cyan-900 rounded">
        <thead>
          <tr className="border border-b-cyan-900">
            <th className="px-4 py-2 border-r border-b-cyan-900">id</th>
            <th className="px-4 py-2 border-r border-b-cyan-900">title</th>
            <th className="px-4 py-2 border-r border-b-cyan-900">subTitle</th>
            <th className="px-4 py-2 border-r border-b-cyan-900">type</th>
            <th>image</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {list?.length &&
            list.map((item: any, index: number) => (
              <tr className="border border-b-cyan-900" key={index}>
                <td className="px-4 py-2 border-r border-b-cyan-900">
                  {item.id}
                </td>
                <td className="px-4 py-2 border-r border-b-cyan-900">
                  {item.title}
                </td>
                <td className="px-4 py-2 border-r border-b-cyan-900">
                  {item.subTitle}
                </td>
                <td className="px-4 py-2 border-r border-b-cyan-900">
                  {item.type}
                </td>
                <td className="px-4 py-2 border-r border-b-cyan-900">
                  {item.image}
                </td>
                <td className="px-4 py-2 border-r border-b-cyan-900 gap-2 flex">
                  <button
                    className="hover:text-cyan-800"
                    onClick={() => onFillFormUpdate(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="hover:text-cyan-800"
                    onClick={() => onDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
