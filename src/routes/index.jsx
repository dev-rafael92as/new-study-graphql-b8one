import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage'
import { SignIn } from '../pages/SignIn'

export const Routes = () => {
    const auth = true

  return (
    <BrowserRouter>
     {auth ? <SignIn /> : <DashboardPage />} 
    </BrowserRouter>
  )
}
