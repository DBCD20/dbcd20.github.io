import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

export const metadata: Metadata = {
  title: "David's Website",
  description: "Personal portfolio website showcasing DevOps projects and skills.",
  openGraph: {
    title: "David's Website",
    description: "Personal portfolio website showcasing DevOps projects and skills.",
    url: "https://davidmagsipoc.dev",
    siteName: "David's' Website",
    images: [
      {
        url: "/website-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
