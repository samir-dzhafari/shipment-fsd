import type { ReactNode } from 'react'
import React from 'react'
import { combineClassNames } from '@/shared/lib/combineClassNames'
import css from './Typography.module.css'

type VariantHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type VariantBase = 'body' | 'caption'

type Variant = VariantHeading | VariantBase

type Props = {
  variant: Variant
  gutterBottom?: boolean
  children: ReactNode
}

export const Typography: React.FC<Props> = (props) => {
  const cName = (() => {
    switch (props.variant) {
      case 'h1':
        return css.h1
      case 'h2':
        return css.h2
      case 'h3':
        return css.h3
      case 'h4':
        return css.h4
      case 'h5':
        return css.h5
      case 'h6':
        return css.h6
      case 'body':
        return css.body
      case 'caption':
        return css.caption
    }
  })()

  return (
    <div
      className={combineClassNames(
        cName,
        props?.gutterBottom && css.gutterBottom,
      )}
    >
      {props.children}
    </div>
  )
}
