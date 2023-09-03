"use client";
import { Button, Callout, Link, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

function Call() {
  const router = useRouter();

  const fallBackContent = `
  
 \`\`\`
    <Callout.Root size="3">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need admin privileges to install and access this
      application.
    </Callout.Text>
  </Callout.Root>

  <Callout.Root size="2">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need admin privileges to install and access this
      application.
    </Callout.Text>
  </Callout.Root>

  <Callout.Root size="1">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need admin privileges to install and access this
      application.
    </Callout.Text>
  </Callout.Root>
 \`\`\`
  
  `;

  const varientContent = `
      
  \`\`\`
    <Callout.Root variant="soft">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need <Link href="#">admin privileges</Link> 
      to install and access
      this application.
    </Callout.Text>
  </Callout.Root>

  <Callout.Root variant="outline">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need <Link href="#">admin privileges</Link> 
      to install and access
      this application.
    </Callout.Text>
  </Callout.Root>

  <Callout.Root variant="surface">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need <Link href="#">admin privileges</Link> 
      to install and access
      this application.
    </Callout.Text>
  </Callout.Root>
 \`\`\`
      
      `;

  const colourContent = `
      
   \`\`\`
   <Callout.Root color="blue">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need <Link href="#">admin privileges</Link> 
      to install and access
      this application.
    </Callout.Text>
   </Callout.Root>

   <Callout.Root color="green">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need <Link href="#">admin privileges</Link> 
      to install and access
      this application.
    </Callout.Text>
   </Callout.Root>

   <Callout.Root color="red">
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      You will need <Link href="#">admin privileges</Link> 
      to install and access
      this application.
    </Callout.Text>
   </Callout.Root>
\`\`\`
      `;

  const radiusContent = `
      
  \`\`\`
   <Callout.Root color="red" role="alert">
     <Callout.Icon>
       <ExclamationTriangleIcon />
     </Callout.Icon>
     <Callout.Text>
       Access denied. Please contact the network administrator to view
       this page.
     </Callout.Text>
   </Callout.Root>
   \`\`\`
      
      `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Callout</p>
        <p className="mt-2 font-medium">
          A short message to attract user's attention.
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
                <Table.RowHeaderCell>variant</Table.RowHeaderCell>
                <Table.Cell>enum</Table.Cell>
                <Table.Cell>"solid"</Table.Cell>
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
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">1. Size</p>
        <div>
          <div className="flex flex-col items-start space-y-4">
            <Callout.Root size="3">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need admin privileges to install and access this
                application.
              </Callout.Text>
            </Callout.Root>

            <Callout.Root size="2">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need admin privileges to install and access this
                application.
              </Callout.Text>
            </Callout.Root>

            <Callout.Root size="1">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need admin privileges to install and access this
                application.
              </Callout.Text>
            </Callout.Root>
          </div>
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
          <div className="mt-3 flex flex-col items-start space-y-4">
            <Callout.Root variant="soft">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need <Link href="#">admin privileges</Link> to install
                and access this application.
              </Callout.Text>
            </Callout.Root>
            <Callout.Root variant="outline">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need <Link href="#">admin privileges</Link> to install
                and access this application.
              </Callout.Text>
            </Callout.Root>
            <Callout.Root variant="surface">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need <Link href="#">admin privileges</Link> to install
                and access this application.
              </Callout.Text>
            </Callout.Root>
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {varientContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">3. Color</p>
          <p className="my-2">
            Use the color prop to assign a specific color, ignoring the global
            theme.
          </p>
          <div className="mt-3 space-y-4 flex  flex-col items-start">
            <Callout.Root color="blue">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need <Link href="#">admin privileges</Link> to install
                and access this application.
              </Callout.Text>
            </Callout.Root>
            <Callout.Root color="green">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need <Link href="#">admin privileges</Link> to install
                and access this application.
              </Callout.Text>
            </Callout.Root>
            <Callout.Root color="red">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need <Link href="#">admin privileges</Link> to install
                and access this application.
              </Callout.Text>
            </Callout.Root>
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {colourContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. As alert</p>
          <p className="my-2">
            Add a native WAI-ARIA alert role to the callout when the user’s
            immediate attention is required, like when an error message appears.
            The screen reader will be interrupted, announcing the new content
            immediately.
          </p>
          <div className="mt-3 flex items-center space-x-4">
            <Callout.Root color="red" role="alert">
              <Callout.Icon>
                <ExclamationTriangleIcon />
              </Callout.Icon>
              <Callout.Text>
                Access denied. Please contact the network administrator to view
                this page.
              </Callout.Text>
            </Callout.Root>
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
          onClick={() => router?.push("/home/doc/card")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Card
        </p>
      </div>
    </div>
  );
}

export default Call;
