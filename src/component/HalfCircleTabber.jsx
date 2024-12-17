import React, { useState } from "react";

const FullCircleHalfDTabber = () => {
  const [activeTab, setActiveTab] = useState(3); // Center tab is active by default

  const tabs = [
    { id: 1, value: "1425 R.G.E" },
    { id: 2, value: "3312 R.G.E" },
    { id: 3, value: "3388 R.G.E" },
    { id: 4, value: "1425 R.G.E" },
    { id: 5, value: "3312 R.G.E" },
    { id: 6, value: "3388 R.G.E" },
  ];

  const totalTabs = tabs.length;
  const centerTabIndex = Math.floor(totalTabs / 2);
  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

  // Calculate the rotation for the full circle based on active tab
  const rotationAngle =
    (centerTabIndex - activeTabIndex) * (180 / (totalTabs - 1));

  return (
    <div className="relative h-64 w-64 mx-auto flex items-center justify-center">
      {/* Full Circle */}
      <div
        className="relative h-64 w-64 border-2 border-gray-300 rounded-full transition-transform duration-500"
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      >
        {/* Tab Indicators on Half Circle */}
        {tabs.map((tab, index) => {
          const angle = (180 / (totalTabs - 1)) * index; // Evenly distribute on the top half
          const isActive = activeTab === tab.id;

          // Trigonometric position on the top half of the circle
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
                  ? "bg-red-500 border-red-500"
                  : "bg-white border-gray-300"
              }`}
              style={positionStyle}
            >
              {/* Tab Labels */}
              <span
                className={`absolute top-8 text-xs ${
                  isActive ? "text-red-500" : "text-gray-400"
                }`}
                style={{ transform: "translateX(-50%)" }}
              >
                {tab.value}
              </span>
            </button>
          );
        })}
      </div>

      {/* Static Center Indicator */}
      <div className="absolute top-0 w-6 h-6 bg-red-500 rounded-full border-2 border-red-500"></div>
    </div>
  );
};

export default FullCircleHalfDTabber;
