import React, { useRef } from 'react'
import { ArticleSection, Button, GoFundMe, Spendings, Sponsors, Writeup } from '../../common';
import { sponsors, supporters, writeup } from './data';
import styles from './index.module.css'


function Support() {

  const handleClickPP = () => {
    window.location.assign('https://www.gofundme.com/f/chippenham-pride-2023')
  }

  return (
    <ArticleSection className={styles.root} header='Help us support the pride!'>
        <div className={styles.left}>
            <div className={styles.shoutout}></div>
            <p className={styles.p}>Our cause is simple: promote equality in our beautiful town. Without YOUR support, we wouldn't be able to make it!</p>
            <Spendings />
        </div>
        <GoFundMe text='Donate'/>
        <Sponsors data={sponsors} header="Meet our sponsors"/>
        <Writeup>{writeup[0]}</Writeup>
        <Sponsors data={supporters} header="We are supported by"/>
    </ArticleSection>
  )
}

export default Support