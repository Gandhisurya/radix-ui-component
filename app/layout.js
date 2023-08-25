"use client";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import NavBar from "@/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <NavBar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
