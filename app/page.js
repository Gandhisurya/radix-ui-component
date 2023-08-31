"use client";
import React, { useState } from "react";
import Home from "./home/page";

export default function Main() {
  // const channelValue = [
  //   {
  //     accountId: 57604477,
  //     userName: "Test Account Page",
  //     channel: "FACEBOOK",
  //   },
  //   {
  //     accountId: 18880314,
  //     userName: "TestAccount",
  //     channel: "FACEBOOK",
  //   },
  // ];

  // const [removeValue, setRemoveValue] = useState([]);

  // const removeItem = [
  //   {
  //     accountId: 57604477,
  //     channel: "FACEBOOK",
  //     img: "https://cdn.pixabay.com/photo/2023/08/20/23/15/spider-8203320_1280.jpg",
  //   },
  //   {
  //     accountId: 18880314,
  //     channel: "FACEBOOK",
  //     img: "https://cdn.pixabay.com/photo/2023/08/16/21/10/cairn-8195026_1280.jpg",
  //   },
  // ];

  // const accountIds = channelValue?.map((each) => each?.accountId);

  // const handleImageClick = (accountId) => {
  //   if (accountIds?.includes(accountId)) {
  //     setRemoveValue((prevRemoveValue) =>
  //       prevRemoveValue.filter(
  //         (removeItem) => removeItem.accountId !== accountId
  //       )
  //     );
  //   } else {
  //     const foundChannelValue = channelValue.find(
  //       (item) => item.accountId === accountId
  //     );
  //     if (foundChannelValue) {
  //       setRemoveValue((prevRemoveValue) => [
  //         ...prevRemoveValue,
  //         foundChannelValue,
  //       ]);
  //     }
  //   }
  // };

  // console.log(JSON.stringify(removeValue, null, 4));

  return (
    <div className="w-full flex flex-col">
      {/* {removeItem?.map((each, i) => {
        const value = removeValue?.map((each) => each?.accountId);
        console.log(value);
        const isAccountIdMatch = accountIds?.includes(value);

        return (
          <div className="mx-2 flex justify-center items-center" key={i}>
            <img
              onClick={() => handleImageClick(each.accountId)}
              src={each?.img}
              style={{ opacity: isAccountIdMatch ? 0.5 : 1 }}
              className="w-20 h-20 mx-2 my-2 rounded-full"
              alt="Avatar"
            />
          </div>
        );
      })} */}
      <Home />
    </div>
  );
}
