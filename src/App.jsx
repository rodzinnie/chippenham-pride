import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import './App.css'
import { Details, MainLayout } from './layouts'
import { DetailsNav, Home, About, BusinessSponsorship, EventDetailsCategory, Stalls, SubmitMessage, Support, Team, TandC, Message, Contact, WhatWeSupport } from './pages'

function App() {
  return (
    <Routes>
      <Route basename='/' element={<MainLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='details' element={<><Outlet /></>}>
          <Route path='main-stage' element={<EventDetailsCategory />} />
          <Route path='small-stage' element={<EventDetailsCategory />} />
          <Route path='comedy' element={<EventDetailsCategory />} />
          <Route path='speakers' element={<EventDetailsCategory />} />
          {/* <Route path='community-stalls' element={<EventDetailsCategory />} /> */}
          <Route path='stalls' element={<Stalls />} />
        </Route>
        <Route path='about' element={<><Outlet /></>}>
          <Route index element={<About />}></Route>
          <Route path='the-team' element={<Team />}></Route>
        </Route>
        <Route path='tsandcs' element={<TandC />}></Route>
        <Route path='for-business' element={<BusinessSponsorship />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='volunteer' element={<Contact />}></Route>
        <Route path='sponsor' element={<Support />}></Route>
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
