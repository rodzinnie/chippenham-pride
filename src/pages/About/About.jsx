import React from 'react'
import styles from './About.module.css'
import {ArticleSection} from '../../common/'
function About() {
  return (
    <ArticleSection header='About our Pride'>

      <h3 className={styles.subheader}><i>Alone we can do so little; together we can do so much.</i> - Hellen Keller</h3>
      <p>In 2023 in The UK we are lucky enough we mostly don't have to fight for our recognition as equal citizens, however, we still have some work to do. There are still young people afraid to come out to their parents, people are still having shameful feelings about being 'Queer'. Still, first thing we do going abroad is checking if we can hold our loved ones by their hand, not having to worry about going to prison or being beat up.</p>
      <br /> 
      <p>With the Chippenham Pride, we are hoping to achieve more equality across our town. This beautiful market town deserves being enjoyed by all, and we want everyone to know we support them!</p>

    </ArticleSection>
  )
}

export default About