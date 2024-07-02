export type ViewChangeHandler = (entry: IntersectionObserverEntry) => void;

export interface InViewOptions {
  root?: Element | Document;
  margin?: string;
  amount?: "any" | "all" | number;
}

const thresholds = {
  any: 0,
  all: 1,
};

export function inView(
  elementOrSelector: Element | string,
  onStart: (entry: IntersectionObserverEntry) => void | ViewChangeHandler,
  { root, margin: rootMargin, amount = "any" }: InViewOptions = {}
) {
  /**
   * If this browser doesn't support IntersectionObserver, return a dummy stop function.
   * Default triggering of onStart is tricky - it could be used for starting/stopping
   * videos, lazy loading content etc. We could provide an option to enable a fallback, or
   * provide a fallback callback option.
   */
  if (typeof IntersectionObserver === "undefined") {
    return () => {};
  }

  const activeIntersections = new WeakMap<Element, ViewChangeHandler>();

  const onIntersectionChange: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);

      /**
       * If there's no change to the intersection, we don't need to
       * do anything here.
       */
      if (entry.isIntersecting === Boolean(onEnd)) return;

      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (newOnEnd) {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          // intentionally not unobserving so that when the user scroll up again, the element will be observed again
          // observer.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };

  setTimeout(() => {
    const element =
      typeof elementOrSelector === "string" ? document.querySelector(elementOrSelector) : elementOrSelector;

    if (!element) {
      console.warn("Element not found (in-view)", elementOrSelector);
      return () => {};
    }

    const observer = new IntersectionObserver(onIntersectionChange, {
      root,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholds[amount],
    });

    observer.observe(element!);

    return () => observer.disconnect();
  }, 500);
}
