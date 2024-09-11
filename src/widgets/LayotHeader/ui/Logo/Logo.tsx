import React from 'react'
import { Link } from 'react-router-dom'
import { colorProvider } from '@/shared/lib/colors'
import { mdiTruckCargoContainer } from '@/shared/lib/icons'
import { Icon } from '@/shared/ui/UiKit/Icon/Icon'
import { Typography } from '@/shared/ui/UiKit/Typography/Typography'
import css from './Logo.module.css'

export const Logo = () => {
  return (
    <Link className={css.root} to="/">
      <Icon
        path={mdiTruckCargoContainer}
        size={32}
        color={colorProvider.element.primary}
      />
      <Typography variant="h4">Shipment</Typography>
    </Link>
  )
}
