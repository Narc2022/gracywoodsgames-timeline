import React from "react";

const SlideItem = ({ title, content }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md text-center h-[300px] ">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
};

export default SlideItem;
