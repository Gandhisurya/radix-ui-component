"use client";

import { Flex, Text, Button, AlertDialog } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="max-w-[500px] mx-auto">
        <Flex mt="6" direction="column" gap="2">
          <Text className="text-2xl font-semibold">
            Hello from Radix Themes :)
          </Text>
          <div className="mx-auto hover:scale-110 transition-transform  ">
            <Button mt="3" width="5" onClick={() => alert(`april fool`)}>
              Let's go
            </Button>
          </div>
        </Flex>
      </div>
      <div className="mx-auto mt-12">
        <p className="font-semibold text-xl mb-5 text-center">alert box</p>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red">Revoke access</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 450 }}>
            <AlertDialog.Title>Revoke access</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Are you sure? This application will no longer be accessible and
              any existing sessions will be expired.
            </AlertDialog.Description>
            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="solid" color="red">
                  Revoke access
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </main>
  );
}
