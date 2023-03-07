import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './index.module.css'
import { Hero, Footer } from '..'
import { UpButton } from '../../common';

function MainLayout() {
  return (
    <div className={styles.root}>
        <Hero />
        <UpButton />
        <div className={styles.outlet}>
          <Outlet />
        </div>
        <Footer />
        
    </div>
  )
}

export default MainLayout