import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

// export const metadata: Metadata = {
//   title: "David's Website",
//   description: "Personal portfolio website showcasing DevOps projects and skills.",
//   openGraph: {
//     title: "David's Website",
//     description: "Personal portfolio website showcasing DevOps projects and skills.",
//     url: "https://davidmagsipoc.dev",
//     siteName: "David's' Website",
//     images: [
//       {
//         url: "/website-logo.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
// };


export const metadata: Metadata = {
  title: "David Magsipoc — DevOps Engineer",
  description:
    "DevOps engineer specializing in automation, CI/CD pipelines, and scalable cloud infrastructure.",

  openGraph: {
    title: "David Magsipoc — DevOps Engineer",
    description:
      "Building efficient, reliable, and scalable cloud systems.",
    url: "https://davidmagsipoc.dev",
    siteName: "davidmagsipoc.dev",
    images: [
      {
        url: "/website-logo.png", // must be in /public
        width: 1200,
        height: 630,
        alt: "David Magsipoc DevOps Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "David Magsipoc — DevOps Engineer",
    description:
      "Automation, CI/CD, and cloud infrastructure specialist.",
    images: ["/website-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
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
