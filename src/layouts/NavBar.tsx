// import { useState } from "react";
import { IoCloseCircle, IoMenu, IoLogoGithub } from "react-icons/io5";

export default function WithAction({
  toggleSideBar,
  isSideBarOpen,
}: {
  toggleSideBar: () => void;
  isSideBarOpen: boolean;
}) {
  return (
    <div className="h-full border border-b-gray-100 px-4">
      <div className="h-full flex items-center justify-between">
        <button className="sm:hidden text-lg" onClick={toggleSideBar}>
          {isSideBarOpen ? <IoCloseCircle /> : <IoMenu />}
        </button>
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" width="30px" height="30px" />
          <h1 className="text-gray-800 font-semibold">React D3 Charts</h1>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/saifil4/react-d3-charts" target="blank">
            <button className="px-1 py-1">
              <IoLogoGithub className="text-2xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
