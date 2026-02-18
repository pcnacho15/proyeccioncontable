import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, DM_Mono, Cormorant_Garamond } from "next/font/google"
import { Suspense } from "react"
import { LazyAnalytics } from "@/components/analytics"
import "./globals.css"

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
})
const dmMono = DM_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "500"],
  variable: "--font-dm-mono",
})
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Proyección Contable - Expertos en Contabilidad y Asesoría Fiscal",
  description: "Optimiza tu contabilidad y impuestos con expertos 100% dedicados. Contabilidad general, declaraciones fiscales, asesoramiento y consultoría financiera.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${dmMono.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Suspense fallback={null}>
          <LazyAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
