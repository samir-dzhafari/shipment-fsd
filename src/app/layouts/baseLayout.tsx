import React from 'react'
import { Layout } from '@/shared/ui/Layout/Layout'
import { LayoutHeader } from '@/widgets/LayotHeader'
import {
  LayoutProfileCard,
} from '@/widgets/LayoutProfileCard/ui/LayoutProfileCard'

export const baseLayout = (
  <Layout
    header={(
      <LayoutHeader rightSlot={<LayoutProfileCard />} />
    )}
  />
)
