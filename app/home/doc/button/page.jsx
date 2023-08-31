"use client";
import { Badge, Button, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";

function Buttons() {
  const router = useRouter();

  const fallBackContent = `

  \`\`\`
   <Button size="3" variant="soft">
     Edit profile
   </Button>
   <Button size="2" variant="soft">
     Edit profile
   </Button>
   <Button size="1" variant="soft">
     Edit profile
   </Button>
  \`\`\`

`;

  const varientContent = `
    
  \`\`\`
    <Button variant="classic">Edit profile</Button>
    <Button variant="solid">Edit profile</Button>
    <Button variant="soft">Edit profile</Button>
    <Button variant="outline">Edit profile</Button>
    <Button variant="surface">Edit profile</Button>
  \`\`\`
    
    `;

  const colourContent = `
    
 \`\`\`
     <Button color="indigo" variant="soft">
       Edit profile
     </Button>
     <Button color="cyan" variant="soft">
       Edit profile
     </Button>
     <Button color="orange" variant="soft">
       Edit profile
     </Button>
     <Button color="crimson" variant="soft">
       Edit profile
     </Button>
  \`\`\`
    `;

  const radiusContent = `
    
  \`\`\`
    <Button radius="none" variant="soft">
     Edit profile
    </Button>
    <Button radius="large" variant="soft">
     Edit profile
    </Button>
    <Button radius="full" variant="soft">
     Edit profile
    </Button>
  \`\`\`
    
    `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Button</p>
        <p className="mt-2 font-medium">
          Trigger an action or event, such as submitting a form or displaying a
          dialog.
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
                <Table.Cell>Responsive | "1" | "2" | "3" | "4" |</Table.Cell>
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
          <div className="flex items-center space-x-4">
            <Button size="3" variant="soft">
              Edit profile
            </Button>
            <Button size="2" variant="soft">
              Edit profile
            </Button>
            <Button size="1" variant="soft">
              Edit profile
            </Button>
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
          <div className="mt-3 flex items-center space-x-4">
            <Button variant="classic">Edit profile</Button>
            <Button variant="solid">Edit profile</Button>
            <Button variant="soft">Edit profile</Button>
            <Button variant="outline">Edit profile</Button>
            <Button variant="surface">Edit profile</Button>
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
          <div className="mt-3 space-x-4 flex items-center">
            <Button color="indigo" variant="soft">
              Edit profile
            </Button>
            <Button color="cyan" variant="soft">
              Edit profile
            </Button>
            <Button color="orange" variant="soft">
              Edit profile
            </Button>
            <Button color="crimson" variant="soft">
              Edit profile
            </Button>
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {colourContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. Radius</p>
          <p className="my-2">
            Use the radius prop to assign a specific radius value, ignoring the
            global theme.
          </p>
          <div className="mt-3 flex items-center space-x-4">
            <Button radius="none" variant="soft">
              Edit profile
            </Button>
            <Button radius="large" variant="soft">
              Edit profile
            </Button>
            <Button radius="full" variant="soft">
              Edit profile
            </Button>
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
          onClick={() => router?.push("/home/doc/callout")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Callout
        </p>
      </div>
    </div>
  );
}

export default Buttons;
