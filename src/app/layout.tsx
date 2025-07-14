import "./globals.css"

import type { Metadata, Viewport } from "next"
import { Roboto, Roboto_Mono, Roboto_Slab } from "next/font/google"

import { Header, Size } from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
import { WebVitals } from "@/components/WebVitals"

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
})

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nat Welch dot com",
  description: "The personal website of Nat Welch",
  other: {
    webmention: "https://webmention.io/natwelch.com/webmention",
    pingback: "https://webmention.io/natwelch.com/xmlrpc",
    charset: "utf-8",
  },
}

export const viewport: Viewport = {
  viewportFit: "cover",
  initialScale: 1.0,
  width: "device-width",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider defaultTheme="system" enableSystem>
          <Header size={Size.Small} />
          <WebVitals />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
