import React from 'react'

import styles from './index.module.css'
import { ArticleSection, PersonCard } from '../../common';
import penny from '../../assets/penny.jpg'
import bryan from '../../assets/bryan.jpg'
import bobby from '../../assets/avatar.jpg'
import stu from '../../assets/avatar.jpg'


function Team() {
  return (
    <>
      <ArticleSection header={'Meet our Team'} />
      <div className={styles.root}>
        <PersonCard name={'Penny Richman'} role={'chair'} email={'penny@chippenhampride.com'} src={penny}/>
        <PersonCard name={'Bobbi Pickard'} role={'sponsorship'} email={'sponsorship@chippenhampride.com'} src={bobby}/>
        <PersonCard name={'Stuart Rolfe'} role={'entertainment'} email={'entertainment@chippenhampride.com'} src={stu}/>
        <PersonCard name={'Bryan Houde'} role={'treasurer'} email={'accounts@chippenhampride.com'} src={bryan}/>
      </div>
      <h2 className={styles.subheader}>And others</h2>
    </>
  )
}

export default Team