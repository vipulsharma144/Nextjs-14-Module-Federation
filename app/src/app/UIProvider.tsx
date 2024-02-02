"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
