import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import mhmLogo from "../public/images/motorhomemann-logo.png";

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Motorhome Mann",
    href: "/",
    icon: ChartPieIcon,
  },
  {
    name: "About Us",
    href: "about",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Services",
    href: "/services",
    icon: FingerPrintIcon,
  },
  {
    name: "Repair",
    href: "/repair",
    icon: SquaresPlusIcon,
  },
  {
    name: "Helpful Hints",
    href: "/helpful-hints",
    icon: ArrowPathIcon,
  },
  {
    name: "Shop",
    href: "/shop",
    icon: ArrowPathIcon,
  },
  {
    name: "Working Hours",
    href: "/working-hours",
    icon: ArrowPathIcon,
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    icon: ArrowPathIcon,
  },
  {
    name: "Terms & Conditions",
    href: "terms-and-conditions",
    icon: ArrowPathIcon,
  },
];

export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-6 fixed w-screen top-0 z-10 h-[120px] bg-gradient-to-b from-[#f2dea1] to-[#968a66] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6px]">
        <div className="col-span-4 mt-3 self-center">
          <Image
            className="w-56 h-[93px] object-contain"
            src={mhmLogo}
            alt="motorhome mann logo"
          />
        </div>
        <div className="col-span-2 self-center justify-self-end mt-3 me-3">
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
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10,20h30"
                    stroke="#D83232"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10,30h30"
                    stroke="#D83232"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </PopoverButton>
            <PopoverPanel
              transition
              className="fixed right-0 z-10 mt-20 flex w-screen max-w-max -translate-x-0 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                <div className="p-4">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg px-4 py-2 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="grid self-center">
                        <Link
                          href={item.href}
                          className="font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </>
  );
}
