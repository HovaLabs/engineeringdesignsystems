import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/shared.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Engineering Design Systems",
  description: "A design system book for engineers.",
  "og:image": `https://engineeringdesignsystems.netlify.app/social.png`,
  keywords:
    "kaitlyn hova, design systems book, engineering design systems book, design system book engineers",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
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
