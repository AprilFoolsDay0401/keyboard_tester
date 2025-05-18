import Link from "next/link";
import Footer from "@/components/Footer";

export default function Terms() {
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
            Terms of Service
          </h1>
        </div>
        <p className="text-lg text-blue-100 font-medium max-w-xl text-center mt-2">
          Please read our terms of service carefully before using our site.
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
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing and using Keyboard Tester, you agree to be bound
                  by these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any of these terms, you
                  are prohibited from using or accessing this site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2. Use License
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Permission is granted to temporarily use Keyboard Tester for
                  personal, non-commercial purposes. This is the grant of a
                  license, not a transfer of title, and under this license you
                  may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on Keyboard Tester
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3. Disclaimer
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The materials on Keyboard Tester are provided on an 'as is'
                  basis. We make no warranties, expressed or implied, and hereby
                  disclaim and negate all other warranties including, without
                  limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4. Limitations
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  In no event shall Keyboard Tester or its suppliers be liable
                  for any damages (including, without limitation, damages for
                  loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  Keyboard Tester.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5. Revisions and Errata
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The materials appearing on Keyboard Tester could include
                  technical, typographical, or photographic errors. We do not
                  warrant that any of the materials on our website are accurate,
                  complete, or current. We may make changes to the materials
                  contained on our website at any time without notice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6. Links
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We have not reviewed all of the sites linked to our website
                  and are not responsible for the contents of any such linked
                  site. The inclusion of any link does not imply endorsement by
                  Keyboard Tester of the site. Use of any such linked website is
                  at the user's own risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7. Modifications
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may revise these terms of service at any time without
                  notice. By using this website, you are agreeing to be bound by
                  the then current version of these terms of service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8. Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about these Terms of Service, please
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
