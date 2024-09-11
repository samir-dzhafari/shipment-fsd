import type { ReactNode } from 'react'
import React from 'react'
import { Logo } from '@/widgets/LayotHeader/ui/Logo/Logo'
import css from './LayoutHeader.module.css'

type Props = {
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}

export const LayoutHeader: React.FC<Props> = (props) => {
  return (
    <header className={css.root}>
      { props?.leftSlot ? props.leftSlot : <Logo />}
      { props?.rightSlot }
    </header>
  )
}
