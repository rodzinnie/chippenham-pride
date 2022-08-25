import React from 'react'

import styles from './Home.module.css'

function Home() {
  return (
    <section>
      <article className={styles.article}>
        <h1 className={styles.h1}>Mission Statement</h1>
        <p>We're committed to celebrating our LGBTQIA+ Community. We aim to work toward a future without discrimination where all people have equal rights.
            We aim to host LGBTQIA+ Pride events that inspire, educate, commemorate and celebrate our diverse community within Chippenham and the surrounding areas. We want EVERYONE to know they are not alone! 
            An Inspirational family event that helps support allies as well as the direct community with stalls for mental health, physical health and all other LGBTQIA+ needs. Bringing the fun, acceptance and vibrancy Into our beautiful market town and local businesses footfall to. 
        </p>
        <p><strong>Education: </strong>We aim to deliver informative and valuable education to the LGBTQIA+
          Community AND  the wider community through inviting local as well as national organisations/ charities to host stalls and give information freely to those who
          need or seek it. 
          Representation: We will act as a voice for the LGBTQIA+ community &amp; ensure that
          they are represented at all levels, including but not limited too media and public
          services.
        </p>
        <p>
          <strong>Community: </strong>We believe that a strong community is a safe and welcoming
          Community so we will provide both digital and real-world support that
          strengthen and enhance diverse connections.
        </p>
      </article>
      {/* <Form /> */}
    </section>
  )
}

export default Home