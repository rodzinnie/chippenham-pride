import React from 'react'

import styles from './Team.module.css'
import { PersonCard } from '../../common';

function Team() {
  return (
    <div className={styles.root}>
      <PersonCard />
      <PersonCard />
      <PersonCard />
    </div>
  )
}

export default Team