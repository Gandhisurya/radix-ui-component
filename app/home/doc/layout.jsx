"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
function DocLayout({ children }) {
  return (
    <div className="flex w-full">
      <Sidebar />
      {children}
    </div>
  );
}

export default DocLayout;
