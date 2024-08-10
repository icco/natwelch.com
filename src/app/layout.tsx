import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Roboto_Slab } from "next/font/google";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nat? Nat. Nat!",
  description: "The personal blog of Nat Welch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
