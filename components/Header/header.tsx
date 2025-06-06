"use client";

import * as React from "react";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="mt-4 mb-8 w-full mx-auto px-4 md:px-8 lg:px-12 z-9999">
      <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
        {/* Logo & Version */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="text-2xl font-bold relative inline-block">
            <span
              className="relative bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #B88746 10%, #FDF5A6 150%)",
              }}
            >
              UI
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-0 h-[4px] w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(to right, #B88746 10%, #FDF5A6 150%)",
                }}
              />
            </span>
            <span className="ml-1 text-2xl text-gray-300">view</span>
          </Link>
          <span className="text-sm text-muted-foreground mt-2 -ml-1">
            v1.0.0
          </span>
        </div>

        {/* Navbar */}

        {/* Desktop Navbar (hidden on small screens) */}
        <Navbar />

        {/* Mobile Navbar toggle (visible on small screens) */}
        <MobileNavbar />
      </div>
    </header>
  );
}
