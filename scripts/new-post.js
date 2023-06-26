const fs = require('fs').promises;
const path = require('path');
const dayjs = require('dayjs');

// npm run new:post filename title [tag1] [tag2] ...
const createPost = async () => {
  const [, , filename, title, ...tags] = process.argv;

  await fs.writeFile(
    path.resolve(process.cwd(), `./posts/${dayjs().format('YYYY-MM-DD')}-${filename}.mdx`),
    `---
title: '${title}'
date: '${dayjs().format('YYYY-MM-DD HH:mm:ss')}'
tags:${tags.map(tag => `\n  - '${tag}'`).join('')}
---
`,
  );
};

createPost();
