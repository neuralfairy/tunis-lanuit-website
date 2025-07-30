import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ConsentBanner from "@/components/ConsentBanner"
import ExitIntentPopup from "@/components/ExitIntentPopup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contact Validator - Email Verification & Data Validation | Tunislanuit Solutions",
  description:
    "Verify contact information and improve outbound success rates with our enterprise-grade Contact Validator. Real-time email verification, bounce reduction, and clean data for B2B sales teams.",
  keywords:
    "email verification, data validation, contact accuracy, contact validator, B2B sales tools, email deliverability",
  authors: [{ name: "Tunislanuit Solutions" }],
  openGraph: {
    title: "Contact Validator - Email Verification & Data Validation",
    description: "Enterprise-grade contact verification tool for B2B sales teams",
    url: "https://tunislanuit.com",
    siteName: "Tunislanuit Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Validator - Email Verification & Data Validation",
    description: "Enterprise-grade contact verification tool for B2B sales teams",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tunislanuit Solutions",
              url: "https://tunislanuit.com",
              logo: "https://tunislanuit.com/logo.png",
              description: "Enterprise-grade contact verification and data validation solutions",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buffalo",
                addressRegion: "NY",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-716-555-0123",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ConsentBanner />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
