import { NextComponentType } from 'next'
import React from 'react'
import { AppLayoutContainer, AppLayoutMain } from './styles'

type AppLayoutProps = {
  children: NextComponentType
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppLayoutContainer>
      <AppLayoutMain>{children}</AppLayoutMain>
    </AppLayoutContainer>
  )
}
