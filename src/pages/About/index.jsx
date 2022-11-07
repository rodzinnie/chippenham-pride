import React from 'react'
import styles from './index.module.css'
import {ArticleSection} from '../../common'
function About() {
  return (
    <>
      <ArticleSection header='Mission Statement'>
        <p>We're committed to celebrating our LGBTQIA+ Community. We aim to work toward a future without discrimination where all people have equal rights.
            We aim to host LGBTQIA+ Pride events that inspire, educate, commemorate and celebrate our diverse community within Chippenham and the surrounding areas. We want EVERYONE to know they are not alone! 
            An Inspirational family event that helps support allies as well as the direct community with stalls for mental health, physical health and all other LGBTQIA+ needs. Bringing the fun, acceptance and vibrancy Into our beautiful market town. 
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
      </ArticleSection>
      <ArticleSection header='About our Pride'>

        <h3 className={styles.subheader}><i>Alone we can do so little; together we can do so much.</i> - Hellen Keller</h3>
        <p>In 2023 in The UK we are lucky enough we mostly don't have to fight for our recognition as equal citizens, however, we still have some work to do. There are still young people afraid to come out to their parents, people are still having shameful feelings about being 'Queer'. Still, first thing we do going abroad is checking if we can hold our loved ones by their hand, not having to worry about going to prison or being beat up.</p>
        <p>We are set up to provide Chippenham and the 18 surrounding villages with not only a pride event that brings the fun and vibrancy into the town centre but to also celebrate! Support, educate and represent all members of the LGBTQIA+ community</p>
        <p>Our biggest focus after the entertaining is the Mental and physical well being. Did you know that 50% of LGBTQ teens (ages 13–17) seriously considered attempting suicide in the past year. And 18 percent actually made a suicide attempt. That’s more than twice the rate of suicide attempts amongst all teens, which is 9% - still not an acceptable rate! </p>
        <p>Our well-being, information and safe space area are inviting local and national charities to come along with information and support for not only this but all areas of mental, physical and sexual health. PLEASE KNOW YOU ARE NOT ALONE 🏳️‍🌈❤️</p>
        <p>With the Chippenham Pride, we are hoping to achieve more equality across our town. This beautiful market town deserves being enjoyed by all, and we want everyone to know we support them!</p>

      </ArticleSection>
    </>
  )
}

export default About