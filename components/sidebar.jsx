"use client";
import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="flex flex-col w-[280px] h-screen border-r-[1px] font-next static">
      <div className="flex items-center justify-center mt-2 border-b-[1px]">
        <Link href="/home" className="py-4">
          <svg
            className="h-7 hover:scale-110 transition-transform cursor-pointer"
            viewBox="0 0 76 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M43.9022 20.0061H46.4499C46.2647 19.0375 46.17 18.1161 46.17 17.0058V12.3753C46.17 9.25687 44.3893 7.72127 41.1943 7.72127C38.3003 7.72127 36.3324 9.23324 36.0777 11.8083H38.9254C39.0181 10.698 39.8052 9.96561 41.1017 9.96561C42.4446 9.96561 43.3243 10.6743 43.3243 12.1391V12.7061L39.8052 13.1077C37.4206 13.3912 35.5684 14.3834 35.5684 16.7931C35.5684 18.9666 37.2353 20.2659 39.5274 20.2659C41.4027 20.2659 42.9845 19.4863 43.6401 18.1161C43.6689 18.937 43.9022 20.0061 43.9022 20.0061ZM40.3377 18.1634C39.157 18.1634 38.5087 17.5727 38.5087 16.6278C38.5087 15.3757 39.4579 15.0922 40.7082 14.9268L43.3243 14.6197V15.352C43.3243 17.242 41.8658 18.1634 40.3377 18.1634ZM56.2588 20.0061H59.176V3H56.2125V9.96561C55.6569 8.76075 54.3141 7.72127 52.4851 7.72127C49.3058 7.72127 47.099 10.2963 47.099 14.0054C47.099 17.7381 49.3058 20.2896 52.4851 20.2896C54.2678 20.2896 55.68 19.2973 56.2588 18.0925V20.0061ZM56.282 14.218C56.282 16.5569 55.1938 18.0689 53.3185 18.0689C51.3969 18.0689 50.1856 16.486 50.1856 14.0054C50.1856 11.5485 51.3969 9.94198 53.3185 9.94198C55.1938 9.94198 56.282 11.454 56.282 13.7928V14.218ZM60.9066 5.97304H64.0553V3.01996H60.9066V5.97304ZM60.9992 20.0061H63.9627V8.00476H60.9992V20.0061ZM67.6638 20.0061L70.6041 15.8954L73.5212 20.0061H76.9246L72.3636 13.7219L76.5542 8.00476H73.3823L70.7661 11.7138L68.1731 8.00476H64.7697L69.0066 13.8637L64.4919 20.0061H67.6638Z"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.9132 20V14.0168H28.7986L32.4513 20H35.7006L31.6894 13.5686C33.5045 12.986 35.0955 11.507 35.0955 9.01961C35.0955 5.7479 32.7994 4 28.9571 4H22V20H24.9132ZM24.9132 6.35294V11.6863H28.821C31.0395 11.6863 32.1599 10.7675 32.1599 9.01961C32.1599 7.27171 30.9395 6.35294 28.621 6.35294H24.9132Z"
            ></path>
            <path d="M7 23C3.13401 23 0 19.6422 0 15.5C0 11.3578 3.13401 8 7 8V23Z"></path>
            <path d="M7 0H0V7H7V0Z"></path>
            <path d="M11.5 7C13.433 7 15 5.433 15 3.5C15 1.567 13.433 0 11.5 0C9.56704 0 8 1.567 8 3.5C8 5.433 9.56704 7 11.5 7Z"></path>
          </svg>
        </Link>
      </div>
      <div className="flex flex-col mt-5 ml-8 h-auto overflow-y-scroll">
        <div className="">
          <p className="font-semibold text-left">Overview</p>
          <p
            className={`${
              path === "/home/doc/getstarted"
                ? "bg-blue-100 pl-4 font-semibold"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3  rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
            onClick={() => router?.push("/home/doc/getstarted")}
          >
            Get Statred
          </p>
        </div>
        <div className="my-5">
          <p className="font-semibold text-left">Components</p>
          <p
            className={`${
              path === "/home/doc/alertdialog"
                ? "bg-blue-100 pl-4 font-semibold"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Alert Dialog
          </p>
          <p
            className={`${
              path === "/home/doc/aspectratio"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Aspect Ratio
          </p>
          <p
            className={`${
              path === "/home/doc/avatarbadge"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Avatar Badge
          </p>
          <p
            className={`${
              path === "/home/doc/button"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Button
          </p>
          <p
            className={`${
              path === "/home/doc/callout"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Callout
          </p>
          <p
            className={`${
              path === "/home/doc/card"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Card
          </p>
          <p
            className={`${
              path === "/home/doc/contentbox"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Context box
          </p>
          <p
            className={`${
              path === "/home/doc/contextmenu"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Context Menu
          </p>
          <p
            className={`${
              path === "/home/doc/dialog"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Dialog
          </p>
          <p
            className={`${
              path === "/home/doc/dropdownmenu"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Dropdown Menu
          </p>
          <p
            className={`${
              path === "/home/doc/hovercard"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Hover Card
          </p>
          <p
            className={`${
              path === "/home/doc/iconbutton"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Icon Button
          </p>
          <p
            className={`${
              path === "/home/doc/inset" ? "bg-blue-100 pl-4" : ""
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Inset
          </p>
          <p
            className={`${
              path === "/home/doc/popover"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Popover
          </p>
          <p
            className={`${
              path === "/home/doc/radiogroup"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Radio Group
          </p>
          <p
            className={`${
              path === "/home/doc/scrollarea"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Scroll Area
          </p>
          <p
            className={`${
              path === "/home/doc/select"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Select
          </p>
          <p
            className={`${
              path === "/home/doc/seperator"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Seperator
          </p>
          <p
            className={`${
              path === "/home/doc/slider"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Slider
          </p>
          <p
            className={`${
              path === "/home/doc/switch"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Switch
          </p>
          <p
            className={`${
              path === "/home/doc/table"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Table
          </p>
          <p
            className={`${
              path === "/home/doc/tabs"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Tabs
          </p>
          <p
            className={`${
              path === "/home/doc/textarea"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Text Area
          </p>
          <p
            className={`${
              path === "/home/doc/textfield"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Text Field
          </p>
          <p
            className={`${
              path === "/home/doc/tooltip"
                ? "bg-blue-100 pl-4"
                : "hover:bg-rose-100 font-medium"
            } text-sm mt-3 rounded-lg pl-2 flex justify-start items-center text-left h-8 w-[160px] cursor-pointer`}
          >
            Tooltip
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
