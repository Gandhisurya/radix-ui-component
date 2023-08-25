import React from "react";

function NavBar() {
  return (
    <div className="w-full h-20 border-b-[1px] flex justify-between items-center px-5">
      <div className="">
        <p>Radix-UI</p>
      </div>
      <div className="flex items-center">
        <p className="mx-">Get Started</p>
        <p>Docs</p>
        <p>Learn More</p>
      </div>
      <div className="flex">
        <p className="mx-2">github</p>
        <p className="mx-2">twitter</p>
      </div>
    </div>
  );
}

export default NavBar;
