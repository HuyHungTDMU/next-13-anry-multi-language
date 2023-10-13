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
    <div className="border-b border-[#40605be6]">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            className={`${
              activeTab === index
                ? "bg-[#40605be6] text-white"
                : "text-[#40605be6] hover:bg-blue-100"
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
