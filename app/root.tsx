import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import styles from "./styles/app.css";

import sal from "sal.js";
import salcss from "sal.js/dist/sal.css";
import { useEffect } from "react";

import * as gtag from "~/utils/gtags.client";

import { getSeo } from "~/seo";
let [seoMeta, seoLinks] = getSeo();

export function links() {
  return [
    ...seoLinks,
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: salcss },
  ];
}

export const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  gaTrackingId: string | undefined;
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({ gaTrackingId: "G-40YQWWQ9TY" });
};

export default function App() {
  useEffect(() => {
    sal();
  }, []);

  const location = useLocation();
  const { gaTrackingId } = useLoaderData<LoaderData>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {process.env.NODE_ENV !== "development" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
