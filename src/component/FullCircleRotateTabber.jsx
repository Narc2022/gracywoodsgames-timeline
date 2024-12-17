import React, { useState } from "react";

const FullCircleRotateTabber = () => {
  const [activeTab, setActiveTab] = useState("profile"); // Default active tab
  const tabs = [
    {
      id: "profile",
      label: "Profile",
      value: "1425 R.G.E",
      content:
        "This is some placeholder content for the Profile tab. Clicking another tab will toggle visibility.",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      value: "3312 R.G.E",
      content:
        "This is some placeholder content for the Dashboard tab. Clicking another tab will toggle visibility.",
    },
    {
      id: "settings",
      label: "Settings",
      value: "3388 R.G.E",
      content:
        "This is some placeholder content for the Settings tab. Clicking another tab will toggle visibility.",
    },
    {
      id: "contacts",
      label: "Contacts",
      value: "1425 R.G.E",
      content:
        "This is some placeholder content for the Contacts tab. Clicking another tab will toggle visibility.",
    },
    {
      id: "about",
      label: "About",
      value: "3312 R.G.E",
      content:
        "This is some placeholder content for the About tab. Clicking another tab will toggle visibility.",
    },
  ];

  const totalTabs = tabs.length;
  const centerTabIndex = Math.floor(totalTabs / 2);
  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

  // Calculate rotation angle for the full-circle layout
  const rotationAngle =
    (centerTabIndex - activeTabIndex) * (180 / (totalTabs - 1));

  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        {/* Rotating Half Circle */}
        <div className="relative h-64 w-64 mb-8">
          <div
            className="relative h-64 w-64 border-2 border-gray-300 rounded-full transition-transform duration-500"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
            {tabs.map((tab, index) => {
              const angle = (180 / (totalTabs - 1)) * index; // Evenly distribute tabs
              const isActive = activeTab === tab.id;

              const positionStyle = {
                top: `${50 - Math.cos((angle * Math.PI) / 180) * 50}%`,
                left: `${50 + Math.sin((angle * Math.PI) / 180) * 50}%`,
              };

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`absolute w-6 h-6 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 border-blue-600"
                      : "bg-white border-gray-300"
                  }`}
                  style={positionStyle}
                >
                  <span
                    className={`absolute top-8 text-xs ${
                      isActive ? "text-blue-600" : "text-gray-400"
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                  >
                    {tab.value}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
      </div>
      <div className="w-64">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 rounded-lg bg-gray-50 ${
              activeTab === tab.id ? "block" : "hidden"
            }`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {tab.label}
            </h3>
            <p className="text-sm text-gray-600">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullCircleRotateTabber;
