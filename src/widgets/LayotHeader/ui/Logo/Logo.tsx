import React from 'react'
import { Link } from 'react-router-dom'
import { colorProvider } from '@/shared/lib/colors'
import { combineClassNames } from '@/shared/lib/combineClassNames'
import { mdiTruckCargoContainer } from '@/shared/lib/icons'
import type { StyleProps } from '@/shared/lib/StyleProps'
import { Icon } from '@/shared/ui/UiKit/Icon/Icon'
import { Typography } from '@/shared/ui/UiKit/Typography/Typography'
import css from './Logo.module.css'

export const Logo: React.FC<StyleProps> = (props) => {
  return (
    <Link className={combineClassNames(css.root, props.className)} style={props.style} to="/">
      <Icon
        path={mdiTruckCargoContainer}
        size={32}
        color={colorProvider.element.primary}
      />
      <Typography variant="h6">Shipment</Typography>
    </Link>
  )
}
