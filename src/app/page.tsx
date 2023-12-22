// "use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export async function GHList() {
  const tree_sha = await fetch(
    "https://api.github.com/repos/xrz-cloud/blog/branches/main"
  )
    .then((res) => res.json())
    .then((res: { commit?: { sha?: string } }) => {
      return res?.commit?.sha;
    });
  const tree = await fetch(
    "https://api.github.com/repos/xrz-cloud/blog/git/trees/" + tree_sha
  ).then((res) =>
    res.json().then((res: { tree: { path: string; url: string }[] }) => {
      let posts_tree_url = "";
      for (const i of res.tree) {
        if (i.path === "posts") posts_tree_url = i.url;
      }
      return fetch(posts_tree_url)
        .then((res) => res.json())
        .then((res) => res.tree);
    })
  );
  let id = 0;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Post</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tree.map((post: { path: string }) => {
            id++;
            return (
              <tr key={post.path}>
                <th>{id}</th>
                <td>{post.path}</td>
                <td>
                  <Link
                    href={"/posts/" + post.path.split(".md").join("")}
                    target="_blank"
                    className="link-primary"
                  >
                    跳转
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>Nothing Here...</h1>
      <h2>
        <Link href="/toolbox" className="text-green-3">
          工具箱
        </Link>
      </h2>
      <h2>发过的Blogs</h2>
      <GHList />
    </main>
  );
}
