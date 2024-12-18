import React, { useState } from "react";

const FullCircleRotateTabber = () => {
  const [activeTab, setActiveTab] = useState("3"); // Default active tab
  const tabs = [
    {
      id: "1",
      label: "Profile",
      value: "1425 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\n
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: "2",
      label: "Dashboard",
      value: "3312 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\n
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: "3",
      label: "Settings",
      value: "3388 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text of the printing and typesetting industry.`,
    },
    {
      id: "4",
      label: "Contacts",
      value: "1425 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text of the printing and typesetting industry.`,
    },
    {
      id: "5",
      label: "About",
      value: "3312 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text of the printing and typesetting industry.`,
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
    minHeight: "400px",
    height: "max-content",
    right: "200px",
    top: "180px",
    padding: "10px",
    textAlign: "left",
    color: "white",
  };

  // Function to split content into an array of paragraphs with blank lines
  const splitContentIntoParagraphs = (content) => {
    const paragraphs = content.split("\n\n");

    return paragraphs.map((text, index) => (
      <p key={index} className="text-sm text-white">
        {text}
      </p>
    ));
  };

  return (
    <>
      <h1 className="bg-black text-white p-7 pl-10 font-bold text-[26px]">
        TIMELINE
      </h1>
      <div
        className="flex bg-cover bg-center h-full w-full border-t-[3px] border-b-[3px] border-gray-300"
        style={{
          backgroundImage: `url('/assets/bulgarian-war.jpg')`,
        }}
      >
        <div className="relative  mt-[50px] overflow-hidden">
          {/* Rotating Half Circle */}
          <div className="relative h-[480px] w-[520px] mb-[50px]">
            <div
              className="relative h-[480px] w-[480px] border-[3px] border-gray-300 rounded-full transition-transform duration-500"
              style={{
                transform: `rotate(${rotationAngle ? rotationAngle : 30}deg)`,
              }}
            >
              {tabs.map((tab, index) => {
                const angle = (180 / (totalTabs - 1)) * index; // Evenly distribute tabs
                const isActive = activeTab === tab.id;

                const positionStyle = {
                  top: `${50 - Math.cos((angle * Math.PI) / 180) * 50}%`,
                  left: `${50 + Math.sin((angle * Math.PI) / 180) * 50}%`,
                };
                console.log("rotationAngle", rotationAngle);

                console.log("tab.value.split()", tab.value.split(" "));
                const textArray = tab.value.split(" ");

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`absolute w-4 h-4 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      isActive
                        ? "bg-pink-600 border-gray-300 w-5 h-5"
                        : "bg-white "
                    }`}
                    style={positionStyle}
                  >
                    <span
                      className={`absolute top-4 ${
                        rotationAngle
                          ? " top-[2px] left-[-50px] "
                          : " top-[4px] left-[-43px]"
                      } ${
                        index === 4 && rotationAngle === 0 ? "top-[-10px]" : ""
                      } text-xs w-[100px] text-center ${
                        isActive ? "text-blue-600" : "text-gray-400"
                      }`}
                      style={{
                        transform: `rotate(${
                          rotationAngle ? -rotationAngle : -30
                        }deg) translateX(-50%)`,
                      }}
                    >
                      <span className="font-bold text-[20px]">
                        {textArray[0]}
                      </span>
                      &nbsp;
                      <span>{textArray[1]}</span>
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
              className={`p-4 rounded-lg text-white ${
                activeTab === tab.id ? "block" : "hidden"
              }`}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
              style={cssObject}
            >
              <h3 className="text-lg font-bold text-[26px] text-white mb-2">
                {tab.label}
              </h3>
              {splitContentIntoParagraphs(tab.content)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FullCircleRotateTabber;
