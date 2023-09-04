"use client";
import { Button, Callout, Link, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

function Tables() {
  const router = useRouter();

  const fallBackContent = `
    
 \`\`\`
  <Table.Root variant="surface">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.RowHeaderCell>react</Table.RowHeaderCell>
        <Table.Cell>react@example.com</Table.Cell>
        <Table.Cell>Developer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.RowHeaderCell>next</Table.RowHeaderCell>
        <Table.Cell>next@example.com</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.RowHeaderCell>javascript</Table.RowHeaderCell>
        <Table.Cell>javascript@example.com</Table.Cell>
        <Table.Cell>Developer</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>

  \`\`\`
    
    `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Table</p>
        <p className="mt-2 font-medium">
          A semantic table for presenting tabular data.
        </p>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="font-semibold text-lg mt-2">Reference</p>
        <p className="font-semibold text-lg my-2">Root</p>
        <p className="font-medium my-1">
          Groups the <b>Header</b> and <b>Body</b> parts. This component is
          based on the <b>table</b> element and supports common margin props.
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
                <Table.Cell>"surface" | "ghost"</Table.Cell>
                <Table.Cell>"ghost"</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <p className="font-semibold text-lg my-2">Row</p>
        <p className="font-medium my-1">
          A row of table cells. Based on the <b>tr</b> element.
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
                <Table.RowHeaderCell>asChild</Table.RowHeaderCell>
                <Table.Cell>boolean</Table.Cell>
                <Table.Cell>false</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>align</Table.RowHeaderCell>
                <Table.Cell>
                  Responsive | "start" | "center" | "end" | "baseline" |
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <p className="font-semibold text-lg my-2">Cell</p>
        <p className="font-medium my-1">
          A basic table cell. This component is based on the <b>td</b> element,
          but uses <b>justify</b> instead of <b>align</b> to control how
          horizontal space is distributed within the table cell.
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
                <Table.RowHeaderCell>asChild</Table.RowHeaderCell>
                <Table.Cell>boolean</Table.Cell>
                <Table.Cell>false</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>justify</Table.RowHeaderCell>
                <Table.Cell>
                  {" "}
                  Responsive | "start" | "center" | "end" |
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>width</Table.RowHeaderCell>
                <Table.Cell> string | number</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <p className="font-semibold text-lg my-2">ColumnHeaderCell</p>
        <p className="font-medium my-1">
          The header of a table column. Based on the <b>th</b> element and
          provides the same props interface as the <b>Cell</b> part.
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
                <Table.RowHeaderCell>asChild</Table.RowHeaderCell>
                <Table.Cell>boolean</Table.Cell>
                <Table.Cell>false</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>justify</Table.RowHeaderCell>
                <Table.Cell>
                  {" "}
                  Responsive | "start" | "center" | "end" |
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>width</Table.RowHeaderCell>
                <Table.Cell> string | number</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <p className="font-semibold text-lg my-2">ColumnRowHeaderCell</p>
        <p className="font-medium my-1">
          The header of a table row. Based on the <b>th</b> element and provides
          the same props interface as the <b>Cell</b> part.
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
                <Table.RowHeaderCell>asChild</Table.RowHeaderCell>
                <Table.Cell>boolean</Table.Cell>
                <Table.Cell>false</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>justify</Table.RowHeaderCell>
                <Table.Cell>
                  Responsive | "start" | "center" | "end" |
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>width</Table.RowHeaderCell>
                <Table.Cell> string | number</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">Size</p>
        <div className="max-w-[600px]">
          <div className="flex flex-col items-start space-y-4">
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>react</Table.RowHeaderCell>
                  <Table.Cell>react@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>next</Table.RowHeaderCell>
                  <Table.Cell>next@example.com</Table.Cell>
                  <Table.Cell>Admin</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>javascript</Table.RowHeaderCell>
                  <Table.Cell>javascript@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {fallBackContent}
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

export default Tables;
