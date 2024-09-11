import type { ReactNode } from 'react'
import React from 'react'
import { combineClassNames } from '@/shared/lib/combineClassNames'
import type { StyleProps } from '@/shared/lib/StyleProps'
import css from './Button.module.css'

type Variant = 'primary' | 'secondary'

type Size = 'small' | 'medium' | 'large'

type Props = StyleProps & {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
  variant?: Variant
  size?: Size
  disabled?: boolean
}

export const Button: React.FC<Props> = (props) => {
  const variant = props?.variant ? props?.variant : 'primary'
  const size = props?.size ?? 'medium'

  return (
    <button
      disabled={props.disabled}
      className={combineClassNames(
        css.root,
        css[`root_theme_${variant}`],
        css[`root_size_${size}`],
        props.disabled && css.root_disabled,
        props.className,
      )}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
