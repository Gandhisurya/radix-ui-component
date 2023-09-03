"use client";
import { Button, Callout, Link, Switch, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

function Switchs() {
  const router = useRouter();

  const sizeContent = `
    
  \`\`\`
    <Switch size="3" defaultChecked />
    <Switch size="2" defaultChecked />
    <Switch size="1" defaultChecked />
  \`\`\`
    
    `;

  const varientContent = `
        
  \`\`\`
    <Flex direction="column" gap="2">
      <Switch variant="surface" defaultChecked />
      <Switch variant="classic" defaultChecked />
      <Switch variant="soft" defaultChecked />
    </Flex>

    <Flex direction="column" gap="2">
      <Switch variant="surface" />
      <Switch variant="classic" />
      <Switch variant="soft" />
    </Flex>
  \`\`\`
        
        `;

  const colorContent = `
        
  \`\`\`
    <Switch color="indigo" defaultChecked />
    <Switch color="cyan" defaultChecked />
    <Switch color="orange" defaultChecked />
    <Switch color="crimson" defaultChecked />
  \`\`\`
        
        `;
  const highContent = `
        
  \`\`\`
    <Switch defaultChecked />
    <Switch defaultChecked highContrast />
  \`\`\`
        
        `;

  const radiusContent = `
  \`\`\`
    <Switch radius="none" defaultChecked />
    <Switch radius="large" defaultChecked />
    <Switch radius="full" defaultChecked />
  \`\`\`
        `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl">Switch</p>
        <p className="mt-2 font-medium">
          A toggle switch alternative to the checkbox.
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
                <Table.Cell>Responsive "1" | "2" | "3" </Table.Cell>
                <Table.Cell>"2"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>variant</Table.RowHeaderCell>
                <Table.Cell>"classic" | "surface" | "soft"</Table.Cell>
                <Table.Cell>"surface"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>color</Table.RowHeaderCell>
                <Table.Cell>enum</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>highContrast</Table.RowHeaderCell>
                <Table.Cell>boolean</Table.Cell>
                <Table.Cell>"surface"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>radius</Table.RowHeaderCell>
                <Table.Cell>
                  "none" | "small" | "medium" | "large" | "full"
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">1. Size</p>
        <div>
          <div className="flex flex-col items-start space-y-4">
            <Switch size="3" defaultChecked />
            <Switch size="2" defaultChecked />
            <Switch size="1" defaultChecked />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {sizeContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Variant</p>
          <p className="my-2">
            Use the variant properties to control the visual style.
          </p>
          <div className="mt-3 flex items-start space-x-4">
            <div className="flex flex-col">
              <Switch variant="surface" defaultChecked className="my-2" />
              <Switch variant="classic" defaultChecked className="my-2" />
              <Switch variant="soft" defaultChecked className="my-2" />
            </div>
            <div className="flex flex-col">
              <Switch variant="surface" className="my-2" />
              <Switch variant="classic" className="my-2" />
              <Switch variant="soft" className="my-2" />
            </div>
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {varientContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">3. Color</p>
          <p className="my-2">
            Use the variant properties to control the visual style.
          </p>
          <div className="mt-3 flex items-start space-x-4">
            <Switch color="indigo" defaultChecked />
            <Switch color="cyan" defaultChecked />
            <Switch color="orange" defaultChecked />
            <Switch color="crimson" defaultChecked />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {colorContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. High-contrast</p>
          <p className="my-2">
            Use the variant properties to control the visual style.
          </p>
          <div className="mt-3 flex items-start space-x-4">
            <Switch defaultChecked />
            <Switch defaultChecked highContrast />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {highContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">5. Radius</p>
          <p className="my-2">
            Use the radius prop to assign a specific radius value, ignoring the
            global theme.
          </p>
          <div className="mt-3 flex items-start space-x-4">
            <Switch radius="none" defaultChecked />
            <Switch radius="large" defaultChecked />
            <Switch radius="full" defaultChecked />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {radiusContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-[130px] shadow-lg flex flex-col text-right mb-10 ml-auto rounded-lg p-2">
        <p className="">Next</p>
        <p
          onClick={() => router?.push("/home/doc/table")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Table
        </p>
      </div>
    </div>
  );
}

export default Switchs;
