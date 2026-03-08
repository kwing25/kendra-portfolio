"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition"
        >
          Kendra Wing
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-600 transition">
            About
          </Link>

          <Link href="/" className="hover:text-gray-600 transition">
            Projects
          </Link>

          <Link href="/" className="hover:text-gray-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
