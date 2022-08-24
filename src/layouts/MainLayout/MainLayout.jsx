import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './MainLayout.module.css'
import { Header } from '..'

function MainLayout() {
  return (
    <div className={styles.root}>
        <Header />
        <Outlet />
    </div>
  )
}

export default MainLayout