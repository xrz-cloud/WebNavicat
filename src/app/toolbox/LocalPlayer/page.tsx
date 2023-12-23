"use client";
import LP from "./main";
import NoSSR from "@/components/NoSSR";

export default function lps() {
  return (
    <div>
      <h2>帮助</h2>
      <h3>使用的最基本前提</h3>
      <p className="text-red">浏览器支持WASM(WebAssembly)功能。</p>
      <h3>介绍</h3>
      <ul>
        <li>
          本播放器可播放本地视频，并支持读取`.mkv`的内置字幕(通过 ffmpeg wasm
          实现)。
        </li>
        <li>
          使用前需下载约 32MB 的 ffmpeg
          库，下载后会缓存，每次刷新页面后会自动尝试更新。
        </li>
        <li>
          电脑上测试通过(Linux下推荐Chromium)，手机上发现视频文件过大会无法加载(解决方法：使用Chrome或三星浏览器)。
        </li>
        <li>会自动匹配 dandanplay弹幕库。</li>
        <li>播放视频编码支持取决于浏览器。</li>
      </ul>
      <h3>TODO</h3>
      <ul>
        <li>下载进度条</li>
        <li>输入 dandanplay epID 下载弹幕</li>
        <li>
          通过 ffmpeg 实时转码以支持 <code>HEVC</code> <code>AV1</code>{" "}
          在不支持平台上的播放。
        </li>
      </ul>
      <h2>工具</h2>
      <div style={{ overflow: "auto" }}>
        手机端可滑动本行文字调整播放器位置，全屏(横屏)以取得正确字幕、弹幕位置。
        <NoSSR>
          <LP />
        </NoSSR>
      </div>
    </div>
  );
}
