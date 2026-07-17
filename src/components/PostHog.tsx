import { useEffect } from "react";

const postHogKey = "phc_Bn4JG1Gj5E56mlysGzFf9B3xTyxr6dBfpjw3TNXxYoM";

export function PostHog() {
  useEffect(() => {
    if (import.meta.env.DEV) {
      return;
    }

    let cancelled = false;

    const loadPostHog = () => {
      void import("posthog-js").then(({ default: posthog }) => {
        if (cancelled) {
          return;
        }

        posthog.init(postHogKey, {
          api_host: "https://app.posthog.com",
          capture_pageview: "history_change",
          capture_pageleave: true,
        });
      });
    };

    const idleCallback = window.requestIdleCallback?.(loadPostHog, { timeout: 2_000 });
    const timeout = idleCallback === undefined ? window.setTimeout(loadPostHog, 1_000) : undefined;

    return () => {
      cancelled = true;

      if (idleCallback !== undefined) {
        window.cancelIdleCallback?.(idleCallback);
      }

      if (timeout !== undefined) {
        window.clearTimeout(timeout);
      }
    };
  }, []);

  return null;
}
