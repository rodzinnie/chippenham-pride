import React, { useRef } from 'react'
import { ArticleSection, Button } from '../../common';
import styles from './Support.module.css'
import gofundme from '../../assets/gofundme.png'
import paypal from '../../assets/paypal.png'


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
        <div className={styles.left}>
            <div className={styles.shoutout}>Help us support the pride!</div>
            <Button text='Learn more about our spendings' variant='light' handleClick={showMore} />
          <div ref={more} className={styles.more}>Chippenham Pride is a pro-bono charity. We have a policy of total transparency. If you want to know more about our spendings, please contact Bryan via our contact form.</div>
        </div>
        <div className={styles.right}>
            {/* <Button text='Donate with PayPal' variant='dark' className={styles.button} handleClick={handleClickPP}/> */}
            <iframe
              className={styles.donatepp}
              src="https://www.paypal.com/giving/campaigns?campaign_id=R7BQRSQPLBM3A"
              title="PayPal donate campaign card"
              frameborder="0"
              width='400'
              height='425'
              background='transparent'
              scrolling="no"></iframe>
            <Button text='Donate with Go Fund Me' variant='dark'  className={styles.button} handleClick={handleClick}/>
            <img className={styles.img} src={gofundme} />
        </div>
    </div>
  )
}

export default Support