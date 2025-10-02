import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1
            className={`text-5xl font-bold mb-4 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Get in Touch
          </h1>
          <p
            className={`text-xl opacity-90 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            {/* Contact Information */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="relative h-full">
                {/* Background Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-red-900/70 to-pink-900/80"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between text-white">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">
                      Contact Information
                    </h2>
                    <p className="text-lg opacity-90 mb-8">
                      Ready to order or have questions? We're here to help make
                      your food experience amazing!
                    </p>
                  </div>

                  {/* Contact Details Card */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-gray-800">
                    <div className="space-y-4">
                      {/* Phone */}
                      <div className="flex items-center group hover:scale-105 transition-transform duration-200">
                        <div className="bg-orange-500 p-3 rounded-full mr-4 group-hover:bg-orange-600 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Phone</h3>
                          <p className="text-gray-600">+91 123 456 7890</p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-center group hover:scale-105 transition-transform duration-200">
                        <div className="bg-red-500 p-3 rounded-full mr-4 group-hover:bg-red-600 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Email</h3>
                          <p className="text-gray-600">support@foodhub.com</p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start group hover:scale-105 transition-transform duration-200">
                        <div className="bg-pink-500 p-3 rounded-full mr-4 mt-1 group-hover:bg-pink-600 transition-colors">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                              stroke="white"
                              strokeWidth="2"
                            />
                            <path
                              d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                              stroke="white"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            Address
                          </h3>
                          <p className="text-gray-600">
                            Mumbai Food Street, Bandra West, Mumbai 400050,
                            India
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Follow us on
                      </h3>
                      <div className="flex space-x-4">
                        {["📘", "📷", "🐦", "📌"].map((emoji, index) => (
                          <button
                            key={index}
                            className="w-10 h-10 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Send Us A Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred method of communication
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 transition-all duration-200 ${
                            formData.preferredContact === "email"
                              ? "border-orange-500 bg-orange-500"
                              : "border-gray-300 group-hover:border-orange-300"
                          }`}
                        >
                          {formData.preferredContact === "email" && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                          Email
                        </span>
                      </label>

                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 transition-all duration-200 ${
                            formData.preferredContact === "phone"
                              ? "border-orange-500 bg-orange-500"
                              : "border-gray-300 group-hover:border-orange-300"
                          }`}
                        >
                          {formData.preferredContact === "phone" && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                          Phone
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-200 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-orange-800 text-center">
                    <strong>Quick Response:</strong> We typically respond to
                    messages within 2-4 hours during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "What are your delivery hours?",
                a: "We deliver from 9 AM to 11 PM, 7 days a week.",
              },
              {
                q: "Do you have minimum order requirements?",
                a: "Minimum order value is ₹150 for free delivery.",
              },
              {
                q: "How can I track my order?",
                a: "You'll receive real-time updates via SMS and app notifications.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major cards, UPI, wallets, and cash on delivery.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
