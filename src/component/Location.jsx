// Hooks
import { useState } from "react";

// Icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import usa1 from "../images/usa1.png";
import usa2 from "../images/usa2.png";
import usa3 from "../images/usa3.png";
import usa4 from "../images/usa4.png";
import "tiny-slider/dist/tiny-slider.css";

const Location = ({ tlIndex }) => {
  const handleClickMap = (locationName) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      locationName
    )}`;
    window.open(googleMapsUrl, "_blank"); // Open in a new tab
  };

  const [imageIndex, setImageIndex] = useState(0);
  const imagewisedata = [
    [
      {
        imagepath: usa1,
        country: "USA",
        name: "Battles of Lexington and Concord",
        description:
          "The first battles of the American War of Independence, which began on April 19, 1775. The shot heard round the world marked the start of the war.The first battles of the American War of Independence, which began on April 19, 1775. The shot heard round the world marked the start of the war.",
      },
      {
        imagepath: usa2,
        country: "USA",
        name: "Boston Tea Party",
        description:
          "On December 16, 1773, American patriots disguised as Mohawk Indians threw 342 chests of tea into Boston Harbor.The first battles of the American War of Independence, which began on April 19, 1775. The shot heard round the world marked the start of the war.",
      },
      {
        imagepath: usa3,
        country: "USA",
        name: "Continental Congress",
        description:
          "In 1774, the Continental Congress met to discuss independence from Britain. Thomas Jefferson was chosen to write the Declaration of Independence.The first battles of the American War of Independence, which began on April 19, 1775. The shot heard round the world marked the start of the war.",
      },
      {
        imagepath: usa4,
        country: "USA",
        name: "Battle of Bunker Hill",
        description:
          "The first major battle of the American Revolution, where the British won but lost over 40% of their men.The first battles of the American War of Independence, which began on April 19, 1775. The shot heard round the world marked the start of the war.",
      },
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagewisedata[tlIndex].length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagewisedata[tlIndex].length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="bg-black text-white py-4 md:py-10">
      {/* Wrapper */}
      <div className="ml-[100px]">
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold mb-6 font-urbanist">
          LOCATIONS
        </h2>

        {/* Content */}
        <div className="relative rounded-md">
          {/* Image Section */}
          <div className="relative m-h-[100%] max-w-[50%] overlay-hidden">
            <div className="relative w-full h-70 md:h-96 rounded-md">
              <div
                className="flex w-full h-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${imageIndex * 100}%)`,
                }}
              >
                {imagewisedata[tlIndex].map((item, index) => (
                  <img
                    key={index}
                    src={item.imagepath}
                    alt={`Location ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="font-urbanist absolute top-[30%] left-[97%] transform -translate-y-1/2 flex gap-4">
              <button
                onClick={handleNext}
                className="w-[50px] h-[50px] rounded-full bg-pink-500 flex items-center justify-center text-white shadow-md"
              >
                <FaArrowRight />
              </button>
            </div>
            <div className="font-urbanist absolute top-[15%] left-[97%] transform -translate-y-1/2 flex gap-4">
              <button
                onClick={handlePrev}
                className="w-[50px] h-[50px] rounded-full bg-pink-500 flex items-center justify-center text-white shadow-md"
              >
                <FaArrowLeft />
              </button>
            </div>
          </div>

          {/* Text Section */}
          <div
            style={{ backgroundColor: "rgb(77, 115, 182)" }}
            className="font-urbanist ml-[40%] mt-[-10%] md:mt-[-2%] p-6 md:p-12 md:py-[100px] rounded-l-[25px]"
          >
            {imagewisedata[tlIndex][currentIndex] ? (
              <h3 className="font-urbanist text-lg md:text-2xl font-bold mb-4 rounded-md">
                {imagewisedata[tlIndex][currentIndex].name}
              </h3>
            ) : (
              <h3></h3>
            )}
            {imagewisedata[tlIndex][currentIndex] ? (
              <p className="font-urbanist text-sm md:text-base leading-relaxed rounded-md">
                {imagewisedata[tlIndex][currentIndex].description}
              </p>
            ) : (
              <p></p>
            )}
            <div className="w-full flex justify-end">
              <div className="font-urbanist w-[400px] h-[150px] bg-[#373737] rounded-l-[25px] relative top-[-294px] flex justify-left right-[-47px]">
                <button
                  onClick={() =>
                    handleClickMap(imagewisedata[tlIndex][currentIndex].country)
                  }
                  className="ml-[80px] font-urbanist bg-gray-800 border-2 border-pink-500 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white transition my-auto"
                >
                  View Map
                </button>
              </div>
            </div>
          </div>

          {/* View Map Button */}
        </div>
      </div>
    </div>
  );
};

export default Location;
