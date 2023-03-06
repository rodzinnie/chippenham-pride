import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import './App.css'
import { Details, MainLayout } from './layouts'
import { DetailsNav, Home, About, BusinessSponsorship, SubmitMessage, Support, Team, TandC, Message, Contact, WhatWeSupport } from './pages'

function App() {
  return (
    <Routes>
      <Route basename='/' element={<MainLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='details' element={<><Outlet /></>}>
          <Route path='main-stage' element={<div>Main Stage</div>} />
          <Route path='small-stage' element={<div>Small Stage</div>} />
          <Route path='community-stalls' element={<div>Community Stalls</div>} />
          <Route path='commercial-stalls' element={<div>Commercial Stalls</div>} />
        </Route>
          <Route path='guests' element={<div>Speakers list here</div>} />
        <Route path='about' element={<><Outlet /></>}>
          <Route index element={<About />}></Route>
          <Route path='for-business' element={<BusinessSponsorship />}></Route>
          <Route path='the-team' element={<Team />}></Route>
        </Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='sponsor' element={<Support />}></Route>
        <Route path='tsandcs' element={<TandC />}></Route>
        <Route path='submitmessage' element={<SubmitMessage />}></Route>
        <Route path='message' element={<Message />}></Route>
        <Route path='whatWeSupport' element={<WhatWeSupport />}></Route>
        <Route path='details' element={<Details />}>
          <Route index element={<DetailsNav />}></Route>
          {/* <Route path='main-stage' element={< />}></Route> */}
        </Route>
      </Route>

    </Routes>
  )
}

export default App
