"use client";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          {children}
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
