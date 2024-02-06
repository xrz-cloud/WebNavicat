"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// import ThemeChangeBar from "@/components/ThemeChangeBar";
import { themeChange } from "theme-change";

export default function Navbar() {
  const pathname = usePathname();
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="w-full navbar bg-base-100">
      {/* (三横杠) */}
      {/* <div className="flex-none lg:hidden">
        <label
          htmlFor="sidebar-drawer"
          aria-label="open sidebar"
          className="drawer-button btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div> */}

      {/* Logo */}
      <div className="flex-none">
        <a className="btn btn-ghost normal-case text-xl">xrz</a>
      </div>

      <div className="flex-1">
        <ul className="menu menu-horizontal px-1">
          {[
            {
              name: "首页",
              path: "/",
              icon: "i-tabler-home",
            },
            {
              name: "工具箱",
              path: "/toolbox",
              icon: "i-tabler-tools",
            },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={pathname === item.path ? "active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 主题设置 */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Link</a>
          </li> */}
          {/* <ThemeChangeBar /> */}
          <li>
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                主题 {/* 下箭头 */}
                <svg
                  width="12px"
                  height="12px"
                  className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
                {/* 下箭头 */}
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <button data-set-theme="cupcake" data-act-class="ACTIVECLASS">
                    默认(cupcake)
                  </button>
                </li>
                <li>
                  <button data-set-theme="dark" data-act-class="ACTIVECLASS">
                    夜间(dark)
                  </button>
                </li>
                <li>
                  <button data-set-theme="light" data-act-class="ACTIVECLASS">
                    日间(light)
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
