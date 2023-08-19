import React, { useState } from 'react'
import { animated, config, useSpring } from '@react-spring/web'
import { Restore } from '@/components/icons'

const ResetButton: React.FC<{ onClick: () => void }> = props => {
  const { onClick } = props
  const [rotation, setRotation] = useState(0)

  const { rotate } = useSpring({
    to: { rotate: rotation },
    config: config.slow,
  })

  function handleClick() {
    onClick?.()
    setRotation(rotation - 360)
  }

  return (
    <animated.button
      className="cursor-pointer text-zinc-400 text-lg hover:text-zinc-300 transition-colors"
      style={{ rotate }}
      onClick={handleClick}
      aria-label="refresh"
    >
      <Restore onClick={onClick} aria-hidden />
    </animated.button>
  )
}

export default ResetButton
