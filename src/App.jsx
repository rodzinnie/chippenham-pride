import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { MainLayout } from './layouts'
import { Home, About, SubmitMessage } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
      </Route>
      <Route path='/submitmessage' element={<SubmitMessage />}></Route>
    </Routes>
  )
}

export default App
