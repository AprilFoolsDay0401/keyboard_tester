import Link from "next/link";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white p-2">
      {/* Site Title */}
      <header className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-10 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-2xl shadow-xl mb-4">
        <div className="flex items-center justify-center mb-2">
          <span className="inline-block mr-3">
            {/* Keyboard SVG Icon */}
            <Link href="/">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                <rect
                  width="24"
                  height="24"
                  rx="6"
                  fill="#fff"
                  fillOpacity="0.15"
                />
                <path
                  d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm2 0v10h12V7H6zm2 3h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h-2v2h2v-2zM8 15h8v-2H8v2z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </span>
          <h1 className="text-5xl font-extrabold text-white drop-shadow tracking-tight">
            Privacy Policy
          </h1>
        </div>
        <p className="text-lg text-blue-100 font-medium max-w-xl text-center mt-2">
          Learn how we protect your privacy and data.
        </p>
      </header>

      {/* Wrapper for background and content */}
      <div className="w-full max-w-5xl bg-white p-3 rounded-xl shadow-2xl">
        <div className="p-8">
          <div className="mb-8">
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Consent Management
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We respect your privacy and give you control over your data.
                  You can manage your consent preferences at any time through
                  our consent management tool.
                </p>
                <p>
                  When you first visit our website, you'll be presented with a
                  consent banner where you can:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accept all cookies and tracking technologies</li>
                  <li>Reject non-essential cookies</li>
                  <li>
                    Customize your preferences for different types of cookies
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Data Collection & Processing
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We collect and process data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential Data:</strong> Required for the website to
                    function properly (e.g., keyboard input for testing)
                  </li>
                  <li>
                    <strong>Analytics Data:</strong> To understand how visitors
                    use our website and improve our services
                  </li>
                  <li>
                    <strong>Preference Data:</strong> To remember your settings
                    and preferences
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Cookies & Tracking Technologies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use the following types of cookies and tracking
                  technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic
                    website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Used by Google Analytics
                    4 to collect anonymous usage data
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings
                    and choices
                  </li>
                </ul>
                <p>
                  You can control these cookies through your browser settings or
                  our consent management tool.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Google Analytics 4 Usage
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use Google Analytics 4 to understand how visitors interact
                  with our website. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Page views and navigation patterns</li>
                  <li>Time spent on pages</li>
                  <li>Device and browser information</li>
                  <li>Geographic location (country/region level)</li>
                </ul>
                <p>
                  All data is anonymized and aggregated. We do not collect
                  personally identifiable information through Google Analytics.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                User Rights & Choices
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at
                  support@keyboardtest.pro
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Data Retention
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We retain your data for as long as necessary to provide our
                  services and comply with legal obligations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analytics data: 26 months</li>
                  <li>Cookie preferences: Until you change them</li>
                  <li>Essential data: For the duration of your session</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Updates & Contact
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page.
                </p>
                <p>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
                </p>
                <p className="font-medium">Email: support@keyboardtest.pro</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
