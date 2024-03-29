import React from 'react'

import styles from './index.module.css'
import { ArticleSection, PersonCard, Piechart } from '../../common';
import penny from '../../assets/penny.jpg'
import bryan from '../../assets/bryan.jpg'
import { others } from './data';

function Team() {
  return (
    <>
      <Piechart />
      <ArticleSection header={'Meet our Team'}>
      <div className={styles.root}>
        <PersonCard name={'Penny Richman'} role={'chair'} email={'penny@chippenhampride.com'} src={penny}/>
        <PersonCard name={'Stuart Rolfe'} role={'entertainment'} email={'entertainment@chippenhampride.com'} src={'https://i.scdn.co/image/ab6761610000e5eb2f34440ca30dd0c4e8f6b588'}/>
        <PersonCard name={'Bryan Houde'} role={'treasurer'} email={'accounts@chippenhampride.com'} src={bryan}/>
        <PersonCard name={'Marc MacDivitt'} role={'secretary'} email={'marc@chippenhampride.com'} src={'https://i.postimg.cc/25RswGHc/marc.jpg'}/>
      </div>
      <h2 className={styles.subheader}>And others</h2>
      <div className={styles.others}>
        {others.map((e, i) => {
          return (
            <div key={i}>
              <b>{e.fullName} </b> 
              <em>{e.role}</em>
            </div>
          )
        })}
      </div>
      </ArticleSection>
    </>
  )
}

export default Team