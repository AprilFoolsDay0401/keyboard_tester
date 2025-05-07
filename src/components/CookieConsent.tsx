"use client";

import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p className="mb-2 font-medium">🍪 We value your privacy</p>
          <p className="text-gray-300">
            We use cookies to make your experience better. You can choose to
            accept or decline them.
            <a
              href="/privacy"
              className="text-blue-400 hover:text-blue-300 ml-1 underline"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Accept all
          </button>
          <button
            onClick={handleDecline}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
