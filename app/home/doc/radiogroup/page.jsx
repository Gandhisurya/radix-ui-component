"use client";
import { Flex, Grid, RadioGroup, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";

function Radio() {
  const router = useRouter();

  const fallBackContent = `
    
   \`\`\`
      
   \`\`\`
    
    `;

  const varientContent = `
        
    \`\`\`
     
   \`\`\`
        
        `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Radio Group</p>
        <p className="mt-2 font-medium">
          A set of interactive radio buttons where only one can be selected at a
          time.
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
                <Table.Cell>Responsive "1" | "2" </Table.Cell>
                <Table.Cell>"1"</Table.Cell>
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
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">1. Size</p>
        <p className="my-2">Use the size prop to control the size.</p>
        <div>
          <Flex align="center" gap="2">
            <RadioGroup.Root size="2" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root size="1" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {fallBackContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Variant</p>
          <p className="my-2">
            Use the variant prop to control the visual style.
          </p>
          <Flex gap="2">
            <Flex direction="column" asChild gap="2">
              <RadioGroup.Root variant="surface" defaultValue="1">
                <RadioGroup.Item value="1" />
                <RadioGroup.Item value="2" />
              </RadioGroup.Root>
            </Flex>

            <Flex direction="column" asChild gap="2">
              <RadioGroup.Root variant="classic" defaultValue="1">
                <RadioGroup.Item value="1" />
                <RadioGroup.Item value="2" />
              </RadioGroup.Root>
            </Flex>

            <Flex direction="column" asChild gap="2">
              <RadioGroup.Root variant="soft" defaultValue="1">
                <RadioGroup.Item value="1" />
                <RadioGroup.Item value="2" />
              </RadioGroup.Root>
            </Flex>
          </Flex>
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
          <Flex gap="2">
            <RadioGroup.Root color="indigo" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root color="cyan" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root color="orange" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root color="crimson" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>
          </Flex>

          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {varientContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. High-contrast</p>
          <p className="my-2">
            Use the highContrast prop to add additional contrast.
          </p>
          <Grid columns="3" gap="2" display="inline-grid">
            <RadioGroup.Root variant="classic" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root variant="surface" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root variant="soft" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root variant="classic" defaultValue="1" highContrast>
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root variant="surface" defaultValue="1" highContrast>
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root variant="soft" defaultValue="1" highContrast>
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>
          </Grid>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {varientContent}
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

export default Radio;
