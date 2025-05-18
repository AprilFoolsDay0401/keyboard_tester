import Link from "next/link";
import Footer from "@/components/Footer";

export default function Contact() {
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
            Contact
          </h1>
        </div>
        <p className="text-lg text-blue-100 font-medium max-w-xl text-center mt-2">
          Get in touch with us for any questions or support.
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
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We're here to help! You can reach us through any of the
                  following methods:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@keyboardtester.com"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      support@keyboardtester.com
                    </a>
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.keyboardtester.com"
                      className="text-blue-500 hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.keyboardtester.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Response Time
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We strive to respond to all inquiries within 24-48 hours
                  during business days. For urgent matters, please include
                  "URGENT" in your email subject line.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Support Hours
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Our support team is available:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM (GMT+9)</li>
                  <li>Saturday - Sunday: Closed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Business Inquiries
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  For business-related inquiries, partnerships, or advertising
                  opportunities, please contact us at:{" "}
                  <a
                    href="mailto:business@keyboardtester.com"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    business@keyboardtester.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
