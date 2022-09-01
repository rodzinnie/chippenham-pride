import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './MainLayout.module.css'
import { Header, Footer } from '..'

function MainLayout() {
  return (
    <div className={styles.root}>
        <Header />
        <div className={styles.outlet}>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout