"use client";
import { AspectRatio } from "@radix-ui/themes";
import React from "react";

import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

function Aspect() {
  const router = useRouter();

  const aspectContent = `

\`\`\`
<AspectRatio ratio={16 / 8}>
  <img
    src="https://images.unsplash.com/photo-1479030160180-b1860951d696
    ?&auto=format&fit=crop&w=1200&q=80"
    alt="A house in a forest"
    style={{
    objectFit: "cover", 
    width: "100%",
    height: "100%",
    borderRadius: "var(--radius-2)", 
    }}
  />
</AspectRatio>
\`\`\`
`;

  return (
    <div className="flex flex-col w-[1200px] h-[800px] overflow-y-scroll px-40 font-next">
      <div className="mt-20">
        <p className="font-semibold text-3xl">Aspect Ratio</p>
        <p className="font-medium mt-3">
          Displays content within a desired ratio.
        </p>
      </div>
      <div className="max-w-[600px] mt-3">
        <AspectRatio ratio={16 / 8}>
          <img
            src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
            alt="A house in a forest"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-2)",
            }}
          />
        </AspectRatio>
        <div className="mt-3">
          <p className="font-semibold text-lg">Example Code</p>
          <ReactMarkdown className="text-sm mt-4 border p-3 max-w-[600px] rounded-lg bg-blue-100">
            {aspectContent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-[130px] shadow-lg flex flex-col text-right mb-10 ml-auto rounded-lg p-2">
        <p className="">Next</p>
        <p
          onClick={() => router?.push("/home/doc/avatarbadge")}
          className="text-orange-500 cursor-pointer hover:font-medium"
        >
          Avatar Badge
        </p>
      </div>
    </div>
  );
}

export default Aspect;
