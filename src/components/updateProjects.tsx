"use client";

import React, { useState } from "react";
import {
  apiCreateProject,
  apiDeleteProject,
  apiUpdateProject,
} from "../lib/api-request";

export default function UpdateProjects({
  list,
  className = "",
}: {
  list: any[];
  className?: string;
}) {
  const [isUpdate, setIsUpdate] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const onDelete = async (row: any) => {
    await apiDeleteProject({ id: row.id });
    alert("Success");
    location.reload();
  };

  const onFillFormUpdate = (row: any) => {
    setIsUpdate(true);
    setName(row.title);
    setDescription(row.subTitle);
    setType(row.type);
    setImage(row.image);
    setId(row.id);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onSave = async () => {
    if (isUpdate) {
      await apiUpdateProject({ name, description, type, image, id });
    } else {
      await apiCreateProject({ name, description, type, image, id });
    }
    onClear();
    alert("Success");
  };

  const onClear = () => {
    setIsUpdate(false);
    setName("");
    setDescription("");
    setType("");
    setImage("");
    location.reload();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <div className="space-x-2">
          <span>name</span>
          <input
            className="border-b-cyan-900 border rounded px-2 py-1 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <span>description</span>
          <input
            className="border-b-cyan-900 border rounded px-2 py-1 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            <th className="px-4 py-2 border-r border-b-cyan-900">name</th>
            <th className="px-4 py-2 border-r border-b-cyan-900">
              description
            </th>
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
                  {item.name}
                </td>
                <td className="px-4 py-2 border-r border-b-cyan-900">
                  {item.description}
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
