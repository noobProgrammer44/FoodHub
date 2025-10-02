import { CDN_URL } from ".//..//utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  // Get delivery time from sla object
  const deliveryTime = sla?.deliveryTime || sla?.slaString || "30-35 mins";

  return (
    <div className="group relative m-3 w-[280px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative h-[180px] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        {/* Delivery Time Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-md">
          🚚 {deliveryTime}
        </div>

        {/* Rating Badge */}
        {avgRating && (
          <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md">
            <span>⭐</span>
            <span>{avgRating}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Restaurant Name */}
        <h3 className="font-bold text-lg text-gray-800 line-clamp-1 group-hover:text-orange-600 transition-colors">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 line-clamp-1">
          {cuisines?.join(", ")}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between pt-2">
          {/* Cost */}
          <div className="flex items-center space-x-1 text-gray-700">
            <span className="text-sm">💰</span>
            <span className="text-sm font-semibold">{costForTwo}</span>
          </div>

          {/* Order Button */}
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export const higherOrderComp = (RestaurantCard) => {
  return (props) => {
    let discountInfo = props.resData?.info?.aggregatedDiscountInfoV3;
    let headerName = discountInfo?.header;
    let subHeader = discountInfo?.subHeader;

    // Create discount text
    let discountText = "";
    if (headerName && headerName !== "ITEMS") {
      discountText = subHeader ? `${headerName} ${subHeader}` : headerName;
    }

    return (
      <div className="relative">
        {discountText && (
          <div className="absolute top-2 left-2 z-10">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg transform rotate-[-2deg] border-2 border-white">
              <div className="flex items-center space-x-1">
                <span>🎉</span>
                <span>{discountText}</span>
              </div>
            </div>
          </div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
