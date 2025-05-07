import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white p-2">
      {/* Site Title */}
      <header className="w-full text-center my-10">
        <h1 className="text-5xl font-bold text-white mb-2">About Us</h1>
        <p className="text-lg text-white">
          Learn more about our keyboard testing service
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
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to Keyboard Tester, your go-to tool for testing and
                  troubleshooting keyboard functionality. Our mission is to
                  provide a simple, reliable, and user-friendly solution for
                  keyboard testing needs.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What We Offer
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our keyboard testing tool provides the following features:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Real-time key press detection and visualization</li>
                  <li>Support for all standard keyboard keys</li>
                  <li>Mobile-friendly interface</li>
                  <li>
                    No installation required - works directly in your browser
                  </li>
                  <li>Free to use, no registration needed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We are a team of web developers and keyboard enthusiasts
                  dedicated to creating useful tools for the community. Our goal
                  is to make keyboard testing accessible to everyone, from
                  casual users to professional technicians.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  For any questions, suggestions, or support needs, please
                  contact us at:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: support@keyboardtester.com</li>
                  <li>Website: www.keyboardtester.com</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
