import React, { useState } from "react";
import bulgarian from "../assets/bulgarian-war.jpg";
import bulgarian2 from "../assets/bulgarian-war2.jpg";
import bulgarian3 from "../assets/bulgarian-war3.jpg";
import bulgarian4 from "../assets/bulgarian-war4.jpg";
import bulgarian5 from "../assets/bulgarian-war5.jpg";

const FullCircleRotateTabber = () => {
  const [activeTab, setActiveTab] = useState("3");
  const [activeImg, setActiveImg] = useState(bulgarian3);
  const tabs = [
    {
      id: "1",
      label: "US",
      value: "1425 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\n
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      img: bulgarian,
    },
    {
      id: "2",
      label: "UK",
      value: "3312 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\n
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      img: bulgarian2,
    },
    {
      id: "3",
      label: "India",
      value: "3388 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text of the printing and typesetting industry.`,
      img: bulgarian3,
    },
    {
      id: "4",
      label: "China",
      value: "1425 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text of the printing and typesetting industry.`,
      img: bulgarian4,
    },
    {
      id: "5",
      label: "Japan",
      value: "3312 R.G.E",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n
        Lorem Ipsum has been the industry's standard dummy text of the printing and typesetting industry.`,
      img: bulgarian5,
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
      <p
        key={index}
        className="font-urbanist text-sm md:text-base leading-relaxed rounded-md"
      >
        {text}
      </p>
    ));
  };

  const onIndicatorClick = (tabId) => {
    setActiveTab(tabId);
    const selectedTab = tabs.find((tab) => tab.id === tabId);
    setActiveImg(selectedTab.img);
  };

  return (
    <>
      <div className="bg-black text-white py-4 md:py-10">
        {/* Wrapper */}
        <div className="max-w-6xl mx-[100px]">
          <h2 class="text-xl md:text-3xl font-bold mb-6 font-urbanist">
            {" "}
            TIMELINE
          </h2>
        </div>
      </div>
      <div
        className="flex bg-cover bg-center h-full w-full border-t-[3px] border-b-[3px] border-gray-300"
        style={{
          backgroundImage: `url(${activeImg})`,
        }}
      >
        <div className="relative -ml-[15%] mt-[50px] overflow-hidden">
          {/* Rotating Half Circle */}
          <div className="relative h-[480px] w-[520px] mb-[50px]">
            <div
              className="relative h-[480px] w-[480px] border-[3px] border-gray-300 rounded-full transition-transform duration-500 mt-3"
              style={{
                transform: `rotate(${rotationAngle ? rotationAngle : 0}deg)`,
              }}
            >
              {tabs.map((tab, index) => {
                const angle = (180 / (totalTabs - 1)) * index; // Evenly distribute tabs
                const isActive = activeTab === tab.id;

                const positionStyle = {
                  top: `${50 - Math.cos((angle * Math.PI) / 180) * 50}%`,
                  left: `${50 + Math.sin((angle * Math.PI) / 180) * 50}%`,
                };

                const textArray = tab.value.split(" ");
                console.log("rotationAngle", rotationAngle);
                console.log("index", index);
                return (
                  <button
                    key={tab.id}
                    onClick={() => onIndicatorClick(tab.id)}
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
                      }  ${
                        index === 0 && rotationAngle === 0
                          ? "top-5 left-[40px]"
                          : ""
                      } ${
                        index === 4 && rotationAngle === 0
                          ? "-top-6 left-[40px]"
                          : ""
                      } text-xs w-[100px] text-center  text-white`}
                      style={{
                        transform: `rotate(${
                          rotationAngle ? -rotationAngle : 0
                        }deg) translateX(-50%)`,
                        top: `${
                          index === 0 && rotationAngle === 0
                            ? "20px"
                            : index === 4 && rotationAngle === 0
                            ? "-24px"
                            : rotationAngle < 0
                            ? "-10px"
                            : 0
                        }`,
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
              <h3 className="text-[26px] text-white  font-urbanist text-lg md:text-2xl font-bold mb-4 rounded-md">
                {tab.label}
              </h3>

              {splitContentIntoParagraphs(tab.content)}
              <br />
              {splitContentIntoParagraphs(tab.content)}
              <br />
              {splitContentIntoParagraphs(tab.content)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FullCircleRotateTabber;
