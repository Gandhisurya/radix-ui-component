"use client";
import {
  Button,
  Callout,
  Flex,
  Grid,
  Link,
  Slider,
  Switch,
  Table,
} from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

function Sliders() {
  const router = useRouter();

  const sizeContent = `
    
   \`\`\`
    <Slider size="1" defaultValue={[25]} />
    <Slider size="2" defaultValue={[50]} />
    <Slider size="3" defaultValue={[75]} />
   \`\`\`
    
    `;

  const varientContent = `
        
   \`\`\`
    <Slider variant="surface" defaultValue={[75]} />
    <Slider variant="classic" defaultValue={[50]} />
    <Slider variant="soft" defaultValue={[25]} />
   \`\`\`
        
        `;

  const colorContent = `
        
   \`\`\`
     <Slider color="indigo" defaultValue={[25]} orientation="vertical" />
     <Slider color="cyan" defaultValue={[50]} orientation="vertical" />
     <Slider color="orange" defaultValue={[75]} orientation="vertical" />
     <Slider color="crimson" defaultValue={[100]} orientation="vertical" />
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

  const rangeContent = `
  
  \`\`\`
  <Slider defaultValue={[25, 75]} />
  \`\`\`
  `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl">Slider</p>
        <p className="mt-2 font-medium">
          Provides user selection from a range of values.
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
        <p className="my-2">Use the size prop to control the size.</p>
        <div>
          <div className="flex flex-col items-start space-y-4">
            <Slider size="1" defaultValue={[25]} />
            <Slider size="2" defaultValue={[50]} />
            <Slider size="3" defaultValue={[75]} />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-scroll">
            {sizeContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Variant</p>
          <p className="my-2">
            Use the variant prop to control the visual style.
          </p>
          <Flex direction="column" gap="4" style={{ maxWidth: 450 }}>
            <Slider variant="surface" defaultValue={[75]} />
            <Slider variant="classic" defaultValue={[50]} />
            <Slider variant="soft" defaultValue={[25]} />
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-scroll">
            {varientContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">3. Color</p>
          <p className="my-2">
            Use the variant properties to control the visual style.
          </p>
          <Flex gap="4" style={{ height: 75 }}>
            <Slider color="indigo" defaultValue={[25]} orientation="vertical" />
            <Slider color="cyan" defaultValue={[50]} orientation="vertical" />
            <Slider color="orange" defaultValue={[75]} orientation="vertical" />
            <Slider
              color="crimson"
              defaultValue={[100]}
              orientation="vertical"
            />
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-scroll">
            {colorContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. High-contrast</p>
          <p className="my-2">
            Use the variant properties to control the visual style.
          </p>
          <Grid columns="2" gap="4" style={{ maxWidth: 450 }}>
            <Slider variant="surface" defaultValue={[75]} />
            <Slider variant="surface" defaultValue={[75]} highContrast />

            <Slider variant="classic" defaultValue={[50]} />
            <Slider variant="classic" defaultValue={[50]} highContrast />

            <Slider variant="soft" defaultValue={[25]} />
            <Slider variant="soft" defaultValue={[25]} highContrast />
          </Grid>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-scroll">
            {highContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">5. Radius</p>
          <p className="my-2">
            Use the radius prop to assign a specific radius value, ignoring the
            global theme.
          </p>
          <Flex gap="4" style={{ height: 75 }}>
            <Slider defaultValue={[50]} radius="none" orientation="vertical" />
            <Slider defaultValue={[50]} radius="large" orientation="vertical" />
            <Slider defaultValue={[50]} radius="full" orientation="vertical" />
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-scroll">
            {radiusContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">6. Range</p>
          <p className="my-2">
            Provide multiple values to create a range slider.
          </p>
          <Slider defaultValue={[25, 75]} />
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-y-scroll">
            {rangeContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-[130px] shadow-lg flex flex-col text-right mb-10 ml-auto rounded-lg p-2">
        <p className="">Next</p>
        <p
          onClick={() => router?.push("/home/doc/switch")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Switch
        </p>
      </div>
    </div>
  );
}

export default Sliders;
