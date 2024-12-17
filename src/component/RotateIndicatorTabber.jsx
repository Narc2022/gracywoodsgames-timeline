import React, { useState } from "react";

const RotateIndicatorTabber = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      content:
        "This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next.",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      content:
        "This is some placeholder content the Dashboard tab's associated content. Clicking another tab will toggle the visibility of this one for the next.",
    },
    {
      id: "settings",
      label: "Settings",
      content:
        "This is some placeholder content the Settings tab's associated content. Clicking another tab will toggle the visibility of this one for the next.",
    },
    {
      id: "contacts",
      label: "Contacts",
      content:
        "This is some placeholder content the Contacts tab's associated content. Clicking another tab will toggle the visibility of this one for the next.",
    },
  ];

  return (
    <div className="flex">
      <div className="relative w-64 h-32 overflow-hidden rounded-t-full border-b-4 border-gray-200 dark:border-gray-700">
        {/* Tab Buttons */}
        <ul
          className="absolute flex justify-between w-full top-6"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="flex-1 text-center" role="presentation">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`p-2 w-16 h-16 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white translate-y-[-10px] shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === tab.id ? "block" : "hidden"
            }`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tab.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotateIndicatorTabber;
