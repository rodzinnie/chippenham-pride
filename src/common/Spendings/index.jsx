import {useRef} from 'react'

import {Button} from '../'
import styles from './index.module.css'
const index = () => {
  const more = useRef();

  const showMore = () => {
    if (more.current.style.display == 'block'){
      more.current.style.display = 'none'
    } else {
      more.current.style.display = 'block'
    }
  }
  return (
    <div>
      <div className={styles.buttonWrapper}>
        <Button text='Learn more about our spendings' variant='dark' handleClick={showMore} />
        </div>
        <div ref={more} className={styles.more}>Chippenham Pride is a pro-bono charity. We have a policy of full transparency. With the money you kindly donate, we can pay for the stages, the venue for our talks, we can compensate our great artists and performers for their journey and expenses. If you want to know more about our spendings, please contact Bryan via our contact form.</div>
    </div>
  )
}

export default index