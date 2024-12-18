import React, { useState } from "react";

const FullCircleRotateTabber = () => {
  const [activeTab, setActiveTab] = useState("settings"); // Default active tab
  const tabs = [
    {
      id: "profile",
      label: "Profile",
      value: "1425 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      value: "3312 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id: "settings",
      label: "Settings",
      value: "3388 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Settings tab. Clicking another tab will toggle visibility.`,
    },
    {
      id: "contacts",
      label: "Contacts",
      value: "1425 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contacts tab. Clicking another tab will toggle visibility.`,
    },
    {
      id: "about",
      label: "About",
      value: "3312 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. About tab. Clicking another tab will toggle visibility.`,
    },
  ];

  const totalTabs = tabs.length;
  const centerTabIndex = Math.floor(totalTabs / 2);
  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

  // Calculate rotation angle for the full-circle layout
  const rotationAngle =
    (centerTabIndex - activeTabIndex) * (180 / (totalTabs - 1));
  const cssObject = {
    position: "absolute",
    width: "40%",
    right: "200px",
    top: "91px",
    padding: "10px",
    textAlign: "left",
  };
  return (
    <div
      className="flex bg-cover bg-center h-full w-full"
      style={{
        backgroundImage: `url('/assets/bulgarian-war.jpg')`,
      }}
    >
      <div className="relative -ml-[7%] mt-20">
        {/* Rotating Half Circle */}
        <div className="relative h-80 w-80 mb-20">
          <div
            className="relative h-80 w-80 border-2 border-gray-300 rounded-full transition-transform duration-500"
            style={{
              transform: `rotate(${rotationAngle ? rotationAngle : 10}deg)`,
            }}
          >
            {tabs.map((tab, index) => {
              const angle = (150 / (totalTabs - 1)) * index; // Evenly distribute tabs
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
                    style={{
                      transform: `translateX(-70%) rotate(-${
                        rotationAngle ? rotationAngle : 10
                      }deg)`,
                    }}
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
      <div className="flex-grow">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 rounded-lg bg-gray-50 ${
              activeTab === tab.id ? "block" : "hidden"
            }`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            style={cssObject}
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
