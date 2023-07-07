import { useHover } from "@uidotdev/usehooks";
import { animate, spring, type AnimationOptionsWithOverrides } from "motion";
import { useEffect } from "react";
import { inView } from "../utils/in-view";

export const useNavbarTransition = () => {
  const defaultBackground = "rgba(236, 254, 255, 0.40)";
  const darkBlueNavbarBackground = "rgba(62, 148, 229, 0.10)";
  const darkRedNavbarBackground = "rgba(232, 85, 121, 0.10)";

  const textLightColor = "rgba(236, 254, 255, 1)";
  const textDarkColor = "rgba(21, 94, 117, 1)";
  const textRedColor = "rgba(190, 18, 60, 1)";

  const [navRef, isHoveringNav] = useHover();

  const navShadow = isHoveringNav
    ? "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10), 0px 12px 12px 0px rgba(0, 0, 0, 0.09), 0px 26px 16px 0px rgba(0, 0, 0, 0.05), 0px 46px 19px 0px rgba(0, 0, 0, 0.01), 0px 73px 20px 0px rgba(0, 0, 0, 0.00)"
    : "0px 4px 10px 0px rgba(0, 0, 0, 0.03)";

  useEffect(() => {
    const nav = document.querySelector("#nav");
    const navPointer = nav.querySelector(".nav-pointer");

    const animateOption = { duration: 0.5, easing: [0.17, 0.55, 0.55, 1] } satisfies AnimationOptionsWithOverrides;

    inView(
      document.querySelector("#header"),
      () => {
        animate(nav, { backgroundColor: defaultBackground, color: textDarkColor, opacity: 1 }, animateOption);
        makeActive(navPointer, null);
      },
      { amount: "all" }
    );

    inView(document.querySelector("#projects"), () => {
      animate(nav, { backgroundColor: defaultBackground, color: textDarkColor, opacity: 1 }, animateOption);
    });

    inView(document.querySelector("#project-natanya"), () => {
      animate(nav, { backgroundColor: defaultBackground, color: textDarkColor, opacity: 1 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#projects"]'));
    });

    inView(document.querySelector("#project-natatoko"), () => {
      animate(nav, { backgroundColor: darkRedNavbarBackground, color: textRedColor, opacity: 1 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#projects"]'));
    });

    inView(document.querySelector("#work-govtech"), () => {
      animate(nav, { backgroundColor: darkBlueNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#work-experiences"]'));
    });

    inView(document.querySelector("#work-buka"), () => {
      animate(nav, { backgroundColor: darkRedNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#work-experiences"]'));
    });

    inView(document.querySelector("#work-experiences"), () => {
      animate(nav, { backgroundColor: darkBlueNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#work-experiences"]'));
    });

    inView(document.querySelector("#latest-writings"), () => {
      animate(nav, { backgroundColor: darkBlueNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#latest-writings"]'));
    });

    inView(document.querySelector("#writing-list"), () => {
      animate(nav, { backgroundColor: darkBlueNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#latest-writings"]'));
    });

    inView(document.querySelector("#contact-me"), () => {
      animate(nav, { opacity: 0 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#contact-me"]'));
    });

    let active = nav.querySelector(".active");
    let isAnimating = false;

    function cleanActive() {
      nav.querySelectorAll(".active")?.forEach?.((tab: any) => tab.classList.remove("active"));
    }

    nav.querySelectorAll(".nav-item").forEach((tab: any) => {
      tab.onclick = () => {
        isAnimating = true;
        cleanActive();
        tab.classList.add("active");
        active = tab;
        makeActive(navPointer, tab, true, "click");
      };
    });

    async function makeActive(pointer, active, toAnimate = true, event = "scroll") {
      if (isAnimating && event === "scroll") return;

      if (active === null) {
        cleanActive();
        animate(pointer, { opacity: 0 }, animateOption);
        return;
      }

      if (event !== "click") {
        nav.querySelector(".active")?.classList?.remove("active");
        active.classList.add("active");
      }

      let { width } = active.getBoundingClientRect();
      const animation = !toAnimate
        ? {}
        : {
            easing: spring({
              damping: 20,
              stiffness: 300,
            }),
          };

      const { finished } = animate(
        pointer,
        {
          opacity: 1,
          height: `${active.offsetHeight}px`,
          width: `${Math.floor(width)}px`,
          top: `${active.offsetTop}px`,
          left: `${active.offsetLeft}px`,
        },
        animation
      );

      finished.then(() => {
        isAnimating = false;
      });
    }
  }, []);

  return [navRef, navShadow];
};
