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

export default function TB() {
  return (
    <div className={clsx('prose-container py-12', style.about)}>
      <h2>工具/服务</h2>
      <ul>
        <li>
          <Link href="/toolbox/LocalPlayer">弹弹Play网页版(手搓Unofficial) | bili-vd-bak</Link>
        </li>
        <li>
          <Link href="https://hk.bili.xrzyun.eu.org" target="_blank">
            Bili漫游服务端(TypeScript) - HKG | bili-vd-bak
          </Link>{' '}
          - hk.bili.xrzyun.eu.org
        </li>
        <li>
          <Link href="https://share.xrzyun.top" target="_blank">
            番剧分享 | bili-vd-bak
          </Link>
        </li>
      </ul>
    </div>
  )
}
