"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeChangeBar() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <select
      data-choose-theme
      className="select select-bordered w-full max-w-xs"
    >
      <option value="cupcake">Default</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}
