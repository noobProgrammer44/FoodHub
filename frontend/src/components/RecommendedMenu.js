// Enhanced RecommendedMenu.js
import { useState } from "react";
import MyList from "./MyList";

const RecommendedMenu = (props) => {
  const title = props?.data?.card?.card?.title;
  const itemsLength = props?.data?.card?.card?.itemCards?.length || 0;
  const items = props?.data?.card?.card?.itemCards;
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div
        className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200 bg-gradient-to-r from-green-50 to-emerald-50"
        onClick={handleClick}
      >
        <div className="flex items-center">
          <div className="bg-green-500 p-2 rounded-full mr-3">
            <span className="text-white text-lg">👨‍🍳</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-green-600 text-sm font-medium">
              {itemsLength} item{itemsLength !== 1 ? "s" : ""} • Chef's Special
            </p>
          </div>
        </div>

        <div
          className={`transform transition-transform duration-200 ${
            showItem ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {/* Accordion Body */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showItem ? "max-h-none border-t border-gray-100" : "max-h-0"
        }`}
      >
        {showItem && (
          <div className="p-6">
            <MyList item={items} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedMenu;
