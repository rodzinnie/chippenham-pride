import React from 'react'
import styles from './PersonCard.module.css'

function PersonCard({name, role, src}) {
  return (
    <div className={styles.root}>
      <div className={styles.roundPicture}>
        <div className={styles.imgParent}>
          <img src={src} className={styles.img}/>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.role}>{role}</h4>
      </div>
    </div>
  )
}

export default PersonCard