"use client";
import { Badge, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";

function BadgeCom() {
  const router = useRouter();

  const fallBackContent = `
    \`\`\`
    <Badge color="orange">In progress</Badge>
    <Badge color="blue">In review</Badge>
    <Badge color="green">Complete</Badge>
    \`\`\`
    `;

  const varientContent = `
  
  \`\`\`
   <Badge variant="solid" color="indigo">New</Badge>
   <Badge variant="soft" color="indigo">New</Badge>
   <Badge variant="outline" color="indigo">New</Badge>
   <Badge variant="surface" color="indigo">New</Badge>
  \`\`\`
  
  `;

  const colourContent = `
  
  \`\`\`
   <Badge color="indigo">New</Badge>
   <Badge color="cyan">New</Badge>
   <Badge color="orange">New</Badge>
   <Badge color="crimson">New</Badge>
  \`\`\`
  `;

  const radiusContent = `
  
  \`\`\`
  <Badge variant="solid" radius="none" color="indigo">New</Badge>
  <Badge variant="solid" radius="large" color="indigo">New</Badge>
  <Badge variant="solid" radius="full" color="indigo">New</Badge>
  \`\`\`
  
  `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Avatar</p>
        <p className="mt-2 font-medium">
          A profile picture, user initials or fallback icon.
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
                <Table.Cell>Responsive | "1" | "2" |</Table.Cell>
                <Table.Cell>"1"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>variant</Table.RowHeaderCell>
                <Table.Cell>
                  "solid" | "soft" | "surface" | "outline"
                </Table.Cell>
                <Table.Cell>"soft"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>color</Table.RowHeaderCell>
                <Table.Cell>enum</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>highContrast</Table.RowHeaderCell>
                <Table.Cell>boolean</Table.Cell>
                <Table.Cell>-</Table.Cell>
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
          <Badge size="2" color="indigo" className="mx-2">
            New
          </Badge>
          <Badge size="1" color="indigo" className="mx-2">
            New
          </Badge>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {fallBackContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Variant</p>
          <p className="my-2">
            Use the variant properties to control the visual style.
          </p>
          <div className="mt-3">
            <Badge variant="solid" color="indigo" className="mx-2">
              New
            </Badge>
            <Badge variant="soft" color="indigo" className="mx-2">
              New
            </Badge>
            <Badge variant="outline" color="indigo" className="mx-2">
              New
            </Badge>
            <Badge variant="surface" color="indigo" className="mx-2">
              New
            </Badge>
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {varientContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. Color</p>
          <p className="my-2">
            Use the color prop to assign a specific color, ignoring the global
            theme.
          </p>
          <div className="mt-3">
            <Badge color="indigo" className="mx-2">
              New
            </Badge>
            <Badge color="cyan" className="mx-2">
              New
            </Badge>
            <Badge color="orange" className="mx-2">
              New
            </Badge>
            <Badge color="crimson" className="mx-2">
              New
            </Badge>
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {colourContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">5. Radius</p>
          <p className="my-2">
            Use the radius prop to assign a specific radius value, ignoring the
            global theme.
          </p>
          <div className="mt-3">
            <Badge
              variant="solid"
              radius="none"
              color="indigo"
              className="mx-2"
            >
              New
            </Badge>
            <Badge
              variant="solid"
              radius="large"
              color="indigo"
              className="mx-2"
            >
              New
            </Badge>
            <Badge
              variant="solid"
              radius="full"
              color="indigo"
              className="mx-2"
            >
              New
            </Badge>
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
          onClick={() => router?.push("/home/doc/button")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Button
        </p>
      </div>
    </div>
  );
}

export default BadgeCom;
