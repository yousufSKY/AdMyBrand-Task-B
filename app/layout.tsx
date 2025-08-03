import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AdMyBRAND - AI-Powered Marketing Solutions",
  description: "Transform your marketing with AI-powered precision. Generate engaging content, optimize campaigns, and maintain brand consistency with our comprehensive marketing suite.",
  keywords: "admybrand, ai marketing, content generation, campaign optimization, brand voice, marketing automation, SaaS",
  authors: [{ name: "ADmyBRAND Team" }],
  creator: "ADmyBRAND",
  publisher: "ADmyBRAND",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://admybrand.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AdMyBRAND - AI-Powered Marketing Solutions",
    description: "Transform your marketing with AI-powered precision. Generate engaging content, optimize campaigns, and maintain brand consistency with our comprehensive marketing suite.",
    url: "https://admybrand.com",
    siteName: "AdMyBRAND",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdMyBRAND - AI Marketing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdMyBRAND - AI-Powered Marketing Solutions",
    description: "Transform your marketing with AI-powered precision. Generate engaging content, optimize campaigns, and maintain brand consistency with our comprehensive marketing suite.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                console.log('%c👋 Designed & Developed by yousufSKY! Find me on GitHub: github.com/yousufSKY', 'color: #a78bfa; font-size: 16px; font-weight: bold; background: #232347; padding: 8px; border-radius: 4px;');
              });
            `
          }}
        />
        {children}
      </body>
    </html>
  )
}
