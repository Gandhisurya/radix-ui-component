"use client";

import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto">
      <div className="flex flex-col justify-center items-center mt-20 mx-auto">
        <p className="text-2xl font-semibold">Hello from Radix Themes :)</p>
        <Button className="mt-10 w-[150px]" onClick={() => alert(`april fool`)}>
          Let's go
        </Button>
      </div>
      <div></div>
    </main>
  );
}
