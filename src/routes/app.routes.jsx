import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<DashboardPage />}></Route>
    </Routes>
  )
}
