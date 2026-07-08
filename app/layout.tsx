import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/(Common)/Navbar";
import Footer from "@/components/(Common)/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ignyte Platform",
  description: "Modern platform for building and deploying web applications.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}