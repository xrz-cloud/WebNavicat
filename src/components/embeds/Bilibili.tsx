import React from 'react'
import LazyLoad from '@/components/LazyLoad'

export interface BilibiliProps {
  aid: string
  bvid: string
  cid?: string
  page?: number
}

export const Bilibili: React.FC<BilibiliProps> = props => {
  const { aid, bvid, cid = '', page = 1 } = props

  return (
    <LazyLoad className="relative w-full bg-zinc-400/10 aspect-video">
      <iframe
        className="absolute left-0 top-0 w-full h-full"
        src={`//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=${cid}&page=${page}&autoplay=0`}
        allowFullScreen
      ></iframe>
    </LazyLoad>
  )
}

export default Bilibili
