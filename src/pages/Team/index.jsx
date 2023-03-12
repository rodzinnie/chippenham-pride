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
        <PersonCard name={'Bobbi Pickard'} role={'sponsorship'} email={'sponsorship@chippenhampride.com'} src={'https://www.transinthecity.co.uk/uploads/1/2/4/1/12414535/bobbiwebsite_orig.jpg'}/>
        <PersonCard name={'Stuart Rolfe'} role={'entertainment'} email={'entertainment@chippenhampride.com'} src={'https://i.scdn.co/image/ab6761610000e5eb2f34440ca30dd0c4e8f6b588'}/>
        <PersonCard name={'Bryan Houde'} role={'treasurer'} email={'accounts@chippenhampride.com'} src={bryan}/>
      </div>
      <h2 className={styles.subheader}>And others</h2>
    </>
  )
}

export default Team