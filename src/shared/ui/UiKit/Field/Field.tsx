import type { ChangeEvent } from 'react'
import React from 'react'
import { combineClassNames } from '@/shared/lib/combineClassNames'
import type { StyleProps } from '@/shared/lib/StyleProps'
import css from './Field.module.css'

type Variant = 'standard' | 'outlined'

type Props<T> = StyleProps & {
  value: T
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  fullWidth?: boolean
  variant?: Variant
  label?: string
}

export function Field<T extends string | number>(props: Props<T>) {
  return (
    <div className={combineClassNames(css.root, props.className)} style={props.style}>
      <input
        value={props.value}
        placeholder={props?.placeholder}
        className={css.input}

        onChange={props?.onChange}
      />

      <label>{ props.label }</label>
    </div>
  )
}
