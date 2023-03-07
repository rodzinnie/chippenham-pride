import { useLocation } from 'react-router-dom'

import styles from './index.module.css'
import {eventDetails} from './data.js'

const EventDetailsCategory = () => {
  const path = useLocation()
  return (
    <div className={styles.parent}>
      {eventDetails.map((e,i) => {
        <div className={styles.wrapper} key={i}>{e.url}, {path} </div>
      })}
    </div>
  )
}

export default EventDetailsCategory