import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SignIn />}></Route>
    </Routes>
  )
}
