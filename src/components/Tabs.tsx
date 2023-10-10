import React, { useState } from "react";

export interface ITab {
  id: string;
  name: string;
}

interface TabsProps {
  tabs: ITab[];
  onChanged?: (tab: ITab) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onChanged }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border-b border-[#65A69A]">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            className={`${
              activeTab === index
                ? "bg-[#65A69A] text-white"
                : "text-[#65A69A] hover:bg-blue-100"
            } flex-1 py-2 px-4 font-semibold focus:outline-none`}
            onClick={() => {
              setActiveTab(index);
              onChanged?.(tab);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
