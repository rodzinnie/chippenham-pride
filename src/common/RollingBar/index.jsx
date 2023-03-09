import styles from './index.module.css'
import {Button} from '../'
import { Link } from 'react-router-dom';
const RollingBar = () => {
  const text = 'we welcome everyone to our event. It is totally free. For security reasons we kindly ask you to fill out the registration form below.'
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
