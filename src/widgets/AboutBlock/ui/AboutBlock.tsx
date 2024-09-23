import React from 'react'
import { Paper } from '@/shared/ui/UiKit/Paper/Paper'
import { Typography } from '@/shared/ui/UiKit/Typography/Typography'
import type { AboutInfo } from '@/widgets/AboutBlock/model/types'
import css from './AboutBlock.module.css'

type Props = {
  aboutInfo: AboutInfo
}

export const AboutBlock: React.FC<Props> = (props) => {
  return (
    <Paper component="section" className={css.root}>
      <div className={css.title}>
        <Typography variant="h4" gutterBottom>{ props.aboutInfo.title }</Typography>
      </div>
      <div className={css.content}>
        { props.aboutInfo.texts.map((text, index) => (
          <Typography key={index} variant="body">
            { text }
          </Typography>
        )) }
        { props.aboutInfo?.imageSource && (
          <div className={css.image}>
            <image path={props.aboutInfo.imageSource}></image>
          </div>
        ) }
      </div>
    </Paper>
  )
}
