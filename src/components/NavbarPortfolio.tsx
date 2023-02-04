import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { twJoin, twMerge } from "tailwind-merge";

const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "Work Experiences", href: "#work-experiences" },
  { name: "Latest Writings", href: "#latest-writings" },
  { name: "✨ Blog", href: "/blog" },
  { name: "Contact Me", href: "#contact-me" },
];

export default function NavbarPortfolio() {
  const [isIntersectingProjects] = useIntersectionObserver("project-section");
  const [isIntersectingDarkSection] = useIntersectionObserver("dark-section");
  const [isIntersectingFooter] = useIntersectionObserver("footer");

  let displayable = isIntersectingProjects || isIntersectingDarkSection ? "md:flex" : "!opacity-0 !pointer-events-none";
  let navBackground = isIntersectingProjects
    ? "navbar-background-light"
    : isIntersectingDarkSection
      ? "navbar-background-dark"
      : "bg-opacity-0";

  displayable = isIntersectingFooter ? "!opacity-0 !pointer-events-none" : displayable;

  return (
    <div className={twMerge("fixed top-0 z-50 w-full bg-opacity-100 transition-all duration-500", navBackground)}>
      <Popover as="header" className="">
        <div className="py-6">
          <nav className="relative mx-auto flex items-center justify-between px-12 xl:px-4 max-w-[1244px]" aria-label="Global">
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-end md:w-auto">
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-cyan-900 p-2 text-cyan-400 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className={twJoin("hidden space-x-8 transition duration-500 md:flex", displayable)}>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-semibold text-cyan-600 hover:text-cyan-700 hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 z-20 origin-top transform p-2 transition md:hidden">
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img className="h-12 w-auto rounded-full" src="/images/helmi-blog-square.png" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-cyan-400 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="relative z-20 pt-5 pb-6">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-cyan-900 hover:bg-cyan-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
