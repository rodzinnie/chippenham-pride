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

  const handleClickPP = () => {
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

        <div className={styles.left}>
            <div className={styles.shoutout}>Help us support the pride!</div>
            <Button text='Learn more about our spendings' variant='light' handleClick={showMore} />
          <div ref={more} className={styles.more}>Chippenham Pride is a pro-bono charity. We have a policy of total transparency. If you want to know more about our spendings, please contact Bryan via our contact form.</div>
        </div>
        <div className={styles.right}>
            {/* <Button text='Donate with PayPal' variant='dark' className={styles.button} handleClick={handleClickPP}/> */}
            <form className={styles.ppform} action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="campaign_id" value="R7BQRSQPLBM3A" />
              <input className={styles.donate} type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
              <img className={styles.imgpp} src={paypal} />
            <Button text='Donate with Go Fund Me' variant='dark'  className={styles.button} handleClick={handleClick}/>
            <img className={styles.img} src={gofundme} />
        </div>
    </div>
  )
}

export default Support