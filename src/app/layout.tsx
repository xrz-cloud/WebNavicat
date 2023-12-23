import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import "./globals.css";
// import "@unocss/reset/tailwind.css";
import LinkCard from "@/components/LinkCard";
import { Toaster } from "react-hot-toast";
import MouseTracker from "@/components/MouseTracker";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "xrz | Less Words | More Tools",
  description: "一个隐蔽的网站捏QAQ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scrollbar scrollbar-rounded">
      {/* <body className={inter.className}>{children}</body> */}
      {/* <div>{children}</div> */}
      <body
        // data-theme="cupcake"
        className="container mx-auto flex flex-col justify-center items-center"
      >
        <MouseTracker />
        <Toaster />
        <Navbar />
        {children}
        <LinkCard />
      </body>
    </html>
  );
}
