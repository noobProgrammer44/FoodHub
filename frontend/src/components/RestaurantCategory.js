import MyList from "./MyList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const title = props?.data?.card?.card?.title;
  const category = props?.data?.card?.card?.categories;
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const handleClick = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Main Category Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
        <h2 className="text-xl font-bold flex items-center">
          <span className="mr-2">🍽️</span>
          {title}
        </h2>
      </div>

      {/* Subcategories */}
      <div className="divide-y divide-gray-100">
        {category?.map((data, index) => (
          <div key={index}>
            {/* Subcategory Header */}
            <div
              className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={() => handleClick(index)}
            >
              <div className="flex items-center">
                <span className="text-lg font-semibold text-gray-800">
                  {data.title}
                </span>
                <span className="ml-2 bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-medium">
                  {data.itemCards?.length || 0}
                </span>
              </div>

              <div
                className={`transform transition-transform duration-200 ${
                  openCategoryIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
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
                openCategoryIndex === index ? "max-h-none" : "max-h-0"
              }`}
            >
              {openCategoryIndex === index && (
                <div className="px-6 pb-6">
                  <MyList item={data.itemCards} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
