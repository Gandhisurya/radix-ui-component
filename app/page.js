"use client";

import {
  Flex,
  Text,
  Button,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Callout,
} from "@radix-ui/themes";

import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="max-w-[500px] mx-auto">
        <Flex mt="6" direction="column" gap="2">
          <Text className="text-2xl font-semibold">
            Hello from Radix Themes :)
          </Text>
          <div className="mx-auto hover:scale-110 transition-transform  ">
            <Button
              size="2"
              variant="soft" // "classic"  | "solid"  | "soft"  | "surface"  | "outline" "ghost"
              color="amber"
              highContrast={false} // true , false
              radius="small" //"none" | "small" | "medium" | "large" | "full"
              mt="3"
              height="5"
              width="5"
              onClick={() => alert(`april fool`)}
            >
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
      <div className="mt-12 text-center ">
        <p className="text-xl font-semibold">Aspect Ratio</p>
        <div className="h-[300px] overflow-y-scroll">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
              alt="A house in a forest"
              style={{
                objectFit: "cover",
                width: "50%",
                height: "50%",
                borderRadius: "var(--radius-2)",
              }}
              className="mx-auto mt-5"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="mt-5 text-center">
        <p className="font-semibold text-xl">Avatar</p>
        <div className="flex items-center justify-center mt-5">
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="S"
            variant="soft" // soft, solid
            size="6"
            color="cyan"
            highContrast={false}
            radius="full"
            mx="3"
          />
          <Avatar size="6" mx="3" fallback="S" />
        </div>
      </div>
      <div className="my-10 mx-auto">
        <Flex gap="4">
          <Badge
            highContrast={false}
            radius="medium"
            variant="solid"
            color="orange"
            // size="2"
          >
            In progress
          </Badge>
          <Badge
            // size="1"
            variant="surface"
            color="blue"
          >
            In review
          </Badge>
          <Badge variant="soft" color="cyan">
            All most done
          </Badge>
          <Badge variant="outline" color="green">
            Complete
          </Badge>
        </Flex>
      </div>
      <div className="my-10 mx-auto w-[90vw] sm:w-[600px]">
        <Callout.Root
          size="1"
          variant="surface" //"soft" | "surface" | "outline"
          color="red"
          // highContrast={true}
        >
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            You will need admin privileges to install and access this
            application.
          </Callout.Text>
        </Callout.Root>
      </div>
    </main>
  );
}
