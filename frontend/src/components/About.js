import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/Context";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    restaurants: 0,
    orders: 0,
    cuisines: 0,
    deliveryTime: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(200, "restaurants");
      animateCounter(10000, "orders");
      animateCounter(50, "cuisines");
      animateCounter(35, "deliveryTime");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
            alt="Delicious food spread"
            className="w-full h-full object-cover scale-110 animate-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-red-900/70 to-pink-900/80"></div>
        </div>

        {/* Floating food elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl animate-bounce delay-100">
            🍕
          </div>
          <div className="absolute top-40 right-20 text-5xl animate-bounce delay-300">
            🍔
          </div>
          <div className="absolute bottom-40 left-20 text-4xl animate-bounce delay-500">
            🍜
          </div>
          <div className="absolute bottom-20 right-40 text-5xl animate-bounce delay-700">
            🍰
          </div>
          <div className="absolute top-60 left-1/2 text-3xl animate-bounce delay-1000">
            🥗
          </div>
        </div>

        {/* Main content */}
        <div
          className={`relative z-10 text-center px-6 max-w-4xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              FoodHub
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Where every meal is a celebration, and every delivery brings joy to
            your doorstep
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🍽️</span>
              Order Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
            <Link
              to="/contact"
              className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 border border-white/20"
            >
              <span className="mr-2">💬</span>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a simple mission: to connect food lovers with their
                favorite restaurants and bring delicious meals to every
                doorstep. What started as a small idea has grown into a platform
                serving thousands of happy customers daily.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe food is more than sustenance—it's about bringing
                people together, creating memories, and celebrating life's
                special moments, one meal at a time.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Under 30 minutes</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl mb-2">🌟</div>
                  <h3 className="font-semibold text-gray-800">Quality Food</h3>
                  <p className="text-sm text-gray-600">Fresh & delicious</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our kitchen"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg animate-pulse">
                <span className="text-2xl">👨‍🍳</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-200">
                {counters.restaurants}+
              </div>
              <p className="text-orange-100">Partner Restaurants</p>
              <div className="text-3xl mt-2">🏪</div>
            </div>

            <div className="text-center group">
              <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-200">
                {counters.orders.toLocaleString()}+
              </div>
              <p className="text-orange-100">Happy Orders</p>
              <div className="text-3xl mt-2">📦</div>
            </div>

            <div className="text-center group">
              <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-200">
                {counters.cuisines}+
              </div>
              <p className="text-orange-100">Cuisines Available</p>
              <div className="text-3xl mt-2">🌍</div>
            </div>

            <div className="text-center group">
              <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-200">
                {counters.deliveryTime}
              </div>
              <p className="text-orange-100">Avg. Delivery (mins)</p>
              <div className="text-3xl mt-2">⏰</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Lightning Fast",
                description:
                  "Get your food delivered in record time with our optimized delivery network",
              },
              {
                icon: "🔒",
                title: "Secure Payments",
                description:
                  "Your transactions are protected with industry-leading security measures",
              },
              {
                icon: "📱",
                title: "Easy to Use",
                description:
                  "Intuitive interface makes ordering your favorite food a breeze",
              },
              {
                icon: "🎯",
                title: "Accurate Tracking",
                description:
                  "Track your order in real-time from kitchen to your doorstep",
              },
              {
                icon: "⭐",
                title: "Quality Assured",
                description:
                  "We partner only with restaurants that meet our high quality standards",
              },
              {
                icon: "💝",
                title: "Great Offers",
                description:
                  "Enjoy exclusive discounts and deals on your favorite restaurants",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Best?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers and start your food journey
            with us today!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Ordering Now
            </Link>
            <Link
              to="/grocery"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 border border-white/20"
            >
              Explore Grocery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
