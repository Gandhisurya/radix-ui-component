"use client";
import { Button, Callout, Link, Table, TextField } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

function TextFields() {
  const router = useRouter();

  const fallBackContent = `
    
   \`\`\`
    <TextField.Input size="1" placeholder="Search the docs…" />
    <TextField.Input size="2" placeholder="Search the docs…" />
    <TextField.Input size="3" placeholder="Search the docs…" />
   \`\`\`
    
    `;

  const varientContent = `
        
   \`\`\`
      <TextField.Input variant="surface" placeholder="Search the docs…" />
      <TextField.Input variant="classic" placeholder="Search the docs…" />
      <TextField.Input variant="soft" placeholder="Search the docs…" />
   \`\`\`
        
        `;

  const colorContent = `

\`\`\`
    <TextField.Input color="indigo" variant="soft" placeholder="Search the docs…" />
    <TextField.Input color="green" variant="soft" placeholder="Search the docs…" />
    <TextField.Input color="red" variant="soft" placeholder="Search the docs…" />
\`\`\`

`;

  const radiusContent = `
\`\`\`
   <TextField.Input radius="none" placeholder="Search the docs…" />
   <TextField.Input radius="large" placeholder="Search the docs…" />
   <TextField.Input radius="full" placeholder="Search the docs…" />
\`\`\`
`;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl">Text Field</p>
        <p className="mt-2 font-medium">
          Captures user input with an optional slot for buttons and icons.
        </p>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="font-semibold text-lg mt-2">Reference</p>
        <p className="font-semibold text-xl mt-2">Root</p>
        <p className="my-2 font-medium">
          Groups Slot and Input parts. This component is based on the <b>div</b>{" "}
          element and supports common margin props.
        </p>
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
                <Table.RowHeaderCell>radius</Table.RowHeaderCell>
                <Table.Cell>
                  "none" | "small" | "medium" | "large" | "full"
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <p className="font-semibold text-xl mt-2">Slot</p>
        <p className="my-2 font-medium">
          Contains icons or buttons associated with an Input.
        </p>
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
                <Table.RowHeaderCell>color</Table.RowHeaderCell>
                <Table.Cell>enum</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>gap</Table.RowHeaderCell>
                <Table.Cell>emum</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <p className="font-semibold text-xl mt-2">Input</p>
        <p className="my-2 font-medium">
          The input element. This component is based on the input element and
          supports common margin props.
        </p>
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
            <TextField.Input size="1" placeholder="Search the docs…" />
            <TextField.Input size="2" placeholder="Search the docs…" />
            <TextField.Input size="3" placeholder="Search the docs…" />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-auto">
            {fallBackContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Variant</p>
          <p className="my-2">
            Use the variant prop to control the visual style.
          </p>
          <div className="mt-3 flex flex-col items-start space-y-4">
            <TextField.Input variant="surface" placeholder="Search the docs…" />
            <TextField.Input variant="classic" placeholder="Search the docs…" />
            <TextField.Input variant="soft" placeholder="Search the docs…" />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-auto">
            {varientContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">3. Color</p>
          <p className="my-2">
            Use the color prop to assign a specific color, ignoring the global
            theme.
          </p>
          <div className="mt-3 flex flex-col items-start space-y-4">
            <TextField.Input
              color="indigo"
              variant="soft"
              placeholder="Search the docs…"
            />
            <TextField.Input
              color="green"
              variant="soft"
              placeholder="Search the docs…"
            />
            <TextField.Input
              color="red"
              variant="soft"
              placeholder="Search the docs…"
            />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-auto">
            {colorContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. Radius</p>
          <p className="my-2">
            Use the radius prop to assign a specific radius value, ignoring the
            global theme.
          </p>
          <div className="mt-3 flex flex-col items-start space-y-4">
            <TextField.Input radius="none" placeholder="Search the docs…" />
            <TextField.Input radius="large" placeholder="Search the docs…" />
            <TextField.Input radius="full" placeholder="Search the docs…" />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-auto">
            {radiusContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-[130px] shadow-lg flex flex-col text-right mb-10 ml-auto rounded-lg p-2">
        <p className="">Next</p>
        <p
          onClick={() => router?.push("/home/doc/tooltip")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          ToolTip
        </p>
      </div>
    </div>
  );
}

export default TextFields;
