"use client";
import { IconButton, Table, Tooltip } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@radix-ui/react-icons";

function ToolTip() {
  const router = useRouter();

  const normalContent = `
  
  \`\`\`
   <Tooltip content="Add to library">
     <IconButton radius="full">
       <PlusIcon />
     </IconButton>
   </Tooltip>
  \`\`\`
  `;

  const multiContent = `
  
  \`\`\`
   <Tooltip
     multiline
     content="Add the selected items to your library for usage within your dashboard."  
   >
      <IconButton radius="full">
         <PlusIcon />
      </IconButton> 
   </Tooltip>

 \`\`\`

  `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Tooltip</p>
        <p className="mt-2 font-medium">
          Floating element that provides a control with contextual information
          via pointer or focus.
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
                <Table.RowHeaderCell>multiline</Table.RowHeaderCell>
                <Table.Cell>boolean</Table.Cell>
                <Table.Cell>false</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>content*</Table.RowHeaderCell>
                <Table.Cell>ReactNode</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">1. Normal</p>
        <div className="mt-3 flex flex-col items-start space-y-4">
          <Tooltip content="Add to library">
            <IconButton radius="full">
              <PlusIcon />
            </IconButton>
          </Tooltip>
        </div>
        <p className="mt-3 font-semibold">Code</p>
        <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
          {normalContent}
        </ReactMarkdown>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Multiline</p>
          <p className="my-2">
            Use the <b>multiline</b> prop to wrap content across multiple lines.
          </p>
          <div className="mt-3 flex flex-col items-start space-y-4">
            <Tooltip
              multiline
              content="Add the selected items to your library for usage within your dashboard."
            >
              <IconButton radius="full">
                <PlusIcon />
              </IconButton>
            </Tooltip>
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-scroll">
            {multiContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ToolTip;
