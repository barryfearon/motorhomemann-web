import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import mhmLogo from "../public/images/motorhomemann-logo.png";

export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 fixed w-full h-[120px] bg-gradient-to-b from-[#f2dea1] to-[#968a66] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6px]">
        <div className="col-span-4 mt-3 self-center">
          <Image
            className="w-56 h-[93px] object-contain"
            src={mhmLogo}
            alt="motorhome mann logo"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 fixed w-full h-[120px]">
        <div className="col-span-6 mt-3 me-3 self-center justify-self-end">
          <Popover className="w-[50px] h-10 relative">
            <PopoverButton>
              <div className="w-[50px] h-10 left-0 top-0 absolute bg-[#f7e1dc] rounded-[10px] border-2 border-[#d83232]" />
              <div data-svg-wrapper className="absolute left-0 top-0">
                <svg
                  width="50"
                  height="40"
                  viewBox="0 0 50 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10,10h30"
                    stroke="#D83232"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10,20h30"
                    stroke="#D83232"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10,30h30"
                    stroke="#D83232"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-0 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                <div className="p-4">
                  <h1>Motorhome Mann Nav</h1>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </>
  );
}
