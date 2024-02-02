import { Poppins as FontSans } from "next/font/google";
// import { NextUIProvider } from "@nextui-org/react";

import UIProvider from "./UIProvider";

import type { Metadata } from "next";

import Script from "next/script";
// Load the Poppins font with 'latin' subset
const poppins = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Creavid",
  description:
    "Create awesome videos with Creavid.Automatic and awesome videos",
};

// Root layout component for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      {/*
        The <head /> component will contain the components returned by the nearest parent
        head.js. It can be used to define the document head for SEO, metadata, and other purposes.
        Learn more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        {/* Wrap the children with the AuthContextProvider to provide authentication context */}
        <main className="flex flow-col relative ">
          <div className="flex-grow flex-1">
            <UIProvider>{children}</UIProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
