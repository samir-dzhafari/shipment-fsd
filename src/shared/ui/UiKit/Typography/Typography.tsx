import type { ReactNode } from 'react'
import React from 'react'
import { combineClassNames } from '@/shared/lib/combineClassNames'
import type { StyleProps } from '@/shared/lib/StyleProps'
import css from './Typography.module.css'

type VariantHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type VariantBase = 'body' | 'caption'

type Variant = VariantHeading | VariantBase

type Align = 'left' | 'center' | 'right'

type Props = StyleProps & {
  variant?: Variant
  align?: Align
  gutterBottom?: boolean
  children: ReactNode
}

export const Typography: React.FC<Props> = (props) => {
  const variantClassName = (() => {
    switch (props.variant) {
      case 'h1':
        return css.variant_h1
      case 'h2':
        return css.variant_h2
      case 'h3':
        return css.variant_h3
      case 'h4':
        return css.variant_h4
      case 'h5':
        return css.variant_h5
      case 'h6':
        return css.variant_h6
      case 'body':
        return css.variant_body
      case 'caption':
        return css.variant_caption
      default:
        return css.variant_body
    }
  })()

  const alignClassName = (() => {
    switch (props?.align) {
      case 'left':
        return css.align_left
      case 'center':
        return css.align_center
      case 'right':
        return css.align_right
      default:
        return css.align_left
    }
  })()

  return (
    <div
      className={combineClassNames(
        variantClassName,
        alignClassName,
        props?.gutterBottom && css.gutterBottom,
        props?.className,
      )}
      style={props?.style}
    >
      {props.children}
    </div>
  )
}
