"use client";
import {
  Button,
  Callout,
  Flex,
  Link,
  Separator,
  Table,
} from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

function Seperator() {
  const router = useRouter();

  const sizeContent = `
    
  \`\`\`
   <Flex direction="column" gap="4">
      <Separator orientation="horizontal" size="4" />
      <Separator orientation="horizontal" size="3" />
      <Separator orientation="horizontal" size="2" />
      <Separator orientation="horizontal" size="1" />
   </Flex>
   <Flex align="center" gap="4" style={{ height: 96 }} className="mt-4">
     <Separator orientation="vertical" size="4" />
     <Separator orientation="vertical" size="3" />
     <Separator orientation="vertical" size="2" />
     <Separator orientation="vertical" size="1" />
   </Flex>
  \`\`\`
    
    `;

  const colorContent = `
        
  \`\`\`
     <Flex direction="column" gap="3">
       <Separator color="indigo" size="4" />
       <Separator color="cyan" size="4" />
       <Separator color="orange" size="4" />
       <Separator color="crimson" size="4" />
     </Flex>
  \`\`\`
        
        `;

  const orientContent = `
  
  \`\`\`
  <Flex align="center" gap="4">
    <Separator orientation="horizontal" />
    <Separator orientation="vertical" />
  </Flex>
  \`\`\`
  `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Separator</p>
        <p className="mt-2 font-medium">
          Visually or semantically separates content.
        </p>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="font-semibold text-lg mt-2">Reference</p>
        <div className="border p-2 rounded-xl mt-2">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Prop</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>size</Table.RowHeaderCell>
                <Table.Cell>Responsive | "1" | "2" | "3" |</Table.Cell>
                <Table.Cell>"2"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>color</Table.RowHeaderCell>
                <Table.Cell>enum</Table.Cell>
                <Table.Cell>"gray"</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">1. Size</p>
        <div>
          <p className="my-2 font-medium">Horizontal</p>
          <Flex direction="column" gap="4">
            <Separator orientation="horizontal" size="4" />
            <Separator orientation="horizontal" size="3" />
            <Separator orientation="horizontal" size="2" />
            <Separator orientation="horizontal" size="1" />
          </Flex>
          <p className="my-2 font-medium">vertical</p>
          <Flex align="center" gap="4" style={{ height: 96 }} className="mt-4">
            <Separator orientation="vertical" size="4" />
            <Separator orientation="vertical" size="3" />
            <Separator orientation="vertical" size="2" />
            <Separator orientation="vertical" size="1" />
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-x-scroll">
            {sizeContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Color</p>
          <p className="my-2">
            Use the color prop to assign a specific color, ignoring the global
            theme.
          </p>
          <Flex direction="column" gap="3">
            <Separator color="indigo" size="4" />
            <Separator color="cyan" size="4" />
            <Separator color="orange" size="4" />
            <Separator color="crimson" size="4" />
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-x-scroll">
            {colorContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">3. Orientation</p>
          <p className="my-2">
            Use the orientation prop to control whether the separator is
            horizontal or vertical.
          </p>
          <Flex align="center" gap="4">
            <Separator orientation="horizontal" />
            <Separator orientation="vertical" />
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-x-scroll">
            {orientContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-[130px] shadow-lg flex flex-col text-right mb-10 ml-auto rounded-lg p-2">
        <p className="">Next</p>
        <p
          onClick={() => router?.push("/home/doc/card")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Card
        </p>
      </div>
    </div>
  );
}

export default Seperator;
