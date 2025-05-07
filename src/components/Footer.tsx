import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-white mt-8 w-full p-4">
      <p className="mb-2">Made with ❤️ by DK</p>
      <div className="w-60 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-2"></div>
      <div className="flex justify-center space-x-4 text-sm">
        <Link href="/about" className="hover:text-blue-400 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-400 transition-colors">
          Contact
        </Link>
        <Link href="/privacy" className="hover:text-blue-400 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-blue-400 transition-colors">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
