"use client";
import React from "react";
import {
  Flex,
  Text,
  Button,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Callout,
  Card,
  Box,
  Checkbox,
  Dialog,
  TextField,
  HoverCard,
  Heading,
  IconButton,
  Inset,
  Popover,
  Grid,
  Tabs,
  TextArea,
  Tooltip,
} from "@radix-ui/themes";

import {
  ExclamationTriangleIcon,
  GitHubLogoIcon,
  InfoCircledIcon,
  Link1Icon,
  MagnifyingGlassIcon,
  PlusIcon,
  Share2Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Docs() {
  const [value, setValue] = React.useState(null);

  const image =
    "https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80";

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
        <p className="font-semibold text-xl mb-5 text-center">Badge</p>
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
        <p className="font-semibold text-xl mb-5 text-center">Callout</p>
        <Callout.Root
          size="1"
          variant="surface" //"soft" | "surface" | "outline"
          color="red"
          // highContrast={true}
          role="alert"
        >
          <Callout.Icon>
            {/* <InfoCircledIcon /> */}
            <ExclamationTriangleIcon />
          </Callout.Icon>
          <Callout.Text>
            You will need admin privileges to install and access this
            application.
          </Callout.Text>
        </Callout.Root>
      </div>
      <div className="my-10 mx-auto w-[90vw] sm:w-[600px]">
        <p className="font-semibold text-xl mb-5 text-center">Card</p>

        <Card
          variant="classic" //"surface" | "classic" | "ghost"
        >
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" size="2" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </div>
      <div className="my-10 mx-auto w-[90vw] sm:w-[600px]">
        <p className="font-semibold text-xl mb-5 text-center">Checkbox</p>

        <Text size="2">
          <Flex direction="column" gap="2">
            <Flex align="center" gap="2">
              <Checkbox id="checkbox-7" />
              <label htmlFor="checkbox-7">Not checked</label>
            </Flex>
            <Flex align="center" gap="2">
              <Checkbox id="checkbox-8" defaultChecked />
              <label htmlFor="checkbox-8">Checked</label>
            </Flex>

            <Flex align="center" gap="2">
              <Checkbox id="checkbox-9" disabled />
              <label htmlFor="checkbox-9">Disabled</label>
            </Flex>

            <Flex align="center" gap="2">
              <Checkbox id="checkbox-10" defaultChecked disabled />
              <label htmlFor="checkbox-10">Disabled checked</label>
            </Flex>
          </Flex>
        </Text>
      </div>
      <div className="my-10 mx-auto">
        <p className="font-semibold text-xl mb-5 text-center">Dialog</p>

        <Dialog.Root>
          <Dialog.Trigger>
            <Button>Edit profile</Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Make changes to your profile.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Name
                </Text>
                <TextField.Input
                  defaultValue="next js"
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Email
                </Text>
                <TextField.Input
                  defaultValue="tailwindcss@example.com"
                  placeholder="Enter your email"
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>Save</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </div>
      <div className="my-10 mx-auto">
        <p className="font-semibold text-xl mb-5 text-center">HoverCard</p>

        <Text>
          Follow{" "}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link
                className="underline"
                href="https://twitter.com/radix_ui"
                target="_blank"
              >
                @radix_ui
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content>
              <Flex gap="4">
                <Avatar
                  size="3"
                  fallback="R"
                  radius="full"
                  src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                />
                <Box>
                  <Heading size="3" as="h3">
                    Radix
                  </Heading>
                  <Text as="div" size="2" color="gray">
                    @radix_ui
                  </Text>

                  <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                    React components, icons, and colors for building
                    high-quality, accessible UI.
                  </Text>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>{" "}
          for updates.
        </Text>
      </div>
      <div className="my-10 mx-auto">
        <p className="font-semibold text-xl mb-5 text-center">IconButton</p>

        <IconButton onClick={() => alert("april fool")}>
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
        <Text className="font-semibold" ml="3">
          search
        </Text>
      </div>
      <div className="my-10 mx-auto">
        <p className="font-semibold text-xl mb-5 text-center">Inset</p>

        <Card size="3" className="w-[90vw] sm:w-[600px]">
          <Flex>
            <Inset side="left" mr="5">
              <Flex
                align="center"
                justify="center"
                px="7"
                style={{ background: "#24292F", height: "100%" }}
              >
                <GitHubLogoIcon color="white" height="40" width="40" />
              </Flex>
            </Inset>
            <Box style={{ maxWidth: 400 }}>
              <Text as="div" color="gray" mb="1" size="2">
                github.com
              </Text>
              <Text
                size={{
                  initial: "2",
                  xs: "3",
                  sm: "4",
                  md: "5",
                  xl: "7",
                }}
              >
                Official Node.js SDK for interacting with the AcmeCorp API.
              </Text>
            </Box>
          </Flex>
        </Card>
      </div>
      <div className="my-10 mx-auto">
        <p className="font-semibold text-xl mb-5 text-center">Popover</p>

        <Popover.Root>
          <Popover.Trigger>
            <Button variant="soft">
              <Share2Icon width="16" height="16" />
              Share image
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 360 }}>
            <Grid columns="120px 1fr">
              <Inset side="left" pr="current">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&auto=format&fit=crop&w=400&q=80"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </Inset>

              <div>
                <Heading size="2" mb="1">
                  Share this image
                </Heading>
                <Text as="p" size="2" mb="4" color="gray">
                  Minimalistic 3D rendering wallpaper.
                </Text>

                <Flex direction="column" align="stretch">
                  <Popover.Close>
                    <Button
                      onClick={() => {
                        setValue(image);
                      }}
                      size="1"
                      variant="soft"
                    >
                      <Link1Icon width="16" height="16" />
                      Copy link
                    </Button>
                  </Popover.Close>
                </Flex>
              </div>
            </Grid>
          </Popover.Content>
        </Popover.Root>
      </div>
      <div className="my-10 mx-auto w-[90vw] sm:w-[600px]">
        <p className="font-semibold text-xl mb-5 text-center">Tabs</p>

        <Tabs.Root defaultValue="account">
          <Tabs.List>
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
      <div className="my-10 mx-auto w-[90vw] sm:w-[600px] ">
        <TextArea
          size="2" //default 2 1 to 3
          variant="soft" // "classic" | "surface" | "soft"
          color="blue"
          placeholder="Reply to comment…"
        />
      </div>
      <div className="my-10 mx-auto w-[90vw] sm:w-[600px]">
        <TextField.Root
          size="3"
          variant="soft" // "classic" | "surface" | "soft"
          color="blue"
          radius="medium" // "none" | "small" | "medium" | "large" | "full"
        >
          <TextField.Slot color="tomato" gap="4">
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input
            size="2"
            variant="soft" //"classic" | "surface" | "soft"
            color="bronze"
            radius="large" //"none" | "small" | "medium" | "large" | "full"
            placeholder="Search the docs…"
          />
        </TextField.Root>
      </div>
      <div className="my-10 mx-auto">
        <Tooltip content="Add to library">
          <IconButton radius="full">
            <PlusIcon />
          </IconButton>
        </Tooltip>
      </div>
    </main>
  );
}
