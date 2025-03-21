"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"

type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

/**
 * Your app's theme provider component.
 * 'use client' is essential for next-themes to work with app-dir.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
