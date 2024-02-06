import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import "./globals.css";
// import "@unocss/reset/tailwind.css";
import LinkCard from "@/components/LinkCard";
import { Toaster } from "react-hot-toast";
import MouseTracker from "@/components/MouseTracker";
import Navbar from "@/components/Navbar";
// import Menu from "@/components/Menu";

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
        className=""
      >
        <MouseTracker />
        <Toaster />

        {/* <div className="drawer drawer-open">
          <input
            id="sidebar-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-col"> */}
        <Navbar />
        <div className="px-4">{children}</div>
        {/* </div>
          <div className="drawer-side">
            <label
              htmlFor="sidebar-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <aside className="w-60 bg-base-200 min-h-full items-center justify-center">
              <div className="btn btn-ghost normal-case text-xl sticky">xrz</div>
              <div className="divider" />
              <ul className="menu p-4 w-60 bg-base-200">
                {/* Sidebar content here */}
        {/* <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </aside>
          </div>
        </div> */}
        {/* <LinkCard /> */}
      </body>
    </html>
  );
}
