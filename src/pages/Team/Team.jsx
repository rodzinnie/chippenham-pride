import React from 'react'

import styles from './Team.module.css'
import { ArticleSection, PersonCard } from '../../common';
import penny from '../../assets/penny.jpg'
import shaun from '../../assets/avatar.jpg'
import bryan from '../../assets/avatar.jpg'
import bobby from '../../assets/avatar.jpg'
import stu from '../../assets/avatar.jpg'


function Team() {
  return (
    <>
      <ArticleSection header={'Meet our Team'} />
      <div className={styles.root}>
        <PersonCard name={'Penny Richman'} role={'chair'} email={'penny@chippenhampride.corm'} src={penny}/>
        <PersonCard name={'Bryan Houde'} role={'treasurer'} email={'accounts@chippenhampride.com'} src={bryan}/>
        <PersonCard name={'Bobby Pickard'} role={'sponsorship'} email={'sponsorship@chippenhampride.com'} src={bobby}/>
        <PersonCard name={'Stuart Rolfe'} role={'entertainment'} email={'entertainment@chippenhampride.com'} src={stu}/>
      </div>
      <h2 className={styles.subheader}>And others</h2>
    </>
  )
}

export default Team