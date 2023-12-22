import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from "unocss";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
import presetChinese from "unocss-preset-chinese";
import { presetScrollbar } from "unocss-preset-scrollbar";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        tabler: () =>
          import("@iconify-json/tabler/icons.json").then((i) => i.default),
      },
    }),
    presetChinese({
      chineseType: "simplified", // 指定文本为简体中文
    }),
    presetScrollbar(),
    presetDaisy({
      // themes: true,
      themes: ["cupcake", "dark", "light"],
    }),
  ],
  transformers: [transformerAttributifyJsx()],
});
