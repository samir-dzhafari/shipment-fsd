import type { ElementType, ReactNode } from 'react'
import React from 'react'
import { combineClassNames } from '@/shared/lib/combineClassNames'
import type { StyleProps } from '@/shared/lib/StyleProps'
import css from './Paper.module.css'

type Props = StyleProps & {
  children: ReactNode
  elevation?: boolean
  component?: ElementType
  grow?: boolean
}

export const Paper: React.FC<Props> = (props) => {
  const Component: ElementType = props?.component ?? 'div'

  const elevationClass = props?.elevation ? css.root_elevation : null

  const growClass = props?.grow ? css.root_grow : null

  return (
    <Component
      className={combineClassNames(css.root, props?.className, elevationClass, growClass)}
      style={props?.style}
    >
      {props.children}
    </Component>
  )
}
