"use client";

import { useEffect } from "react";
import ThemeChangeBar from "@/components/ThemeChangeBar";

export default function Navbar() {
  // useEffect(() => {
  //   themeChange(false);
  //   // 👆 false parameter is required for react project
  // }, []);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">xrz</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
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
                  <button data-set-theme="" data-act-class="ACTIVECLASS">
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
