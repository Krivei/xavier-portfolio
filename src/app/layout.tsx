import type { Metadata } from "next";
import {  Geist, Geist_Mono, Open_Sans, Style_Script, Shadows_Into_Light, Sofia, Homemade_Apple } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const homemadeApple = Homemade_Apple({
  variable: "--font-homemade-apple",
  subsets: ["latin"],
  weight: ["400"],
});

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadows-into-light",
  subsets: ["latin"],
  weight: ["400"],
});

const sofia = Sofia({
  variable: "--font-sofia",
  subsets: ["latin"],
  weight: ["400"],
});

const styleScript = Style_Script({
  variable: "--font-style-script",
  subsets: ["latin"],
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xavier Julian Theodosius",
  description: "Portfolio of Xavier Julian Theodosius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${styleScript.variable} ${shadowsIntoLight.variable } ${sofia.variable} ${homemadeApple.variable}`}>      
  <body
        className={openSans.className}
      >
        {children}
      </body>
    </html>
  );
}
