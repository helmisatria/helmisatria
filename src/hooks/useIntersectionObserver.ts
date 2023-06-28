import React, { useEffect } from "react";

export const useIntersectionObserver = (
  id: string,
  { root = null, rootMargin = "0px", threshold = 0 }: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with id "${id}" not found.`);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // console.log("entries -->", entries);

        entries.forEach((entry) => {
          // top intersection
          console.log("id -->", id);
          const topIntersecting = entry.boundingClientRect.top <= 0;

          console.log("entry.intersectionRect.top -->", entry.intersectionRect.top);
          console.log("topIntersecting -->", topIntersecting);

          if (entry.isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        });
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [id]);

  return [isIntersecting];
};

export default useIntersectionObserver;
