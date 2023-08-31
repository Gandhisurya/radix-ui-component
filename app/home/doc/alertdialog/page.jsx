"use client";
import { Box, Button, Flex, AlertDialog, Code } from "@radix-ui/themes";
import React from "react";

import ReactMarkdown from "react-markdown";

import { useRouter } from "next/navigation";

function Alertdialog() {
  const router = useRouter();
  const logoutContent = `

  \`\`\`
  <AlertDialog.Root>
    <AlertDialog.Trigger>
      <Button color="red">Logout account</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
      <AlertDialog.Title>Logout Account</AlertDialog.Title>
      <AlertDialog.Description size="2">
       Are you sure? Do you want do logout your account?
      </AlertDialog.Description>
      <Flex gap="3" mt="4" justify="end">
       <AlertDialog.Cancel>
         <Button variant="soft" color="gray">
           Cancel
         </Button>
       </AlertDialog.Cancel>
       <AlertDialog.Action>
         <Button variant="solid" color="red">
           Logout
         </Button>
       </AlertDialog.Action>
      </Flex>
   </AlertDialog.Content>
</AlertDialog.Root>
  \`\`\`
  `;

  const deleteContent = `

  \`\`\`
  <AlertDialog.Root>
    <AlertDialog.Trigger>
      <Button color="red">Delete Account</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
      <AlertDialog.Title>Logout Account</AlertDialog.Title>
      <AlertDialog.Description size="2">
       Are you sure? Do you want do delete your account?
      </AlertDialog.Description>
      <Flex gap="3" mt="4" justify="end">
       <AlertDialog.Cancel>
         <Button variant="soft" color="gray">
           Cancel
         </Button>
       </AlertDialog.Cancel>
       <AlertDialog.Action>
         <Button variant="solid" color="red">
           Delete
         </Button>
       </AlertDialog.Action>
      </Flex>
   </AlertDialog.Content>
</AlertDialog.Root>
  \`\`\`
  `;

  const rootContent = `

  \`\`\`
  <AlertDialog.Root>
     ! ---- remaining code ---- ! 
  </AlertDialog.Root>
  \`\`\`
  `;

  const triggerContent = `

  \`\`\`
  <AlertDialog.Trigger>
    <Button color="red">Logut Account</Button>
  </AlertDialog.Trigger>
  \`\`\`
  `;

  const contentContent = `

  \`\`\`
  <AlertDialog.Content style={{ maxWidth: 450 }}>
      <AlertDialog.Title>Logout Account</AlertDialog.Title>
      <AlertDialog.Description size="2">
       Are you sure? Do you want do delete your account?
      </AlertDialog.Description>
      <Flex gap="3" mt="4" justify="end">
       <AlertDialog.Cancel>
         <Button variant="soft" color="gray">
           Cancel
         </Button>
       </AlertDialog.Cancel>
       <AlertDialog.Action>
         <Button variant="solid" color="red">
           Delete
         </Button>
       </AlertDialog.Action>
      </Flex>
   </AlertDialog.Content>
  \`\`\`
  `;
  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <p className="mt-20 font-semibold text-3xl">Alert Dialog</p>
      <p className="font-medium mt-2">
        A modal confirmation dialog that interrupts the user and expects a
        response.
      </p>
      <div className="max-w-[600px]">
        <p className="font-semibold mt-3 text-lg">Reference</p>
        <div className="mt-2">
          <p className="text-lg font-semibold underline">Root</p>
          <p className="font-medium">
            Root Contains all the parts of the dialog.
          </p>
          <p className="font-medium">Like</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {rootContent}
          </ReactMarkdown>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold underline">Trigger</p>
          <p className="font-medium">
            Wraps the control that will open the dialog.
          </p>
          <p className="font-medium">Like</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {triggerContent}
          </ReactMarkdown>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold underline">Content</p>
          <p className="font-medium">
            Contains the content of the dialog. This component is based on the
            div element.(title, description, action, cancel)
          </p>
          <p className="font-medium">Like</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {triggerContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="max-w-[600px]">
        <p className="mt-8 font-semibold text-xl">examples</p>
        <div>
          <p className="mt-3 font-medium">1. Logout Account</p>
          <div className="w-[500px] mt-4">
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="red">Logout account</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>Logout Account</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure? Do you want do logout your account?
                </AlertDialog.Description>
                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button variant="solid" color="red">
                      Logout
                    </Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </div>
          <p className="mt-4 font-medium text-lg">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {logoutContent}
          </ReactMarkdown>
        </div>
        <div className="max-w-[600px]">
          <p className="mt-8 font-medium">2. Delete Account</p>
          <div className="w-[500px] mt-4">
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="red">Delete Account</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>Logout Account</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure? Do you want do Delete your account?
                </AlertDialog.Description>
                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button variant="solid" color="red">
                      Delete
                    </Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </div>
          <p className="mt-4 font-medium text-lg">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {deleteContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-[130px] shadow-lg flex flex-col text-right mb-10 ml-auto rounded-lg p-2">
        <p className="">Next</p>
        <p
          onClick={() => router?.push("/home/doc/aspectratio")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Alert Dialog
        </p>
      </div>
    </div>
  );
}

export default Alertdialog;
