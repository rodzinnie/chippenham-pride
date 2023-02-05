import styles from './index.module.css'

const RollingBar = () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
  return (
    <div className={styles.bar}>
      <div className={styles.breaking}>Breaking News</div>
      <div className={styles.newsTicker}>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default RollingBar
