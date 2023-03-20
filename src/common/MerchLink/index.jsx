import {useSelector} from 'react-redux'
import ArticleSection from '../ArticleSection'
import Tile from '../Tile'

const MerchLink = () => {
  const data = useSelector(state => state.data.merchLink)
  return (
    <ArticleSection header={data.header}>
      {/* <div className={styles.}></div> */}
      <a href={data.url} target='_blank'><Tile data={data} carousel={false} variant={'merchLink'} button></Tile></a>
    </ArticleSection>
  )
}

export default MerchLink