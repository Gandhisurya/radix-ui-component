"use client";
import React from "react";

import Sidebar from "@/components/sidebar";

export default function Doc({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
