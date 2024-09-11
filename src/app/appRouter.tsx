import React from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { baseLayout } from '@/app/layouts/baseLayout'
import { LandingPage } from '@/pages/landing'
import { Page } from '@/pages/login/ui/Page'
import { Field } from '@/shared/ui/UiKit/Field/Field'

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
          element: <Field value="" placeholder="placeholder" label="label" />,
        },
      ],
    },
  ])
}
