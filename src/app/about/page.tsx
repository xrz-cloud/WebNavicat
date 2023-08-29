import React, { PropsWithChildren } from 'react'
import style from './styles.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

const Tag: React.FC<PropsWithChildren> = props => {
  return (
    <span className="inline-block rounded border bg-amber-500/10 text-amber-900 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-500 px-2 py-1 text-xs leading-none">
      {props.children}
    </span>
  )
}

export default function About() {
  return (
    <div className={clsx('prose-container py-12', style.about)}>
      <h2>🎨 关于本站</h2>
      <p>
        存一些没用且不想发到xlog上的文章 + 小工具， 本站技术栈为 Next.js、MDX、Tailwind
        CSS、TypeScript
      </p>

      <h2>👶🏻 关于我</h2>
      <p>一个随便写写代码的人，我的技能 👇🏻</p>
      <div className="flex items-start flex-wrap gap-2">
        <Tag>React</Tag>
        <Tag>Vue3</Tag>
        <Tag>TypeScript</Tag>
        <Tag>NodeJS</Tag>
        <Tag>Next.js</Tag>
        ...
      </div>

      <h2>📮 找到我</h2>
      <ul>
        <li>
          Email - <Link href="mailto:xrz@xrzyun.eu.org">xrz@xrzyun.eu.org</Link>
        </li>
        <li>
          Github - <Link href="https://github.com/xrz-cloud">https://github.com/xrz-cloud</Link>
        </li>
      </ul>
    </div>
  )
}
