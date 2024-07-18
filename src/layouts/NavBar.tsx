// import { useState } from "react";
import { FaHamburger, FaCross } from "react-icons/fa";

export default function WithAction(toggleSideBar: {
  toggleSideBar: () => void;
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = false;

  return (
    <div className="h-full border border-b-gray-100 px-4">
      <div className="h-full flex items-center justify-between">
        <button className="sm:hidden" onClick={() => toggleSideBar}>
          {isOpen ? <FaCross /> : <FaHamburger />}
        </button>
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" width="32px" height="32px" />
          <h1 className="text-gray-800 text-lg font-bold">React D3 Charts</h1>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/saifil4/react-d3-charts" target="blank">
            <button className="bg-gray-100 px-4 py-2 rounded-lg">Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}
