"use client";
import { Box, Flex, Grid, ScrollArea, Table, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";

function Scroll() {
  const router = useRouter();

  const sizeContent = `
    
   \`\`\`
   <Flex direction="column" gap="2">
    <ScrollArea
     size="1"
     type="always"
     scrollbars="horizontal"
     style={{ width: 300, height: 12 }}
    >
     <Box style={{ width: 800, height: 1 }} />
    </ScrollArea>

    <ScrollArea
     size="2"
     type="always"
     scrollbars="horizontal"
     style={{ width: 350, height: 16 }}
    >
     <Box style={{ width: 900, height: 1 }} />
    </ScrollArea>

    <ScrollArea
     size="3"
     type="always"
     scrollbars="horizontal"
     style={{ width: 400, height: 20 }}
    >
     <Box style={{ width: 1000, height: 1 }} />
    </ScrollArea>
  </Flex>
   \`\`\`
    
    `;

  const radiusContent = `
        
  \`\`\`
    <Flex direction="column" gap="3">
      <ScrollArea
        radius="full"
        size="3"
        type="always"
        scrollbars="horizontal"
        style={{ width: 350, height: 20 }}
      >
         <Box style={{ width: 800, height: 1 }} />
    </ScrollArea>

    <ScrollArea
      radius="large"
      size="3"
      type="always"
      scrollbars="horizontal"
      style={{ width: 350, height: 20 }}
    >
      <Box style={{ width: 800, height: 1 }} />
    </ScrollArea>

    <ScrollArea
      radius="full"
      size="3"
      type="always"
      scrollbars="horizontal"
      style={{ width: 350, height: 20 }}
    >
      <Box style={{ width: 800, height: 1 }} />
    </ScrollArea>
  </Flex>

\`\`\`
        
        `;

  const scrollContent = `
  
  \`\`\`
<Grid columns="2" gap="2">
  <ScrollArea
    type="always"
    scrollbars="vertical"
    style={{ height: 150 }}
  >
    <Flex p="2" pr="8" direction="column" gap="4">
      <Text size="2" trim="both">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quidem eligendi fugit blanditiis natus quam distinctio
        consequuntur odio laboriosam facilis, quaerat, asperiores nam
        quia quo eius repellendus sit iure quibusdam. Architecto.
      </Text>

      <Text size="2" trim="both">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quidem eligendi fugit blanditiis natus quam distinctio
        consequuntur odio laboriosam facilis, quaerat, asperiores nam
        quia quo eius repellendus sit iure quibusdam. Architecto.
      </Text>
    </Flex>
  </ScrollArea>

  <ScrollArea
    type="always"
    scrollbars="horizontal"
    style={{ height: 150 }}
  >
    <Flex gap="4" p="2" style={{ width: 700 }}>
      <Text size="2" trim="both">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quidem eligendi fugit blanditiis natus quam distinctio
        consequuntur odio laboriosam facilis, quaerat, asperiores nam
        quia quo eius repellendus sit iure quibusdam. Architecto.
      </Text>

      <Text size="2" trim="both">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quidem eligendi fugit blanditiis natus quam distinctio
        consequuntur odio laboriosam facilis, quaerat, asperiores nam
        quia quo eius repellendus sit iure quibusdam. Architecto.
      </Text>
    </Flex>
  </ScrollArea>
</Grid>
  \`\`\`
  `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Scroll Area</p>
        <p className="mt-2 font-medium">
          Custom styled, cross-browser scrollable area using native
          functionality.
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
                <Table.RowHeaderCell>radius</Table.RowHeaderCell>
                <Table.Cell>
                  "none" | "small" | "medium" | "large" | "full"
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>scrollbars</Table.RowHeaderCell>
                <Table.Cell>"vertical" | "horizontal" | "both"</Table.Cell>
                <Table.Cell>"both"</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">1. Size</p>
        <div>
          <Flex direction="column" gap="2">
            <ScrollArea
              size="1"
              type="always"
              scrollbars="horizontal"
              style={{ width: 300, height: 12 }}
            >
              <Box style={{ width: 800, height: 1 }} />
            </ScrollArea>

            <ScrollArea
              size="2"
              type="always"
              scrollbars="horizontal"
              style={{ width: 350, height: 16 }}
            >
              <Box style={{ width: 900, height: 1 }} />
            </ScrollArea>

            <ScrollArea
              size="3"
              type="always"
              scrollbars="horizontal"
              style={{ width: 400, height: 20 }}
            >
              <Box style={{ width: 1000, height: 1 }} />
            </ScrollArea>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-x-scroll">
            {sizeContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Radius</p>
          <p className="my-2">
            Use the radius prop to assign a specific radius to the handles,
            ignoring the global theme.
          </p>
          <Flex direction="column" gap="3">
            <ScrollArea
              radius="none"
              size="3"
              type="always"
              scrollbars="horizontal"
              style={{ width: 350, height: 20 }}
            >
              <Box style={{ width: 800, height: 1 }} />
            </ScrollArea>

            <ScrollArea
              radius="large"
              size="3"
              type="always"
              scrollbars="horizontal"
              style={{ width: 350, height: 20 }}
            >
              <Box style={{ width: 800, height: 1 }} />
            </ScrollArea>

            <ScrollArea
              radius="full"
              size="3"
              type="always"
              scrollbars="horizontal"
              style={{ width: 350, height: 20 }}
            >
              <Box style={{ width: 800, height: 1 }} />
            </ScrollArea>
          </Flex>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-x-scroll">
            {radiusContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">3. Scollbars</p>
          <p className="my-2">
            Use the scrollbars prop to limit scrollable axes.
          </p>
          <Grid columns="2" gap="2">
            <ScrollArea
              type="always"
              scrollbars="vertical"
              style={{ height: 150 }}
            >
              <Flex p="2" pr="8" direction="column" gap="4">
                <Text size="2" trim="both">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem eligendi fugit blanditiis natus quam distinctio
                  consequuntur odio laboriosam facilis, quaerat, asperiores nam
                  quia quo eius repellendus sit iure quibusdam. Architecto.
                </Text>

                <Text size="2" trim="both">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem eligendi fugit blanditiis natus quam distinctio
                  consequuntur odio laboriosam facilis, quaerat, asperiores nam
                  quia quo eius repellendus sit iure quibusdam. Architecto.
                </Text>
              </Flex>
            </ScrollArea>

            <ScrollArea
              type="always"
              scrollbars="horizontal"
              style={{ height: 150 }}
            >
              <Flex gap="4" p="2" style={{ width: 700 }}>
                <Text size="2" trim="both">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem eligendi fugit blanditiis natus quam distinctio
                  consequuntur odio laboriosam facilis, quaerat, asperiores nam
                  quia quo eius repellendus sit iure quibusdam. Architecto.
                </Text>

                <Text size="2" trim="both">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem eligendi fugit blanditiis natus quam distinctio
                  consequuntur odio laboriosam facilis, quaerat, asperiores nam
                  quia quo eius repellendus sit iure quibusdam. Architecto.
                </Text>
              </Flex>
            </ScrollArea>
          </Grid>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100 overflow-x-scroll">
            {scrollContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-[130px] shadow-lg flex flex-col text-right mb-10 ml-auto rounded-lg p-2">
        <p className="">Next</p>
        <p
          onClick={() => router?.push("/home/doc/select")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Select
        </p>
      </div>
    </div>
  );
}

export default Scroll;
