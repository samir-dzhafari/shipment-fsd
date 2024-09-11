import React from 'react'
import { aboutBlocks } from '@/pages/landing/model/aboutBlocks'
import { AboutBlock } from '@/widgets/AboutBlock'
import css from './Page.module.css'

export const LandingPage = () => {
  return (
    <main className={css.root}>
      {aboutBlocks.map((block, index) =>
        <AboutBlock key={index} aboutInfo={block} />,
      )}
    </main>
  )
}
