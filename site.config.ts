interface Config {
  name: string
  title: string
  description: string
  avatar: string
  logo: string
  siteUrl: string
  // icon 请在 src/components/Splash/index.tsx 中修改
  socials: ConfigSocial[]
  blogroll: ConfigBlogroll[]
  language: 'en' | 'zh-CN'
  toc: boolean // table of content
  adjacentPosts: boolean // prev next links
  markdown: ConfigMarkdown
}

interface ConfigSocial {
  label: string
  link: string
}

interface ConfigBlogroll {
  name: string
  link: string
}

interface ConfigMarkdown {
  lineNumbers: boolean
}

const config: Config = {
  name: 'xrz',
  title: 'xrz | Less Blogs | More Tools',
  description: '没用的文章分享和也许有用的小工具。来都来了，去看看工具箱里有没有你想要的。',
  avatar:
    'https://xlog.app/cdn-cgi/image/width=256,quality=75,format=auto,onerror=redirect/https://ipfs.xlog.app/ipfs/bafkreiaw7gktddbd33ygmnbfw4stnqfstlyf57qmlvwrnoszrcrh4tjwoi',
  logo: '/logo.svg',
  siteUrl: 'https://www.xrz.top',
  // icon 请在 src/components/Splash/index.tsx 中修改
  socials: [
    { label: 'GitHub', link: 'https://github.com/xrz-cloud' },
    { label: 'xlog', link: 'https://xrzyun.eu.org/' },
    { label: '友链', link: '/blogroll' },
  ],
  blogroll: [{ name: 'My GitHub | bili-vd-bak 系列仓库', link: 'https://github.com/bili-vd-bak' }],
  language: 'zh-CN', // en | zh-CN
  toc: true, // table of content
  adjacentPosts: true, // prev next links
  markdown: {
    lineNumbers: true,
  },
}

export default config
