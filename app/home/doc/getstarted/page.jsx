"use client";
import {
  Avatar,
  Box,
  Heading,
  HoverCard,
  Tabs,
  Text,
  Flex,
  Code,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function GetStarted() {
  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll mx-40 font-next">
      <div className="mt-20">
        <h1 className="font-semibold text-3xl">Getting started</h1>
        <p className="mt-3 mb-5 font-medium">
          install radix in project by copy the below commad and paste in your
          project terminal with in a minute...
        </p>
      </div>
      <div>
        <p className="font-semibold text-2xl">Installation Steps</p>
        <div className="flex flex-col mt-5">
          <p className="font-semibold text-lg">1. Install the Radix Theme</p>
          <p className="mt-3 font-medium">
            Copy the below code and paste in your terminal
          </p>
          <div className="max-w-[600px] border rounded-lg p-1 mt-5 bg-indigo-50">
            <Tabs.Root defaultValue="account">
              <Tabs.List>
                <Tabs.Trigger value="account" className="font-semibold">
                  npm
                </Tabs.Trigger>
                <Tabs.Trigger value="documents" className="font-semibold">
                  yarn
                </Tabs.Trigger>
                <Tabs.Trigger value="settings" className="font-semibold">
                  pnpm
                </Tabs.Trigger>
              </Tabs.List>
              <Box px="4" pt="3" pb="2" className="my-1">
                <Tabs.Content value="account">
                  <Text className="font-semibold" size="2">
                    npm install @radix-ui/themes
                  </Text>
                </Tabs.Content>
                <Tabs.Content value="documents">
                  <Text className="font-semibold" size="2">
                    yarn add @radix-ui/themes
                  </Text>
                </Tabs.Content>
                <Tabs.Content value="settings">
                  <Text size="2" className="font-semibold">
                    pnpm add @radix-ui/themes
                  </Text>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </div>
        </div>
        <div className="flx flex-col mt-5">
          <p className="font-semibold text-lg">2. Import Radix CSS file</p>
          <p className="mt-3 font-medium">
            copy and paste the below code in your root file like
            <HoverCard.Root>
              <HoverCard.Trigger>
                <b className="ml-2 cursor-pointer">layout.js or layout.jsx</b>
              </HoverCard.Trigger>
              <HoverCard.Content className="bg-yellow-500">
                <div className="flex flex-col">
                  <img className="w-12" src="/next.svg" />
                  <Box className="mt-4">
                    <Code className="flex flex-col">
                      <p className="mt-2 mx-4">{` import "@radix-ui/themes/styles.css";  `}</p>
                      <p className="mt-2 mx-4">{` export default function RootLayout({children}){ `}</p>
                      <p className="mt-2 mx-4">{` return ( `}</p>
                      <p className="mt-2 mx-4 pl-6">{`  <html lang="en"> `}</p>
                      <p className="mt-2 mx-4 pl-10">{` <body className=""> `}</p>
                      <p className="mt-2 mx-4 pl-16">{`    {children} `}</p>
                      <p className="mt-2 mx-4 pl-10">{`  </body> `}</p>
                      <p className="mt-2 mx-4 pl-6">{` </html> `}</p>
                      <p className="mt-2 mx-4">{` ) `}</p>
                      <p className="my-2 mx-4">{` }; `}</p>
                    </Code>
                  </Box>
                </div>
              </HoverCard.Content>
            </HoverCard.Root>
          </p>
          <p className="p-3 border rounded-lg max-w-[600px] bg-indigo-50 font-semibold mt-5">
            import '@radix-ui/themes/styles.css';
          </p>
        </div>
        <div className="fle flex-col mt-5">
          <p className="font-semibold text-lg">
            3. Add Theme Component and wrap the children
          </p>
          <p className="font-medium mt-3">
            Add{" "}
            <span className="font-medium p-1 bg-indigo-50 rounded-lg">
              Theme
            </span>{" "}
            to your application, wrapping the root component inside of body.
          </p>
          <Code className="flex flex-col max-w-[600px] my-10">
            <p className="mt-6 mx-4">{` import "@radix-ui/themes/styles.css";  `}</p>
            <p className="mt-2 mx-4">{` export default function RootLayout({children}){ `}</p>
            <p className="mt-2 mx-4">{` return ( `}</p>
            <p className="mt-2 mx-4 pl-6">{`  <html lang="en"> `}</p>
            <p className="mt-2 mx-4 pl-10">{` <body className=""> `}</p>
            <p className="mt-2 mx-4 pl-16">{`    {children} `}</p>
            <p className="mt-2 mx-4 pl-10">{`  </body> `}</p>
            <p className="mt-2 mx-4 pl-6">{` </html> `}</p>
            <p className="mt-2 mx-4">{` ) `}</p>
            <p className="mt-2 my-6 mx-4">{` }; `}</p>
          </Code>
        </div>
        <div className="flex flex-col mt-5">
          <p className="font-semibold text-lg">
            4. Start Build Website with Radix Components
          </p>
          <p className="mt-3 font-medium">
            Now your website is ready to use with Radix Components like the
            below
          </p>
          <Code className="flex flex-col max-w-[600px] my-10">
            <p className="mt-6 mx-4">{` import React from "react";  `}</p>
            <p className="mt-6 mx-4">{` import { Flex, Text, Button } from '@radix-ui/themes';  `}</p>
            <p className="mt-6 mx-4">{``}</p>
            <p className="mt-2 mx-4">{` export default function Home(){ `}</p>
            <p className="mt-2 mx-4">{` return ( `}</p>
            <p className="mt-2 mx-4 pl-6">{`  <Flex direction="column" gap="2"> `}</p>
            <p className="mt-2 mx-4 pl-10">{`  <Text>Awesome 🚀 Radix Themes :)</Text> `}</p>
            <p className="mt-2 mx-4 pl-10">{`     <Button>Let's go</Button> `}</p>
            <p className="mt-2 mx-4 pl-6">{` </Flex> `}</p>
            <p className="mt-2 mx-4 pl-3">{` ) `}</p>
            <p className="mt-2 my-6 mx-4">{` }; `}</p>
          </Code>
        </div>
        <div className="flex flex-col mt-5">
          <p className="font-semibold text-2xl ">The Theme Panel</p>
          <p className="mt-3">
            {" "}
            <span className="font-medium p-1 bg-indigo-50 rounded-lg">
              ThemePanel
            </span>{" "}
            is a drop in component that allows you to preview the theme
            configuration in real time.
          </p>
          <Code className="flex flex-col max-w-[600px] my-10">
            <p className="mt-6 mx-4">{` import "@radix-ui/themes/styles.css";  `}</p>
            <p className="mt-6 mx-4">{` import { Theme, ThemePanel } from '@radix-ui/themes';  `}</p>
            <p className="mt-2 mx-4">{` export default function RootLayout({children}){ `}</p>
            <p className="mt-2 mx-4">{` return ( `}</p>
            <p className="mt-2 mx-4 pl-6">{`  <html lang="en"> `}</p>
            <p className="mt-2 mx-4 pl-10">{` <body className=""> `}</p>
            <p className="mt-2 mx-4 pl-12">{` <Theme> `}</p>
            <p className="mt-2 mx-4 pl-16">{`    {children} `}</p>
            <p className="mt-2 mx-4 pl-16">{`    <ThemePanel /> `}</p>
            <p className="mt-2 mx-4 pl-12">{`  </Theme> `}</p>
            <p className="mt-2 mx-4 pl-10">{`  </body> `}</p>
            <p className="mt-2 mx-4 pl-6">{` </html> `}</p>
            <p className="mt-2 mx-4">{` ) `}</p>
            <p className="mt-2 my-6 mx-4">{` }; `}</p>
          </Code>
          <p className="mt-2 font-medium">
            You can also use in individual page like the below{" "}
          </p>
          <Code className="flex flex-col max-w-[600px] my-10">
            <p className="mt-6 mx-4">{` import Sidebar from "@/components/sidebar";  `}</p>
            <p className="mt-6 mx-4">{` import { ThemePanel } from '@radix-ui/themes';  `}</p>
            <p className="mt-2 mx-4">{` function DocLayout({ children }) { `}</p>
            <p className="mt-2 mx-4">{` return ( `}</p>
            <p className="mt-2 mx-4 pl-10">{`  <div className="flex w-full"> `}</p>
            <p className="mt-2 mx-4 pl-16">{`   <Sidebar /> `}</p>
            <p className="mt-2 mx-4 pl-16">{`    {children} `}</p>
            <p className="mt-2 mx-4 pl-16">{`    <ThemePanel /> `}</p>
            <p className="mt-2 mx-4 pl-10">{` </div> `}</p>
            <p className="mt-2 mx-4">{` ) `}</p>
            <p className="mt-2 my-6 mx-4">{` }; `}</p>
          </Code>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
