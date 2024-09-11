import React from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

export const AuthGuard: React.FC<Props> = ({ children }) => {
  const isAuthorized = false

  return isAuthorized ? children : <Navigate to="/" />
}
