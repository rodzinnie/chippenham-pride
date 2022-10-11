import React from 'react'

import styles from './Team.module.css'
import { PersonCard } from '../../common';

function Team() {
  return (
    <div className={styles.root}>
      <PersonCard name={'John Doe'}/>
      <PersonCard name={'Jane Doe'}/>
      <PersonCard name={'Abra Cardabra'}/>
    </div>
  )
}

export default Team