import Link from "next/link";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  text-white p-2">
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
            Keyboard Test
          </h1>
        </div>
        <p className="text-lg text-blue-100 font-medium max-w-xl text-center mt-2">
          Instantly check if every key on your keyboard works. Fast, free, and
          easy to use!
        </p>
      </header>
      {/* Wrapper for background and banners */}
      <div className="w-full max-w-5xl mx-auto bg-white p-3 rounded-2xl shadow-2xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center mb-4 p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Test Your Keyboard Easily and Quickly
          </h1>
          <p className="text-lg mb-8 max-w-xl text-center text-gray-600">
            Check if all the keys on your keyboard are working perfectly. Fast,
            free, and simple!
          </p>
          <Link
            href="/keyboard"
            className="px-6 py-3 bg-blue-700 text-white text-xl rounded-lg shadow-xl hover:bg-blue-800 transition-all transform hover:scale-105"
          >
            Start Keyboard Test
          </Link>
        </section>
        {/* Features Section */}
        <section className="flex flex-col items-center text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Why Choose Our Test?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg shadow-xl text-gray-800 transition-all transform hover:scale-105 flex flex-col items-center">
              {/* Instant Testing - Lightning Icon */}
              <span className="mb-3">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7v8l8-12h-7l2-8z" fill="#2563eb" />
                </svg>
              </span>
              <h3 className="font-semibold text-xl mb-4">Instant Testing</h3>
              <p>✔ No downloads required. Test your keyboard instantly.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-xl text-gray-800 transition-all transform hover:scale-105 flex flex-col items-center">
              {/* Full Keyboard Check - Keyboard Icon */}
              <span className="mb-3">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="6"
                    width="20"
                    height="12"
                    rx="2"
                    fill="#2563eb"
                  />
                  <rect x="4" y="8" width="16" height="8" rx="1" fill="#fff" />
                  <rect
                    x="6"
                    y="10"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="#2563eb"
                  />
                  <rect
                    x="9"
                    y="10"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="#2563eb"
                  />
                  <rect
                    x="12"
                    y="10"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="#2563eb"
                  />
                  <rect
                    x="15"
                    y="10"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="#2563eb"
                  />
                  <rect
                    x="6"
                    y="13"
                    width="8"
                    height="2"
                    rx="0.5"
                    fill="#2563eb"
                  />
                </svg>
              </span>
              <h3 className="font-semibold text-xl mb-4">
                Full Keyboard Check
              </h3>
              <p>✔ Ensure every key is working properly, from A to Z.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-xl text-gray-800 transition-all transform hover:scale-105 flex flex-col items-center">
              {/* Completely Free - Check Circle Icon */}
              <span className="mb-3">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#2563eb" />
                  <path
                    d="M8 12l2.5 2.5L16 9"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="font-semibold text-xl mb-4">Completely Free</h3>
              <p>✔ 100% free with no hidden charges.</p>
            </div>
          </div>
        </section>
        <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto my-2" />
        {/* User Reviews Section */}
        <section className="max-w-3xl mx-auto my-14">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "This tool helped me identify a stuck key on my mechanical
                keyboard. The visual feedback made it super easy to spot the
                issue!"
              </p>
              <div className="font-semibold text-gray-800">- Alex K.</div>
              <div className="text-sm text-gray-500">
                Mechanical Keyboard Enthusiast
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Perfect for testing my new wireless keyboard. The sound
                feedback is a great feature that helped me ensure all keys were
                working properly."
              </p>
              <div className="font-semibold text-gray-800">- Sarah M.</div>
              <div className="text-sm text-gray-500">Remote Worker</div>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a tech support specialist, I use this tool daily to diagnose
                keyboard issues. It's simple yet effective!"
              </p>
              <div className="font-semibold text-gray-800">- Mike R.</div>
              <div className="text-sm text-gray-500">
                IT Support Professional
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The numpad testing feature is fantastic! It helped me identify
                a problem with my laptop's numeric keypad that I didn't even
                know existed."
              </p>
              <div className="font-semibold text-gray-800">- Lisa T.</div>
              <div className="text-sm text-gray-500">Data Entry Specialist</div>
            </div>
          </div>
        </section>
        <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-2" />
        {/* Keyboard Troubleshooting Section */}
        <section className="max-w-3xl mx-auto my-14">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Common Keyboard Issues & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                Sticky Keys
              </h3>
              <p className="text-gray-600">
                Keys that don't spring back or feel stuck. Often caused by dirt,
                debris, or mechanical wear.
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Clean the keycap and surrounding area</li>
                <li>• Check for physical damage</li>
                <li>• Consider key replacement if severe</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                Unresponsive Keys
              </h3>
              <p className="text-gray-600">
                Keys that don't register when pressed. Could be due to software
                issues or hardware problems.
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Check keyboard drivers</li>
                <li>• Test on different USB ports</li>
                <li>• Try on another computer</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                Ghost Typing
              </h3>
              <p className="text-gray-600">
                Keys that register without being pressed. Often caused by liquid
                damage or electrical issues.
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Check for liquid damage</li>
                <li>• Clean the keyboard thoroughly</li>
                <li>• Consider professional repair</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                Wrong Characters
              </h3>
              <p className="text-gray-600">
                Keys that type different characters than expected. Usually a
                software or language setting issue.
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Check keyboard language settings</li>
                <li>• Verify keyboard layout</li>
                <li>• Reset keyboard settings</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-2" />
        {/* How to Use Section */}
        <section className="max-w-3xl mx-auto my-14">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            How to Use
          </h2>
          <ol className="space-y-6">
            <li className="bg-blue-50 text-gray-800 rounded-xl shadow-lg p-4 flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </span>
              <div>
                <span className="font-semibold">Start the Test:</span> Click the
                "Start Keyboard Test" button at the top of the page.
              </div>
            </li>
            <li className="bg-blue-50 text-gray-800 rounded-xl shadow-lg p-4 flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </span>
              <div>
                <span className="font-semibold">Check Key Input:</span> Press
                any key on your physical keyboard. The corresponding key on the
                on-screen keyboard will turn green if the input is detected
                correctly. You can press multiple keys at once; all will be
                highlighted.
              </div>
            </li>
            <li className="bg-blue-50 text-gray-800 rounded-xl shadow-lg p-4 flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </span>
              <div>
                <span className="font-semibold">Test the NumPad:</span> Click
                the "Show NumPad" button to display the numeric keypad. You can
                test the numpad by pressing the keys on your physical numpad or
                by clicking the on-screen numpad buttons with your mouse.
              </div>
            </li>
            <li className="bg-blue-50 text-gray-800 rounded-xl shadow-lg p-4 flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                4
              </span>
              <div>
                <span className="font-semibold">Check by Sound:</span> Every
                time you press a key, a sound will play, so you can also check
                your input by sound.
              </div>
            </li>
            <li className="bg-blue-50 text-gray-800 rounded-xl shadow-lg p-4 flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                5
              </span>
              <div>
                <span className="font-semibold">
                  If Something Doesn't Work:
                </span>{" "}
                If a key does not highlight or respond on the screen, that key
                may have an issue.
              </div>
            </li>
          </ol>
        </section>
        <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto my-2" />
        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-14">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                Is this keyboard test tool free to use?
              </h3>
              <p className="text-gray-600">
                Yes, our keyboard test tool is completely free to use. There are
                no hidden charges or premium features.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                Do I need to install anything to use this tool?
              </h3>
              <p className="text-gray-600">
                No installation is required. This is a web-based tool that works
                directly in your browser. Just visit the website and start
                testing.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                What types of keyboards can I test?
              </h3>
              <p className="text-gray-600">
                You can test any type of keyboard that connects to your
                computer, including mechanical keyboards, membrane keyboards,
                wireless keyboards, and laptop keyboards.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                How do I know if my keyboard is working correctly?
              </h3>
              <p className="text-gray-600">
                When you press a key on your physical keyboard, the
                corresponding key on our virtual keyboard will turn green. If a
                key doesn't light up when pressed, it might indicate a problem
                with that specific key.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-gray-800">
              <h3 className="font-semibold text-xl mb-3 flex items-center">
                <span className="mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
                Can I test keyboard shortcuts and combinations?
              </h3>
              <p className="text-gray-600">
                Yes, our tool supports testing multiple keys simultaneously,
                allowing you to verify keyboard shortcuts and key combinations.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
