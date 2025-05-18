"use client";

import { useState } from "react";
import Link from "next/link";
import Keyboard from "../../components/Keyboard";
import NumPad from "../../components/NumPad";
import Footer from "@/components/Footer";

export default function Home() {
  const [showNumPad, setShowNumPad] = useState(false);

  return (
    <main className="flex flex-col min-h-screen justify-between items-center p-2">
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
            Keyboard Tester
          </h1>
        </div>
        <p className="text-lg text-blue-100 font-medium max-w-xl text-center mt-2">
          Press any key to test your keyboard below.
        </p>
      </header>
      <div className="w-full max-w-5xl flex flex-col bg-white items-center pb-10 rounded-2xl shadow-2xl">
        <button
          type="button"
          onClick={() => setShowNumPad(!showNumPad)}
          className="my-10 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          {showNumPad ? "Hide NumPad" : "Show NumPad"}
        </button>
        <Keyboard />
        {showNumPad && (
          <div className="mt-6">
            <NumPad />
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
