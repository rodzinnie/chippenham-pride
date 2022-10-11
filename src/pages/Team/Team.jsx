import React from 'react'

import styles from './Team.module.css'
import { PersonCard } from '../../common';
import penny from '../../assets/penny.jpg'
import shaun from '../../assets/avatar.jpg'
import bryan from '../../assets/avatar.jpg'


function Team() {
  return (
    <div className={styles.root}>
      <PersonCard name={'Penny Richman'} role={'chair'} src={penny}/>
      <PersonCard name={'Shaun Holley'} role={'secretary'} src={shaun}/>
      <PersonCard name={'Bryan Houde'} role={'treasurer'} src={bryan}/>
    </div>
  )
}

export default Team