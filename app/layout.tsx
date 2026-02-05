import type { Metadata } from "next";
import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Letmoveit.ng",
  description: "Move stress-free with LetmoveIt.ng, Nigeria’s top choice for reliable, eco-friendly moving services. Whether you're relocating your home or business, our advanced move estimate calculator and professional packing solutions ensure a seamless experience.",
  keywords: ["Letmoveit", "letmoveit.ng", "Letmoveit ng", "Letmoveit Abuja", "Letmoveit Nigeria"],
  applicationName: "Letmoveit.ng",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
  icons: {
    icon: "https://www.letmoveit.ng/assets/images/logo.png",
  },
  openGraph: {
    title: "Letmoveit.ng",
    description: "Move stress-free with LetmoveIt.ng, Nigeria’s top choice for reliable, eco-friendly moving services. Whether you're relocating your home or business, our advanced move estimate calculator and professional packing solutions ensure a seamless experience.",
    url: "https://www.letmoveit.ng",
    siteName: "Letmoveit.ng",
    type: "website",
    images: [
      {
        url: "https://www.letmoveit.ng/assets/images/Group 375.png",
        width: 107,
        height: 107,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Letmoveit.ng",
    description: "Move stress-free with LetmoveIt.ng, Nigeria’s top choice for reliable, eco-friendly moving services. Whether you're relocating your home or business, our advanced move estimate calculator and professional packing solutions ensure a seamless experience.",
    images: ["https://www.letmoveit.ng/assets/images/Group 375.png"],
    // creator: "@Letmoveitng",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.letmoveit.ng",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
