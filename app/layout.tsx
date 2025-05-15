import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Billgist - AWS Cost Management Made Simple",
  description:
    "Control, monitor, and moderate your AWS billing with Billgist. Get comprehensive insights and save on your cloud costs.",
  keywords: [
    "AWS",
    "cost management",
    "cloud costs",
    "AWS billing",
    "cost optimization",
    "cloud spending",
    "AWS cost control",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'