import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './MainLayout.module.css'
import { Header, Footer } from '..'

function MainLayout() {
  return (
    <div className={styles.root}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout