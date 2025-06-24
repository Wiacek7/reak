import type React from "react"
import type { Metadata } from "next"
import { Syne } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "Reak Studios - Professional Audio Production",
  description: "World-class recording studio specializing in film audio post-production, voice over, and sound design.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} font-sans`}>{children}</body>
    </html>
  )
}
