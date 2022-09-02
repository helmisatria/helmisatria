import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

import sal from "sal.js";
import salcss from "sal.js/dist/sal.css";
import { useEffect } from "react";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: salcss },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Helmi Satria - Fullstack Javascript Developer",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
