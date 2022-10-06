import React, { useRef } from 'react'
import { Button } from '../../common';
import styles from './Support.module.css'
import paypal from '../../assets/paypal.png'
import gofundme from '../../assets/gofundme.png'
import sponsorship from '../../assets/Sponsorship1.pdf'
import sponsorshipSmallBiz from '../../assets/SponsorshipSmallBiz.pdf'
import sponsorshipCorporate from '../../assets/SponsorshipCorporates.pdf'

function Support() {
  const more = useRef();
  const handleClick = () => {
    window.location.assign('https://www.gofundme.com/f/chippenham-pride-2023')
  }

  const showMore = () => {
    if (more.current.style.display == 'block'){
      more.current.style.display = 'none'
    } else {
      more.current.style.display = 'block'
    }
  }

  return (
    <div className={styles.root}>
        <article className={styles.sponsorPacks}>
          <h1 className={styles.h1}>Learn about our Sponsorship Packages</h1>
          <a href={sponsorship} className={styles.button} download>
            <Button text='Download a general Sponsorship pack'></Button>
          </a>
          <a href={sponsorshipSmallBiz} className={styles.button} download>
            <Button text='Download Sponsorship pack for Small Businesses'></Button>
          </a>
          <a href={sponsorshipCorporate} className={styles.button} download>
            <Button text='Download Sponsorship pack for Corporates'></Button>
          </a>
        </article>

        <div className={styles.left}>
            <div className={styles.shoutout}>Help us support the pride!</div>
            <Button text='Learn more about our spendings' variant='light' handleClick={showMore} />
          <div ref={more} className={styles.more}>Chippenham Pride is a pro-bono charity. We have a policy of total transparency. If you want to know more about our spendings, please contact Bryan via our contact form.</div>
        </div>
        <div className={styles.right}>
            <Button text='Donate with PayPal' variant='dark' className={styles.button} handleClick={() => console.log('elo')}/>
            <img className={styles.img} src={paypal} />
            <Button text='Donate with Go Fund Me' variant='dark'  className={styles.button} handleClick={handleClick}/>
            <img className={styles.img} src={gofundme} />
        </div>
    </div>
  )
}

export default Support