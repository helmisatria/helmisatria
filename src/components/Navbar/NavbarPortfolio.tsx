import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { useNavbarTransition } from "../../hooks/useNavbarTransitions";
import { tw } from "../../utils/tw";
import "./navbar.css";

const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "Work Experiences", href: "#work-experiences" },
  { name: "Latest Writings", href: "#latest-writings" },
  { name: "Contact Me", href: "#contact-me" },
  { name: "✨ Blog", href: "/blog" },
];

export default function NavbarPortfolio() {
  const [navRef, navShadow] = useNavbarTransition();

  return (
    <div className={twMerge("fixed top-0 z-50 w-full bg-opacity-100")}>
      <Popover as="header" className="relative">
        <div className="py-6">
          <nav
            className="relative mx-auto flex max-w-[1244px] items-center justify-between px-8 md:px-12 xl:px-4"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-end md:w-auto">
                <div className="-mr-2 flex items-center md:hidden">
                  <PopoverButton className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-cyan-900 p-2 text-cyan-400 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>

              {/* Desktop Navbar */}
              <div
                id="nav"
                ref={navRef}
                style={{
                  opacity: 0,
                  transform: "translateY(-150%)",
                  backgroundColor: "rgba(236, 254, 255, 0.40)",
                  backdropFilter: "blur(3px)",
                  boxShadow: navShadow as string,
                  transition: "box-shadow .3s",
                }}
                className={tw([
                  "hidden text-cyan-800 text-opacity-40",
                  "mx-auto space-x-2.5 rounded-full px-6 py-2.5 md:flex",
                ])}
              >
                <div className="nav-pointer"></div>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-item px-3 py-2 text-base font-semibold leading-140 underline-offset-2 opacity-40 hover:opacity-70"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* End - Desktop Navbar */}
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
          <PopoverPanel className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img className="h-12 w-auto rounded-full" src="/images/helmi-blog-square.png" alt="" />
                </div>
                <div className="-mr-2">
                  <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-cyan-400 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className="relative z-20 pb-6 pt-5">
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
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
}
