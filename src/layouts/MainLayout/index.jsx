import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './index.module.css'
import { Header, Footer } from '..'
import { UpButton } from '../../common';

function MainLayout() {
  return (
    <div className={styles.root}>
        <Header />
        <UpButton />
        <div className={styles.outlet}>
          <Outlet />
        </div>
        <Footer />
        
    </div>
  )
}

export default MainLayout