import Link from "next/link";
import Keyboard from "@/components/Keyboard";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  text-white p-2">
      {/* Site Title */}
      <header className="w-full text-center my-10">
        <h1 className="text-5xl font-bold text-white mb-2">Keyboard Tester</h1>
        <p className="text-lg text-white">
          Check if your keyboard is working perfectly
        </p>
      </header>
      {/* Wrapper for background and banners */}
      <div className="w-full max-w-5xl bg-white p-3 rounded-xl shadow-2xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center mb-7 p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Test Your Keyboard Easily and Quickly
          </h1>
          <p className="text-lg mb-8 max-w-xl text-center text-gray-600">
            Check if all the keys on your keyboard are working perfectly. Fast,
            free, and simple!
          </p>
          <Link
            href="/keyboard"
            className="px-8 py-4 bg-blue-700 text-white text-xl rounded-lg shadow-xl hover:bg-blue-800 transition-all transform hover:scale-105"
          >
            Start Keyboard Test
          </Link>
        </section>

        {/* Features Section */}
        <section className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Why Choose Our Tester?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-xl text-gray-800 transition-all transform hover:scale-105">
              <h3 className="font-semibold text-xl mb-4">Instant Testing</h3>
              <p>✔ No downloads required. Test your keyboard instantly.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-xl text-gray-800 transition-all transform hover:scale-105">
              <h3 className="font-semibold text-xl mb-4">
                Full Keyboard Check
              </h3>
              <p>✔ Ensure every key is working properly, from A to Z.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-xl text-gray-800 transition-all transform hover:scale-105">
              <h3 className="font-semibold text-xl mb-4">Completely Free</h3>
              <p>✔ 100% free with no hidden charges.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
