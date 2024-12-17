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
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 ">
        <ul className="-mb-px text-sm font-medium text-center" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? "text-blue-600 border-blue-600"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
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
