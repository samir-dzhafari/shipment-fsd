import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  link?: string
  children: React.ReactNode
}

export const LinkIfNeeded: React.FC<Props> = (props) => {
  return props?.link ? <Link to={props.link}>{props.children}</Link> : props.children
}
