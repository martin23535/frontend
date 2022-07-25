import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { routes, staticUrls } from 'common/routes'

import DonationMenu from './DonationMenu'
import ProjectMenu from './ProjectMenu'
import DevelopmentMenu from './DevelopmentMenu'

export default function MainNavMenu({ children }: { children?: React.ReactNode }) {
  const { t } = useTranslation()

  return (
    <Grid container direction="row" wrap="nowrap" alignItems="baseline" spacing={1}>
      <Grid item>
        <DonationMenu />
      </Grid>
      <Grid item>
        <ProjectMenu />
      </Grid>
      <Grid item>
        <DevelopmentMenu />
      </Grid>
      <Grid item>
        <Button
          variant="text"
          target="_blank"
          color="primary"
          href={staticUrls.blog}
          style={{ whiteSpace: 'nowrap' }}>
          {t('nav.blog')}
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary" href={routes.support_us}>
          <Typography noWrap>{t('nav.support_us_button')}</Typography>
        </Button>
      </Grid>
      {children}
    </Grid>
  )
}
