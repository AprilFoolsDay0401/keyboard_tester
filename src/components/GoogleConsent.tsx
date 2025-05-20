"use client";

import { useEffect, useState } from "react";

type ConsentSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleConsent() {
  const [showConsent, setShowConsent] = useState<null | boolean>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({
    necessary: true, // 필수 쿠키는 항상 true
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // 쿠키 체크: 이미 동의/거부/설정이 있으면 배너 숨김
  useEffect(() => {
    if (typeof document !== "undefined") {
      const cookies = document.cookie;
      if (
        cookies.includes("consent=accepted") ||
        cookies.includes("consent_settings=")
      ) {
        setShowConsent(false);
      } else {
        setShowConsent(true);
      }
    }
  }, []);

  const handleConsent = () => {
    // 모든 쿠키 허용
    document.cookie = "consent=accepted; max-age=31536000; path=/";
    setShowConsent(false);
  };

  const handleDeny = () => {
    // 필수 쿠키만 허용
    document.cookie = "consent=denied; max-age=31536000; path=/";
    setShowConsent(false);
  };

  const handleManage = () => {
    setShowSettings(true);
  };

  const handleSaveSettings = () => {
    // 설정 저장
    document.cookie = `consent_settings=${JSON.stringify(
      settings
    )}; max-age=31536000; path=/`;
    setShowConsent(false);
  };

  const handleToggleSetting = (key: keyof ConsentSettings) => {
    if (key === "necessary") return; // 필수 쿠키는 토글 불가
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // showConsent가 true일 때만 렌더링
  if (showConsent !== true) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-4xl mx-auto">
        {!showSettings ? (
          <>
            <p className="text-sm mb-4">
              We use cookies to enhance your experience. By continuing to visit
              this site you agree to our use of cookies.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleConsent}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleDeny}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleManage}
                className="px-4 py-2 border border-gray-600 text-white rounded hover:bg-gray-800 transition-colors"
              >
                Manage Options
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cookie Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Necessary Cookies</p>
                  <p className="text-sm text-gray-400">
                    Required for the website to function properly
                  </p>
                </div>
                <div className="relative inline-block w-12 h-6 bg-gray-700 rounded-full">
                  <input
                    type="checkbox"
                    checked={settings.necessary}
                    disabled
                    className="sr-only"
                  />
                  <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-0 top-0"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Analytics Cookies</p>
                  <p className="text-sm text-gray-400">
                    Help us understand how visitors interact with our website
                  </p>
                </div>
                <button
                  onClick={() => handleToggleSetting("analytics")}
                  className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                    settings.analytics ? "bg-blue-500" : "bg-gray-700"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full absolute transition-transform top-1/2 -translate-y-1/2 ${
                      settings.analytics ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Cookies</p>
                  <p className="text-sm text-gray-400">
                    Used to track visitors across websites for marketing
                    purposes
                  </p>
                </div>
                <button
                  onClick={() => handleToggleSetting("marketing")}
                  className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                    settings.marketing ? "bg-blue-500" : "bg-gray-700"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full absolute transition-transform top-1/2 -translate-y-1/2 ${
                      settings.marketing ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Preference Cookies</p>
                  <p className="text-sm text-gray-400">
                    Remember your settings and preferences
                  </p>
                </div>
                <button
                  onClick={() => handleToggleSetting("preferences")}
                  className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                    settings.preferences ? "bg-blue-500" : "bg-gray-700"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full absolute transition-transform top-1/2 -translate-y-1/2 ${
                      settings.preferences ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-4 mt-6">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 border border-gray-600 text-white rounded hover:bg-gray-800 transition-colors w-full sm:w-auto"
              >
                Back
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-full sm:w-auto"
              >
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
