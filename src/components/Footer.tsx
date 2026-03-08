import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-600 md:flex-row">
          {/* Left: Name + Year */}
          <p>© {new Date().getFullYear()} Kendra Wing. All rights reserved.</p>

          {/* Right: Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/kwing25"
              target="_blank"
              className="hover:text-gray-900 transition"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/kendrawing"
              target="_blank"
              className="hover:text-gray-900 transition"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:kendrawingpro@icloud.com"
              className="hover:text-gray-900 transition"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
