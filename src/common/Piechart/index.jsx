import { PieChart } from "react-minimal-pie-chart"
import {ArticleSection} from "../"
import styles from './index.module.css'

const Piechart = () => {

  const defaultLabelStyle = {
    fontSize: '0.3rem',
  }

  const data = [
    { title: 'Yet to be found', value: 22, color: '#ff000050' },
    { title: 'Sponsorship', value: 65, color: '#ffa50050' },
    { title: 'Grants', value: 12, color: '#ffff0050' },
    { title: 'Donations & Merch', value: 4, color: '#00800050' },
  ]

  return (
    <ArticleSection header={'Did you know?'}>
      <p>All of the members of our team are volunteers. Between our jobs, nappy changes, school runs, clients etc, we meet a couple of times a month to discuss all the plans in detail and update on our progress.</p>
      <p>The money that we continue to raise will go 100% towards the organisation of the pride. And below you can see how we raised it.</p>
      <br />
      <h2 style={{textAlign: 'center'}}>How did we raise the pride money?</h2>
      <div className={styles.pie}>  
      <PieChart
        data={data}
        label={({ dataEntry }) => dataEntry.value + '% - ' + dataEntry.title}
        labelStyle={{
          ...defaultLabelStyle,
        }}      
        radius={42}
        animate
        labelPosition={82}
        style={{ height: '250px' }}        
      />
      </div>
    </ArticleSection>
  )
}
export default Piechart