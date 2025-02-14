import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import type React from "react"
import { ThemeProvider } from "next-themes"
import CustomCursor from "@/components/CustomCursor"
import { Analytics } from "@vercel/analytics/react"
import PageTransition from "@/components/PageTransition"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tobi Williams | Innovative Software Engineer",
  description:
    "Tobi Williams is a visionary software engineer specializing in cutting-edge web technologies, AI integration, and scalable architecture.",
  keywords: "software engineer, full-stack developer, AI, machine learning, React, Node.js, TypeScript, blockchain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tobiwilliams.dev",
    site_name: "Tobi Williams Portfolio",
    images: [
      {
        url: "https://tobiwilliams.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tobi Williams - Innovative Software Engineer",
      },
    ],
  },
  twitter: {
    handle: "@tobiwilliams",
    site: "@tobiwilliams",
    cardType: "summary_large_image",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'