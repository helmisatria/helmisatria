import React, { useEffect } from "react";

export const useIntersectionObserver = (id: string) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with id "${id}" not found.`);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        } else {
          setIntersecting(false);
        }
      });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [id]);

  return [isIntersecting];
};

export default useIntersectionObserver;
