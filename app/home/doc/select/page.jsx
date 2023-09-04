"use client";
import { Button, Callout, Flex, Link, Select, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

function Selects() {
  const router = useRouter();

  const alterContent = `
    
 \`\`\`
  <Flex gap="3" align="center">
    <Select.Root size="3" defaultValue="apple">
      <Select.Trigger />
       <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
       </Select.Content>
    </Select.Root>
    <Select.Root size="2" defaultValue="apple">
      <Select.Trigger />
       <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
    <Select.Root size="1" defaultValue="apple">
      <Select.Trigger />
       <Select.Content>
         <Select.Item value="apple">Apple</Select.Item>
         <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
  </Flex>
  \`\`\`
    
    `;

  const sizeContent = `
        
  \`\`\`
  <Flex gap="3" align="center">
    <Select.Root size="3" defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
    <Select.Root size="2" defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
    <Select.Root size="1" defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
  </Flex>
  \`\`\`
        
        `;

  const varientContent = `
\`\`\`
 <Flex gap="3" align="center">
   <Select.Root defaultValue="apple">
     <Select.Trigger variant="surface" />
     <Select.Content>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="orange">Orange</Select.Item>
     </Select.Content>
   </Select.Root>

   <Select.Root defaultValue="apple">
     <Select.Trigger variant="classic" />
     <Select.Content>
       <Select.Item value="apple">Apple</Select.Item>
       <Select.Item value="orange">Orange</Select.Item>
     </Select.Content>
   </Select.Root>

   <Select.Root defaultValue="apple">
     <Select.Trigger variant="soft" />
     <Select.Content>
       <Select.Item value="apple">Apple</Select.Item>
       <Select.Item value="orange">Orange</Select.Item>
     </Select.Content>
   </Select.Root>
 </Flex>
\`\`\`
  
  `;

  const ghostContent = `
  \`\`\`
  <Flex gap="3" align="center">
   <Select.Root defaultValue="apple">
    <Select.Trigger variant="surface" />
     <Select.Content>
       <Select.Item value="apple">Apple</Select.Item>
       <Select.Item value="orange">Orange</Select.Item>
     </Select.Content>
   </Select.Root>
   <Select.Root defaultValue="apple">
    <Select.Trigger variant="ghost" />
     <Select.Content>
       <Select.Item value="apple">Apple</Select.Item>
       <Select.Item value="orange">Orange</Select.Item>
     </Select.Content>
    </Select.Root>
  </Flex>
  \`\`\`
  
  `;

  const colorCotent = `
  
  \`\`\`
  <Flex gap="3">
    <Select.Root defaultValue="apple">
      <Select.Trigger color="indigo" variant="soft" />
       <Select.Content color="indigo">
         <Select.Item value="apple">Apple</Select.Item>
         <Select.Item value="orange">Orange</Select.Item>
       </Select.Content>
    </Select.Root>
    <Select.Root defaultValue="apple">
      <Select.Trigger color="cyan" variant="soft" />
        <Select.Content color="cyan">
         <Select.Item value="apple">Apple</Select.Item>
         <Select.Item value="orange">Orange</Select.Item>
       </Select.Content>
    </Select.Root>
    <Select.Root defaultValue="apple">
      <Select.Trigger color="orange" variant="soft" />
       <Select.Content color="orange">
         <Select.Item value="apple">Apple</Select.Item>
         <Select.Item value="orange">Orange</Select.Item>
       </Select.Content>
    </Select.Root>
    <Select.Root defaultValue="apple">
      <Select.Trigger color="crimson" variant="soft" />
       <Select.Content color="crimson">
         <Select.Item value="apple">Apple</Select.Item>
         <Select.Item value="orange">Orange</Select.Item>
       </Select.Content>
    </Select.Root>
  </Flex>
  \`\`\`
  `;

  const highContent = `
  \`\`\`
  <Flex gap="3">
  <Select.Root defaultValue="apple">
    <Select.Trigger variant="soft" />
    <Select.Content variant="solid">
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="orange">Orange</Select.Item>
    </Select.Content>
  </Select.Root>

  <Select.Root defaultValue="apple">
    <Select.Trigger variant="soft" />
    <Select.Content variant="solid" highContrast>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="orange">Orange</Select.Item>
    </Select.Content>
  </Select.Root>
</Flex>
  \`\`\`
  `;

  const radiusContent = `
  \`\`\`
<Flex gap="3">
   <Select.Root defaultValue="apple">
     <Select.Trigger radius="none" />
     <Select.Content>
       <Select.Item value="apple">Apple</Select.Item>
       <Select.Item value="orange">Orange</Select.Item>
     </Select.Content>
   </Select.Root>

   <Select.Root defaultValue="apple">
     <Select.Trigger radius="large" />
     <Select.Content>
       <Select.Item value="apple">Apple</Select.Item>
       <Select.Item value="orange">Orange</Select.Item>
     </Select.Content>
   </Select.Root>

   <Select.Root defaultValue="apple">
     <Select.Trigger radius="full" />
     <Select.Content>
       <Select.Item value="apple">Apple</Select.Item>
       <Select.Item value="orange">Orange</Select.Item>
     </Select.Content>
   </Select.Root>
</Flex>
  \`\`\`
  `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Select</p>
        <p className="mt-2 font-medium">
          Displays a list of options for the user to pick from—triggered by a
          button.
        </p>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="font-semibold text-lg mt-2">Reference</p>
        <p className="font-semibold text-lg my-2">Root</p>
        <p className="font-medium my-1">
          Contains all the parts of a select. It inherits props from the Radix
          Select.Root part.
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
            </Table.Body>
          </Table.Root>
        </div>
        <p className="font-semibold text-lg my-2">Trigger</p>
        <p className="font-medium my-1">
          The button that toggles the select. This component inherits props from
          the Radix Select.Trigger and Select.Value parts. It supports common
          margin props.
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
                <Table.RowHeaderCell>variant</Table.RowHeaderCell>
                <Table.Cell>
                  "classic" | "surface" | "soft" | "ghost"
                </Table.Cell>
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
        <p className="font-semibold text-lg my-2">Content</p>
        <p className="font-medium my-1">
          The component that pops out when the select is open. It inherits props
          from the Radix Select.Portal and Select.Content parts.
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
                <Table.RowHeaderCell>variant</Table.RowHeaderCell>
                <Table.Cell>"solid" | "soft"</Table.Cell>
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
        <p className="font-semibold text-lg my-2">Item</p>
        <p className=" my-1">
          The component that contains the select items. It inherits props from
          the Radix Select.Item part.
        </p>
        <p className="font-semibold text-lg my-2">Group</p>
        <p className="my-1">
          Used to group multiple items. It inherits props from the Radix
          Select.Group part. Use in conjunction with Select.Label to ensure good
          accessibility via automatic labelling.
        </p>
        <p className="font-semibold text-lg my-2">Label</p>
        <p className=" my-1">
          Used to render the label of a group, it isn't focusable using arrow
          keys. It inherits props from the Radix Select.Label part.
        </p>
        <p className="font-semibold text-lg my-2">Separator</p>
        <p className=" my-1">
          Used to visually separate items in the Select. It inherits props from
          the Radix Select.Separator part.
        </p>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">1. Alternative positioning</p>
        <p className="my-2">
          Set the position prop to popper and use the side prop to position
          items below the trigger.
        </p>
        <div>
          <Flex gap="3" align="center">
            <Select.Root size="3" defaultValue="apple">
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root size="2" defaultValue="apple">
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root size="1" defaultValue="apple">
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {alterContent}
          </ReactMarkdown>
        </div>
        <p className="font-semibold my-3 text-xl">2. Size</p>
        <p className="my-2">Use the size prop to control the size.</p>
        <div>
          <Flex gap="3" align="center">
            <Select.Root size="3" defaultValue="apple">
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root size="2" defaultValue="apple">
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root size="1" defaultValue="apple">
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {sizeContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">3. Variant</p>
          <p className="my-2">
            Use the variant prop on Trigger and Content to customize the visual
            style.
          </p>
          <Flex gap="3" align="center">
            <Select.Root defaultValue="apple">
              <Select.Trigger variant="surface" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root defaultValue="apple">
              <Select.Trigger variant="classic" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root defaultValue="apple">
              <Select.Trigger variant="soft" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {varientContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. Ghost</p>
          <p className="my-2">
            Use the ghost trigger variant to render the trigger without a
            visually containing element. Ghost triggers behave differently in
            layout as they use a negative margin to optically align themselves
            against their siblings while maintaining their padded active and
            hover states.
          </p>
          <Flex gap="3" align="center">
            <Select.Root defaultValue="apple">
              <Select.Trigger variant="surface" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root defaultValue="apple">
              <Select.Trigger variant="ghost" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {ghostContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">5. Color</p>
          <p className="my-2">
            Use the variant prop on Trigger and Content to customize the visual
            style.
          </p>
          <Flex gap="3">
            <Select.Root defaultValue="apple">
              <Select.Trigger color="indigo" variant="soft" />
              <Select.Content color="indigo">
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root defaultValue="apple">
              <Select.Trigger color="cyan" variant="soft" />
              <Select.Content color="cyan">
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root defaultValue="apple">
              <Select.Trigger color="orange" variant="soft" />
              <Select.Content color="orange">
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root defaultValue="apple">
              <Select.Trigger color="crimson" variant="soft" />
              <Select.Content color="crimson">
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {colorCotent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">6. High-contrast</p>
          <p className="my-2">
            Use the highContrast prop on Content to increase item contrast.
          </p>
          <Flex gap="3">
            <Select.Root defaultValue="apple">
              <Select.Trigger variant="soft" />
              <Select.Content variant="solid">
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root defaultValue="apple">
              <Select.Trigger variant="soft" />
              <Select.Content variant="solid" highContrast>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {highContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">7. Radius</p>
          <p className="my-2">
            Use the radius prop to assign a specific radius value, ignoring the
            global theme.
          </p>
          <Flex gap="3">
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root defaultValue="apple">
              <Select.Trigger radius="large" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root defaultValue="apple">
              <Select.Trigger radius="full" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {radiusContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-[130px] shadow-lg flex flex-col text-right mb-10 ml-auto rounded-lg p-2">
        <p className="">Next</p>
        <p
          onClick={() => router?.push("/home/doc/seperator")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Seperator
        </p>
      </div>
    </div>
  );
}

export default Selects;
