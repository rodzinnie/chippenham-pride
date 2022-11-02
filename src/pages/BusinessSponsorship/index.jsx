import React from 'react'

import {Button, ArticleSection} from '../../common'
import styles from './index.module.css'
import sponsorship from '../../assets/Sponsorship1.pdf'
import sponsorshipSmallBiz from '../../assets/SponsorshipSmallBiz.pdf'
import sponsorshipCorporate from '../../assets/SponsorshipCorporates.pdf'

function BusinessSponsorship() {
  return (
    <div className={styles.root}>
      <article className={styles.sponsorPacks}>
      <ArticleSection header='Learn about our Sponsorship Packages' />
      <a href={sponsorship} className={styles.button} download>
        <h3 className={styles.h3}>General Sponsorship Pack</h3>
        <Button variant='dark' text='Download'></Button>
      </a>
      <a href={sponsorshipSmallBiz} className={styles.button} download>
        <h3 className={styles.h3}>Sponsorship pack for Small Businesses</h3>
        <Button variant='dark' text='Download'></Button>
      </a>
      <a href={sponsorshipCorporate} className={styles.button} download>
        <h3 className={styles.h3}>Sponsorship pack for Corporates</h3>
        <Button variant='dark' text='Download'></Button>
      </a>
    </article>
  </div>
  )
}

export default BusinessSponsorship