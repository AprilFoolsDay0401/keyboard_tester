import Link from "next/link";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white p-2">
      {/* Site Title */}
      <header className="w-full text-center my-10">
        <h1 className="text-5xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-lg text-white">
          Learn about how we handle your data and cookies
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
                Cookie Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  This Cookie Policy explains how we use cookies and similar
                  technologies on our keyboard testing website.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">
                  What are cookies?
                </h3>
                <p>
                  Cookies are small text files that are stored on your computer
                  or mobile device when you visit a website. They are widely
                  used to make websites work more efficiently and provide useful
                  information to website owners.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">
                  How we use cookies
                </h3>
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Essential cookies:</strong> These cookies are
                    necessary for the website to function properly. They enable
                    basic functions like page navigation and access to secure
                    areas of the website.
                  </li>
                  <li>
                    <strong>Preference cookies:</strong> These cookies remember
                    your settings and preferences, such as your language
                    preference or whether you've accepted our cookie policy.
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> We use these cookies to
                    understand how visitors interact with our website, which
                    helps us improve our services.
                  </li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">
                  Your cookie preferences
                </h3>
                <p>
                  You can control and/or delete cookies as you wish. You can
                  delete all cookies that are already on your computer and you
                  can set most browsers to prevent them from being placed. If
                  you do this, however, you may have to manually adjust some
                  preferences every time you visit our site.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">
                  Updates to this policy
                </h3>
                <p>
                  We may update this Cookie Policy from time to time. We will
                  notify you of any changes by posting the new Cookie Policy on
                  this page.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">
                  Contact us
                </h3>
                <p>
                  If you have any questions about our Cookie Policy, please
                  contact us at support@keyboardtester.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Data Protection
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We are committed to protecting your privacy and ensuring the
                  security of your personal data. We only collect and process
                  data that is necessary for the functioning of our keyboard
                  testing service.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">
                  Data we collect
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keyboard input data (for testing purposes only)</li>
                  <li>Cookie preferences</li>
                  <li>Basic usage statistics</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">
                  How we protect your data
                </h3>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized or unlawful
                  processing and against accidental loss, destruction, or
                  damage.
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
