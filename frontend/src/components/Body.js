import RestaurantCard, { higherOrderComp } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/Context";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setFilteredRestaurant(listofRestaurant);
    }
  }, [searchText, listofRestaurant]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      setlistofRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    const filteredRestaurant = listofRestaurant.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleTopRated = () => {
    const filteredList = listofRestaurant.filter((res) => {
      return res.info.avgRating > 4.2;
    });
    setFilteredRestaurant(filteredList);
    setActiveFilter("topRated");
  };

  const handleFastDelivery = () => {
    const filteredList = listofRestaurant.filter((res) => {
      const deliveryTime = res.info?.sla?.deliveryTime || 60;
      return deliveryTime <= 30;
    });
    setFilteredRestaurant(filteredList);
    setActiveFilter("fastDelivery");
  };

  const handleClearFilters = () => {
    setFilteredRestaurant(listofRestaurant);
    setActiveFilter("");
    setSearchText("");
  };

  const HigherResCard = higherOrderComp(RestaurantCard);

  if (onlineStatus === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
          <div className="text-6xl mb-4">📶</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            You're Offline
          </h1>
          <p className="text-gray-600">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );
  }

  if (listofRestaurant?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hungry? We've got you covered! 🍕
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Discover amazing restaurants near you
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <div className="flex-1 relative">
                <input
                  type="text"
                  className="w-full px-6 py-4 text-gray-800 placeholder-gray-500 rounded-xl border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search for restaurants, cuisines..."
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
              <button
                className="bg-white text-orange-500 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                  activeFilter === "topRated"
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={handleTopRated}
              >
                ⭐ Top Rated (4.2+)
              </button>

              <button
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                  activeFilter === "fastDelivery"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={handleFastDelivery}
              >
                🚀 Fast Delivery (≤30 mins)
              </button>

              {(activeFilter || searchText) && (
                <button
                  className="px-6 py-3 rounded-full font-semibold bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200 transform hover:scale-105"
                  onClick={handleClearFilters}
                >
                  ✕ Clear Filters
                </button>
              )}
            </div>

            {/* User Input */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  className="pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50"
                  placeholder="Your name..."
                  value={loggedUser}
                  maxLength={30}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  👤
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {searchText || activeFilter
                ? "Search Results"
                : "All Restaurants"}
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredRestaurant?.length} restaurant
              {filteredRestaurant?.length !== 1 ? "s" : ""} found
              {searchText && ` for "${searchText}"`}
            </p>
          </div>

          {/* Sort Options */}
          {/* <div className="hidden sm:block">
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <option>Sort by: Relevance</option>
              <option>Delivery Time</option>
              <option>Rating</option>
              <option>Cost: Low to High</option>
              <option>Cost: High to Low</option>
            </select>
          </div> */}
        </div>

        {/* Restaurant Grid */}
        {filteredRestaurant?.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No restaurants found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={handleClearFilters}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {filteredRestaurant?.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
                className="transform transition-all duration-200 hover:scale-105"
              >
                {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
                  <HigherResCard resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-110 z-20"
        title="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Body;
