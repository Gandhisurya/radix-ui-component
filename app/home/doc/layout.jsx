"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
function DocLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default DocLayout;
