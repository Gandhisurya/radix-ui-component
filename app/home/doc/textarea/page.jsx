"use client";
import {
  Button,
  Callout,
  Link,
  Table,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
function TextAreas() {
  const router = useRouter();

  const sizeContent = `
        
  \`\`\`

    <TextArea color="blue" variant="soft" placeholder="Reply to comment…" />
    <TextArea color="green" variant="soft" placeholder="Reply to comment…" />
    <TextArea color="red" variant="soft" placeholder="Reply to comment…" />

 \`\`\`
      
      `;

  const varientContent = `
        
  \`\`\`

      <TextArea color="blue" variant="soft" placeholder="Reply to comment…" />
      <TextArea color="green" variant="soft" placeholder="Reply to comment…" />
      <TextArea color="red" variant="soft" placeholder="Reply to comment…" />

  \`\`\`
          
          `;

  const colorContent = `
        
  \`\`\`

    <TextArea color="blue" variant="soft" placeholder="Reply to comment…" />
    <TextArea color="green" variant="soft" placeholder="Reply to comment…" />
    <TextArea color="red" variant="soft" placeholder="Reply to comment…" />

   \`\`\`
        
        `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Text Area</p>
        <p className="mt-2 font-medium">Captures multi-line user input.</p>
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
                <Table.RowHeaderCell>asChild</Table.RowHeaderCell>
                <Table.Cell>boolean</Table.Cell>
                <Table.Cell>false</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>size</Table.RowHeaderCell>
                <Table.Cell>Responsive | "1" | "2" | "3" |</Table.Cell>
                <Table.Cell>"2"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>variant</Table.RowHeaderCell>
                <Table.Cell>enum</Table.Cell>
                <Table.Cell>"solid"</Table.Cell>
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
            <TextArea size="1" placeholder="Reply to comment…" />
            <TextArea size="2" placeholder="Reply to comment…" />
            <TextArea size="3" placeholder="Reply to comment…" />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-auto">
            {sizeContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Variant</p>
          <p className="my-2">
            Use the variant prop to control the visual style.
          </p>
          <div className="mt-3 flex flex-col items-start space-y-4">
            <TextArea variant="surface" placeholder="Reply to comment…" />
            <TextArea variant="classic" placeholder="Reply to comment…" />
            <TextArea variant="soft" placeholder="Reply to comment…" />
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
            <TextArea
              color="blue"
              variant="soft"
              placeholder="Reply to comment…"
            />
            <TextArea
              color="green"
              variant="soft"
              placeholder="Reply to comment…"
            />
            <TextArea
              color="red"
              variant="soft"
              placeholder="Reply to comment…"
            />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-auto">
            {colorContent}
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

export default TextAreas;
