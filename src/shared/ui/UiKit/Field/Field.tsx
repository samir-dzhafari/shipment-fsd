import type { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import React, { forwardRef } from 'react'
import type { UseFormProps } from 'react-hook-form'
import { combineClassNames } from '@/shared/lib/combineClassNames'
import type { StyleProps } from '@/shared/lib/StyleProps'
import { Typography } from '@/shared/ui/UiKit/Typography/Typography'
import css from './Field.module.css'

type Variant = 'standard' | 'outlined'

type Align = 'left' | 'center' | 'right'

type Props = StyleProps & {
  name?: string
  placeholder?: string
  fullWidth?: boolean
  variant?: Variant
  label?: string
  type?: HTMLInputTypeAttribute
  align?: Align
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  isError?: boolean
  helperText?: string
} & UseFormProps

export const Field = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const alignClassName = (
    () => {
      switch (props?.align) {
        case 'left':
          return css.input_align_left
        case 'center':
          return css.input_align_center
        case 'right':
          return css.input_align_right
        default:
          return css.input_align_left
      }
    }
  )()

  const gutterBottomClassName = (
    () => {
      if (props?.helperText) {
        return css.root_gutter_bottom
      }
    }
  )()

  // const isError =

  return (
    <div
      className={
        combineClassNames(
          css.root,
          gutterBottomClassName,
          props.className,
        )
      }
      style={props.style}
    >
      <input
        className={combineClassNames(css.input, alignClassName)}
        ref={ref}
        formNoValidate
        {...props}
      />
      <label>{ props.label }</label>
      { props?.helperText && (
        <Typography variant="caption" className={css.helperText}>
          { props?.helperText }
        </Typography>
      ) }
    </div>
  )
})
