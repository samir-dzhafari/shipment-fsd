import React from 'react'
import css from './Icon.module.css'

type Props = {
  path: string
  size: number
  color: Hex
}

export const Icon: React.FC<Props> = (props) => {
  const size = `${props.size}px`

  return (
    <svg
      className={css.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        width: size,
        height: size,
        fill: props.color,
      }}
    >
      <path d={props.path} />
    </svg>
  )
}
