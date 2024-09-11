import type { ReactNode } from 'react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import css from './Layout.module.css'

type Props = {
  header?: ReactNode
  navbar?: ReactNode
  sidebar?: ReactNode
  footer?: ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <div className={css.root}>
        {props.header}
        {props.navbar}
        <div className={css.container}>
          <div className={css.content}>
            <Outlet />
          </div>
          {props.sidebar && <aside className={css.sidebar}>{ props.sidebar }</aside>}
        </div>
        {props.footer && (
          <footer className={css.footer}>
            {props.footer}
          </footer>
        )}
      </div>
    </>
  )
}
