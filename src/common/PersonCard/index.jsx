import React from 'react'
import styles from './index.module.css'

function PersonCard({name, role, src, email}) {
  return (
    <div className={styles.root}>
      <div className={styles.roundPicture}>
        <div className={styles.imgParent}>
          <img src={src} className={styles.img}/>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.role}>{role}</h4>
        <h4 className={styles.email}>{email || 'accounts@chippenhampride.com'}</h4>
      </div>
    </div>
  )
}

export default PersonCard