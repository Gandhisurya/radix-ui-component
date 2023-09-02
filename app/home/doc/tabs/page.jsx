"use client";
import { Box, Table, Tabs, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";

function Tab() {
  const router = useRouter();

  const fallBackContent = `
    
   \`\`\`

   <Tabs.Root defaultValue="account">
     <Tabs.List size="1">
       <Tabs.Trigger value="account">Account</Tabs.Trigger>
       <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
       <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
     </Tabs.List>
    <Box px="2" pt="2" pb="2">
      <Tabs.Content value="account">
        <Text size="2">Make changes to your account.</Text>
      </Tabs.Content>
      <Tabs.Content value="documents">
        <Text size="2">Access and update your documents.</Text>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <Text size="2">
          Edit your profile or update contact information.
        </Text>
      </Tabs.Content>
    </Box>
   </Tabs.Root>

   <Tabs.Root defaultValue="account">
     <Tabs.List size="2">
       <Tabs.Trigger value="account">Account</Tabs.Trigger>
       <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
       <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
     </Tabs.List>
    <Box px="4" pt="3" pb="2">
      <Tabs.Content value="account">
        <Text size="2">Make changes to your account.</Text>
      </Tabs.Content>
      <Tabs.Content value="documents">
        <Text size="2">Access and update your documents.</Text>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <Text size="2">
          Edit your profile or update contact information.
        </Text>
      </Tabs.Content>
    </Box>
  </Tabs.Root>

   \`\`\`
    
    `;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Tabs</p>
        <p className="mt-2 font-medium">
          Set of content sections to be displayed one at a time.
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
                <Table.Cell>Responsive | "1" | "2" |</Table.Cell>
                <Table.Cell>"2"</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div className="max-w-[600px] mt-3">
        <p className="my-2 font-semibold text-lg">Examples</p>
        <p className="font-semibold my-3 text-xl">1. Size</p>
        <div>
          <div className="flex flex-col items-start space-y-4 border p-3 rounded-lg">
            <Tabs.Root defaultValue="account">
              <Tabs.List size="1">
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              </Tabs.List>
              <Box px="2" pt="2" pb="2">
                <Tabs.Content value="account">
                  <Text size="2">Make changes to your account.</Text>
                </Tabs.Content>
                <Tabs.Content value="documents">
                  <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>
                <Tabs.Content value="settings">
                  <Text size="2">
                    Edit your profile or update contact information.
                  </Text>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
            <Tabs.Root defaultValue="account">
              <Tabs.List size="2">
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              </Tabs.List>
              <Box px="4" pt="3" pb="2">
                <Tabs.Content value="account">
                  <Text size="2">Make changes to your account.</Text>
                </Tabs.Content>
                <Tabs.Content value="documents">
                  <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>
                <Tabs.Content value="settings">
                  <Text size="2">
                    Edit your profile or update contact information.
                  </Text>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
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

export default Tab;
