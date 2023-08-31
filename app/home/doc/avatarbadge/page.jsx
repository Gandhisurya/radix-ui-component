import { Avatar, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

function AvatarBadge() {
  const avatarContent = `

  \`\`\`
  <Avatar size="7" fallback="S" />
  <Avatar size="5" fallback="S" />
  <Avatar size="3" fallback="S" />
  <Avatar size="2" fallback="S" /> 

  ! --- cutomize fallback --- !

  <Avatar
  className="mx-2"
  size="1"
  fallback={
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25
      8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0
      0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      />
    </svg>
  }
/>

  \`\`\`
  `;

  const fallBackContent = `
  \`\`\`
  <Avatar
    size="7"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?
    &w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3
    &fp-z=1&fit=crop"
    fallback="S"
  />
  <Avatar
    size="5"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?
    &w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3
    &fp-z=1&fit=crop"
    fallback="S"
  />
  <Avatar
    size="3"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?
    &w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3
    &fp-z=1&fit=crop"
    fallback="S"
  />
  <Avatar
    size="2"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?
    &w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3
    &fp-z=1&fit=crop"
    fallback="S"
  />
  <Avatar
    size="1"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?
    &w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3
    &fp-z=1&fit=crop"
    fallback="S"
  />

  \`\`\`
  `;

  const varientContent = `

\`\`\`
  <Avatar variant="solid" fallback="S" className="mx-2" />
  <Avatar variant="soft" fallback="S" className="mx-2" />
\`\`\`


`;

  const colourContent = `

\`\`\`
   <Avatar color="indigo" fallback="S" className="mx-2" />
   <Avatar color="cyan" fallback="S" className="mx-2" />
   <Avatar color="orange" fallback="S" className="mx-2" />
   <Avatar color="crimson" fallback="S" className="mx-2" />
\`\`\`
`;

  const radiusContent = `

\`\`\`
  <Avatar radius="none" fallback="S" />
  <Avatar radius="large" fallback="S" />
  <Avatar radius="full" fallback="S" />
\`\`\`

`;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl ">Avatar</p>
        <p className="mt-2 font-medium">
          A profile picture, user initials or fallback icon.
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
                <Table.Cell>enum</Table.Cell>
                <Table.Cell>"3"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>variant</Table.RowHeaderCell>
                <Table.Cell>"solid" | "soft"</Table.Cell>
                <Table.Cell>"soft"</Table.Cell>
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
              <Table.Row>
                <Table.RowHeaderCell>
                  fallback - like alt in {`<img />`}
                </Table.RowHeaderCell>
                <Table.Cell>ReactNode</Table.Cell>
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
          <Avatar
            size="7"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="S"
            className="mx-2"
          />
          <Avatar
            size="5"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="S"
            className="mx-2"
          />
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="S"
            className="mx-2"
          />

          <Avatar
            size="1"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="S"
            className="mx-2"
          />
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {fallBackContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">2. Fallback</p>
          <p className="my-2">
            Without{" "}
            <span className="font-medium p-1 bg-indigo-50 rounded-lg">src</span>{" "}
            source the
            <span className="font-medium p-1 bg-indigo-50 rounded-lg">
              fallback
            </span>
            will be shown like the below
          </p>
          <div className="mt-3">
            <Avatar className="mx-2" size="7" fallback="S" />
            <Avatar className="mx-2" size="5" fallback="S" />
            <Avatar className="mx-2" size="3" fallback="S" />
            <Avatar className="mx-2" size="2" fallback="S" />
            <Avatar
              className="mx-2"
              size="1"
              fallback={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25
                  8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0
                  0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  />
                </svg>
              }
            />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {avatarContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">3. Variant</p>
          <p className="my-2">
            Use the variant properties to control the visual style.
          </p>
          <div className="mt-3">
            <Avatar variant="solid" fallback="S" className="mx-2" />
            <Avatar variant="soft" fallback="S" className="mx-2" />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {varientContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">4. Color</p>
          <p className="my-2">
            Use the color prop to assign a specific color, ignoring the global
            theme.
          </p>
          <div className="mt-3">
            <Avatar color="indigo" fallback="S" className="mx-2" />
            <Avatar color="cyan" fallback="S" className="mx-2" />
            <Avatar color="orange" fallback="S" className="mx-2" />
            <Avatar color="crimson" fallback="S" className="mx-2" />
          </div>
          <p className="mt-3 font-semibold">Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {colourContent}
          </ReactMarkdown>
        </div>
        <div className="mt-4">
          <p className="my-3 font-semibold text-xl">5. Radius</p>
          <p className="my-2">
            Use the radius prop to assign a specific radius value, ignoring the
            global theme.
          </p>
          <div className="mt-3">
            <Avatar radius="none" fallback="S" className="mx-2" />
            <Avatar radius="large" fallback="S" className="mx-2" />
            <Avatar radius="full" fallback="S" className="mx-2" />
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
          onClick={() => router?.push("/home/doc/badge")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Badge
        </p>
      </div>
    </div>
  );
}

export default AvatarBadge;
