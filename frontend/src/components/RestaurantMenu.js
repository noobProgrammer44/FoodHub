// Enhanced RestaurantMenu.js
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RecommendedMenu from "./RecommendedMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatings,
    areaName,
    sla,
  } = resInfo?.cards[2]?.card?.card.info;

  const testData = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const categories = testData.filter(
    (res) =>
      res.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
  const recommended = testData.filter(
    (res) =>
      res.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
      res.card.card.title === "Recommended"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Restaurant Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {name}
              </h1>
              <p className="text-gray-600 text-lg mb-4">
                {cuisines?.join(" • ")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {avgRating && (
                  <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full">
                    <span className="mr-1">⭐</span>
                    <span className="font-semibold">{avgRating}</span>
                    {totalRatings && (
                      <span className="ml-1 opacity-90">({totalRatings}+)</span>
                    )}
                  </div>
                )}
                {sla?.deliveryTime && (
                  <div className="flex items-center text-gray-600">
                    <span className="mr-1">🚚</span>
                    <span>{sla.deliveryTime} mins</span>
                  </div>
                )}
                {costForTwoMessage && (
                  <div className="flex items-center text-gray-600">
                    <span className="mr-1">💰</span>
                    <span>{costForTwoMessage}</span>
                  </div>
                )}
                {areaName && (
                  <div className="flex items-center text-gray-600">
                    <span className="mr-1">📍</span>
                    <span>{areaName}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {recommended.length === 0 && categories.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Temporarily Unavailable
              </h3>
              <p className="text-gray-600 mb-6">
                Take a short break, we're working on it!
              </p>
              <div className="animate-pulse flex justify-center">
                <div className="h-2 w-32 bg-orange-200 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Recommended Items */}
            {recommended.map((category, index) => (
              <RecommendedMenu key={index} data={category} />
            ))}

            {/* Categories */}
            {categories.map((category, index) => (
              <RestaurantCategory key={index} data={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
