import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { Form } from './common';
import { MainLayout } from './layouts'
import { Home, About, SubmitMessage, Support, Team, TandC, Message } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='volunteer' element={<Form />}></Route>
        <Route path='support' element={<Support />}></Route>
        <Route path='team' element={<Team />}></Route>
        <Route path='tsandcs' element={<TandC />}></Route>
        <Route path='/submitmessage' element={<SubmitMessage />}></Route>
        <Route path='/message' element={<Message />}></Route>
      </Route>
    </Routes>
  )
}

export default App
