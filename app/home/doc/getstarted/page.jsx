import { Box, Tabs, Text } from "@radix-ui/themes";
import React from "react";

function GetStarted() {
  return (
    <div className="flex flex-col w-full h-auto over-flow-scroll mx-40">
      <div className="mt-20">
        <h1 className="font-semibold text-2xl">Getting started</h1>
        <p className="mt-3">
          install radix in project by copy the below commad and paste in your
          project terminal with in a minute...
        </p>
      </div>
      <div>
        <p>Installation Steps</p>
        <div className="flex flex-col">
          <p>1. Install the Radix Theme</p>
          <p>Copy the below code and paste in your terminal</p>
          <div className="max-w-[600px] border rounded-lg p-1 mt-5">
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
      </div>
    </div>
  );
}

export default GetStarted;
