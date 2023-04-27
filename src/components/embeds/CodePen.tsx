import React from 'react'
import LazyLoad from '@/components/LazyLoad'

export interface CodePenProps {
  id?: string
  height?: string | number
}

export const CodePen: React.FC<CodePenProps> = props => {
  const { id, height = 500 } = props

  return (
    <LazyLoad className="relative w-full bg-zinc-500/10" style={{ height }}>
      <iframe
        className="absolute left-0 top-0 w-full h-full"
        src={`https://codepen.io/team/embed/${id}?default-tab=result&editable=true&theme-id=dark`}
        title={id}
        frameBorder="0"
      ></iframe>
    </LazyLoad>
  )
}
