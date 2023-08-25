"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col overflow-y-hidden h-screen font-next">
      <div className="mt-60">
        <p className="text-center text-5xl font-bold px-56 mx-auto">
          Radix Themes is an open-source component library
        </p>
        <p className="mt-8 font-medium text-xl text-center">
          optimized for fast development, easy maintenance, and accessibility.
        </p>
        <p className="text-center font-medium text-xl">
          Maintained by{" "}
          <Link
            href="https://github.com/workos"
            className="font-semibold hover:text-sky-500 transition-transform"
            target="_blank"
          >
            @workos
          </Link>
          .
        </p>
      </div>
      <div className="mx-auto mt-10">
        <button className="w-[280px] mx-3 h-12 border rounded-xl bg-white font-semibold text-xl hover:scale-105 transition-transform">
          Get Started
        </button>
        <button className="w-[280px] mx-3 h-12 border rounded-xl bg-white font-semibold text-xl hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
      <div className="-z-50 absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-pink-200 to-purple-200  h-screen filter brightness-100" />
    </div>
  );
}
