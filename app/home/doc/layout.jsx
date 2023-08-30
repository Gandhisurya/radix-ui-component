"use client";
import React from "react";
import Sidebar from "@/components/sidebar";

import { ThemePanel } from "@radix-ui/themes";

function DocLayout({ children }) {
  return (
    <div className="flex w-full">
      <Sidebar />
      {children}
      <ThemePanel />
    </div>
  );
}

export default DocLayout;
