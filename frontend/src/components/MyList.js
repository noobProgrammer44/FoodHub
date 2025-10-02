// Enhanced MyList.js
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faStar,
  faLeaf,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";

const MyList = ({ item, isCart = false }) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    item?.forEach((eachItem) => {
      const price = eachItem?.card?.info?.defaultPrice ?? 200;
      newTotal += price <= 200 ? price : price / 100;
    });
    setTotal(newTotal);
  }, [item]);

  const addToCart = (item) => {
    dispatch(addItem(item));
    toast.success("Item added to cart! 🎉", {
      position: "top-center",
      transition: Slide,
      autoClose: 2000,
      style: {
        background: "linear-gradient(135deg, #10B981, #059669)",
        color: "white",
        borderRadius: "12px",
      },
    });
  };

  const removeFromCart = (item) => {
    dispatch(removeItem(item));
    toast.error("Item removed from cart", {
      position: "top-center",
      transition: Slide,
      autoClose: 1000,
    });
  };

  const makePayment = (token) => {
    const body = { token, total };
    const headers = { "Content-Type": "application/json" };

    return fetch("http://localhost:1234/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
      })
      .catch((err) => console.log(err));
  };

  const getVegIcon = (isVeg) => {
    return isVeg ? (
      <div className="flex items-center">
        <div className="w-4 h-4 border-2 border-green-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <FontAwesomeIcon
          icon={faLeaf}
          className="w-3 h-3 text-green-500 ml-1"
        />
      </div>
    ) : (
      <div className="flex items-center">
        <div className="w-4 h-4 border-2 border-red-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <FontAwesomeIcon icon={faFire} className="w-3 h-3 text-red-500 ml-1" />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <ToastContainer />
      {item?.map((eachItem) => {
        const name = eachItem?.card?.info?.name;
        const price = eachItem?.card?.info?.defaultPrice ?? 200;
        const finalPrice = eachItem?.card?.info?.finalPrice || price;
        const description = eachItem?.card?.info?.description ?? "";
        const imgId = eachItem?.card?.info?.imageId;
        const ratings = eachItem?.card?.info?.ratings?.aggregatedRating;
        const isVeg =
          eachItem?.card?.info?.itemAttribute?.vegClassifier === "VEG";
        const ribbon = eachItem?.card?.info?.ribbon;

        return (
          <div
            key={eachItem?.card?.info?.id || name}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <div className="flex p-6">
              {/* Remove button for cart */}
              {isCart && (
                <button
                  onClick={() => removeFromCart(eachItem)}
                  className="absolute top-2 left-2 text-red-500 hover:text-red-700 hover:scale-110 transition-all duration-200 bg-white rounded-full p-1 shadow-md"
                >
                  <FontAwesomeIcon icon={faMinusCircle} className="w-5 h-5" />
                </button>
              )}

              {/* Content */}
              <div className="flex-1 pr-4">
                {/* Veg/Non-veg indicator and ribbon */}
                <div className="flex items-center justify-between mb-3">
                  {getVegIcon(isVeg)}
                  {ribbon?.text && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {ribbon.text}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {name}
                </h3>

                {/* Price */}
                <div className="flex items-center mb-3">
                  <span className="text-lg font-bold text-gray-800">
                    ₹{price <= 200 ? price : Math.floor(price / 100)}
                  </span>
                  {finalPrice !== price && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ₹{Math.floor(finalPrice / 100)}
                    </span>
                  )}
                </div>

                {/* Rating */}
                {ratings?.rating && (
                  <div className="flex items-center mb-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="w-4 h-4 text-yellow-400 mr-1"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {ratings.rating} ({ratings.ratingCountV2})
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>

              {/* Image and Add Button */}
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md">
                  {imgId ? (
                    <img
                      src={`${CDN_URL}${imgId}`}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🍽️</span>
                    </div>
                  )}
                </div>

                {/* Add Button */}
                <button
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border-2 border-orange-500 text-orange-500 font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-105"
                  onClick={() => addToCart(eachItem)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Checkout Section */}
      {isCart && item?.length > 0 && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">Order Summary</h3>
              <p className="text-blue-100">Total: ₹{total.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-100 text-sm">Items: {item.length}</p>
            </div>
          </div>

          <StripeCheckout
            stripeKey="pk_test_51Pv2yJ103ildsH4oDPK3W5dvmzlHM0pCfbKURYXMCmmrJX99da070g2cLGVA14SpsU3tyw1X6ZLkCT7k3yeF6YHA00JrqUzipf"
            token={makePayment}
            name="Namaste Food Delivery"
            amount={total * 100 * 0.012}
            description="Order payment"
            image={CDN_URL}
          >
            <button className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              🚀 Proceed to Checkout
            </button>
          </StripeCheckout>
        </div>
      )}
    </div>
  );
};

export default MyList;
