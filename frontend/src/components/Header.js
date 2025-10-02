import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
  faUser,
  faHome,
  faInfoCircle,
  faPhone,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedUser } = useContext(UserContext);
  const selectedItems = useSelector((store) => store.cart.items);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAuthClick = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-200"
                  src={LOGO_URL}
                  alt="Namaste React Logo"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  FoodHub
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Food Delivery</p>
              </div>
            </Link>
          </div>

          {/* Online Status - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-full">
            <div
              className={`w-2 h-2 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <span className="text-sm font-medium text-gray-700">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 group"
            >
              <FontAwesomeIcon
                icon={faHome}
                className="w-4 h-4 group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Home</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 group"
            >
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="w-4 h-4 group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">About</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 group"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="w-4 h-4 group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Contact</span>
            </Link>

            <Link
              to="/grocery"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 group"
            >
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className="w-4 h-4 group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Grocery</span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart - Desktop & Mobile */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 group"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="w-6 h-6 group-hover:scale-110 transition-transform"
              />
              {selectedItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {selectedItems.length}
                </span>
              )}
            </Link>

            {/* User Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {loggedUser && (
                <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-full">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4 text-orange-500"
                  />
                  <span className="text-sm font-medium text-gray-700 max-w-20 truncate">
                    {loggedUser}
                  </span>
                </div>
              )}

              {/* Login/Logout Button - Desktop */}
              <button
                onClick={handleAuthClick}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg ${
                  btnName === "Login"
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {btnName}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-100">
            {/* Online Status - Mobile */}
            <div className="flex items-center justify-center space-x-2 bg-gray-50 py-2 rounded-lg">
              <div
                className={`w-2 h-2 rounded-full ${
                  onlineStatus ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                Status: {onlineStatus ? "Online" : "Offline"}
              </span>
            </div>

            {/* User Info - Mobile */}
            {loggedUser && (
              <div className="flex items-center justify-center space-x-2 bg-orange-50 py-2 rounded-lg">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-4 h-4 text-orange-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Welcome, {loggedUser}!
                </span>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <nav className="space-y-3">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center justify-center space-x-3 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
              >
                <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Link>

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="flex items-center justify-center space-x-3 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="w-5 h-5" />
                <span className="font-medium">About</span>
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-center space-x-3 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
              >
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                <span className="font-medium">Contact</span>
              </Link>

              <Link
                to="/grocery"
                onClick={closeMobileMenu}
                className="flex items-center justify-center space-x-3 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
              >
                <FontAwesomeIcon icon={faShoppingBasket} className="w-5 h-5" />
                <span className="font-medium">Grocery</span>
              </Link>
            </nav>

            {/* Login/Logout Button - Mobile */}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={handleAuthClick}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  btnName === "Login"
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {btnName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
