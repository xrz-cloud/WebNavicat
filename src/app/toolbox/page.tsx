import React, { PropsWithChildren } from "react";
import Link from "next/link";

const tools = [
  {
    name: "弹弹Play网页版 | bili-vd-bak",
    desc: "(手搓Unofficial)",
    href: "/toolbox/LocalPlayer",
    external: false,
  },
  {
    name: "局域网文件传输 | xrz",
    desc: "making...",
    href: "/toolbox/LocaFileTrans",
    external: false,
  },
  {
    name: "网页gpg加解密 | xrz",
    desc: "making...",
    href: "/toolbox/LocalGPG",
    external: false,
  },
  {
    name: "MiBand 7 电子书APP生成 | xrz",
    desc: "making...",
    href: "/toolbox/miband7ebook",
    external: false,
  },
  {
    name: "Bili漫游服务端(TypeScript) - HKG | bili-vd-bak",
    desc: "- hk.bili.xrzyun.eu.org",
    href: "https://hk.bili.xrzyun.eu.org",
    external: true,
  },
  {
    name: "番剧分享 | bili-vd-bak",
    desc: "",
    href: "https://share.xrzyun.top",
    external: true,
  },
];

export default function TB() {
  return (
    <div className="flex flex-wrap grid grid-cols-3 gap-3">
      {tools.map((tool) => (
        <div
          className="flex-auto card w-80 m-3 bg-base-100 shadow-xl"
          key={tool.name}
        >
          <div className="card-body">
            <h2 className="card-title">{tool.name}</h2>
            <p>{tool.desc}</p>
            <div className="card-actions justify-end">
              <Link
                href={tool.href}
                target={tool.external ? "_blank" : ""}
                className="btn btn-primary"
              >
                {tool.external ? "跳转" : "进入"}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
