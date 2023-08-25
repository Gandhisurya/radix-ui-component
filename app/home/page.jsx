"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col overflow-y-hidden h-screen">
      <div>
        <p className="mt-20 text-center text-5xl font-semibold">
          Radix Themes is an open-source component library
        </p>
        <p className="mt-8 font-medium text-xl text-center">
          optimized for fast development, easy maintenance, and accessibility.
        </p>
        <p className="text-center text-">
          Maintained by{" "}
          <Link href="https://github.com/workos" target="_blank">
            @workos
          </Link>
          .
        </p>
      </div>
      <div className="-z-50 absolute inset-0 blur-3xl opacity-50 bg-blue-300 h-screen filter brightness-100" />
    </div>
  );
}
