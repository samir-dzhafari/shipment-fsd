import React from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { baseLayout } from '@/app/layouts/baseLayout'
import { LandingPage } from '@/pages/landing'
import { Page } from '@/pages/login/ui/Page'
import { Button } from '@/shared/ui/UiKit/Button/Button'
import { Typography } from '@/shared/ui/UiKit/Typography/Typography'

export function appRouter() {
  return createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <>Error element</>,
      children: [
        {
          path: '',
          element: <LandingPage />,
        },
        {
          path: '/login',
          element: <Page />,
        },
      ],
    },
    {
      element: <div style={{ padding: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}><Outlet /></div>,
      errorElement: <>Error element</>,
      children: [
        {
          path: '/test',
          element: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h1">Test 1</Typography>
              <Typography variant="h2">Test 2</Typography>
              <Typography variant="h3">Test 3</Typography>
              <Typography variant="h4">Test 4</Typography>
              <Typography variant="h5">Test 5</Typography>
              <Typography variant="h6">Test 6</Typography>
              <Button submit size="medium">Войти</Button>
            </div>
          ),
        },
      ],
    },
  ])
}
