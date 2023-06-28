import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useHover } from "@uidotdev/usehooks";
import { animate, type AnimationOptionsWithOverrides } from "motion";
import { Fragment, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { inView } from "../utils/in-view";
import { tw } from "../utils/tw";

const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "Work Experiences", href: "#work-experiences" },
  { name: "Latest Writings", href: "#latest-writings" },
  { name: "Contact Me", href: "#contact-me" },
  { name: "✨ Blog", href: "/blog" },
];

export default function NavbarPortfolio() {
  const defaultBackground = "rgba(236, 254, 255, 0.40)";
  const darkBlueNavbarBackground = "rgba(62, 148, 229, 0.10)";
  const darkRedNavbarBackground = "rgba(232, 85, 121, 0.10)";

  const textLightColor = "rgba(236, 254, 255, .6)";
  const textDarkColor = "rgba(21, 94, 117, .6)";
  const textRedColor = "rgba(190, 18, 60, .6)";

  const [navRef, isHoveringNav] = useHover();

  const navShadow = isHoveringNav
    ? "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10), 0px 12px 12px 0px rgba(0, 0, 0, 0.09), 0px 26px 16px 0px rgba(0, 0, 0, 0.05), 0px 46px 19px 0px rgba(0, 0, 0, 0.01), 0px 73px 20px 0px rgba(0, 0, 0, 0.00)"
    : "0px 4px 10px 0px rgba(0, 0, 0, 0.03)";

  useEffect(() => {
    const nav = document.querySelector("#nav");
    const animateOption = { duration: 0.5, easing: [0.17, 0.55, 0.55, 1] } satisfies AnimationOptionsWithOverrides;

    inView(document.querySelector("#header"), () => {
      animate(nav, { backgroundColor: defaultBackground, color: textDarkColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#projects"), () => {
      animate(nav, { backgroundColor: defaultBackground, color: textDarkColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#work-buka"), () => {
      animate(nav, { backgroundColor: darkRedNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#project-natanya"), () => {
      animate(nav, { backgroundColor: defaultBackground, color: textDarkColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#project-natatoko"), () => {
      animate(nav, { backgroundColor: darkRedNavbarBackground, color: textRedColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#work-govtech"), () => {
      animate(nav, { backgroundColor: darkBlueNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#work-experiences"), () => {
      animate(nav, { backgroundColor: darkBlueNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#latest-writings"), () => {
      animate(nav, { backgroundColor: darkBlueNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#contact-me"), () => {
      animate(nav, { opacity: 0 }, animateOption);
    });
  }, []);

  return (
    <div className={twMerge("fixed top-0 z-50 w-full bg-opacity-100")}>
      <Popover as="header">
        <div className="py-6">
          <nav
            className="relative mx-auto flex max-w-[1244px] items-center justify-between px-8 md:px-12 xl:px-4"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-end md:w-auto">
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-cyan-900 p-2 text-cyan-400 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              {/* Desktop Navbar */}
              <div
                id="nav"
                ref={navRef}
                style={{
                  backgroundColor: "rgba(236, 254, 255, 0.40)",
                  backdropFilter: "blur(3px)",
                  boxShadow: navShadow,
                }}
                className={tw([
                  "hidden text-cyan-800 text-opacity-40 transition-all duration-500",
                  "mx-auto space-x-2.5 rounded-full px-6 py-2.5 md:flex",
                ])}
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="py-2 px-3 text-base font-semibold leading-140 underline-offset-2 hover:underline"
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
