import styles from './index.module.css'
import {Button} from '../'
import { Link } from 'react-router-dom';
const RollingBar = () => {
  const text = 'We stand in support of the Scottish government and their efforts to pass the gender recognition bill. Join our efforts in promoting the cause by writing a letter to your Member of Parliament!'
  return (
    <div className={styles.bar}>
      <Link to='/whatWeSupport'>
        <div className={styles.newsTicker}>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  )
}

export default RollingBar
