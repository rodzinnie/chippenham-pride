import { ArticleSection } from "../";
import styles from "./index.module.css";
import DescriptionToggle from "./DescriptionToggle";

const LineUp = ({ lineup }) => {
  return (
    <ArticleSection header={"The Lineup!"}>
      {lineup.map((stage, i) => {
        return (
          <div key={i} className={styles.section}>
            <div className={styles.container}> 
            <h3 className={styles.subhead}>{stage.place}</h3>
            <ul className={styles.list}>
              {stage.list.map((e, i) => {
                return (
                  <li key={i} className={styles.li}>
                    {e.time && <span className={styles.time}>{e.time}</span>}
                    {e.heading && <div className={styles.heading}><b>{e.heading}</b></div>}
                    {e.artist && (
                      <span className={styles.artist} dangerouslySetInnerHTML={{__html: e.artist}}></span>
                      )}
                    {e.description && <DescriptionToggle short={e.short} long={e.description} link={e.link}/>}
                  </li>
                );
              })}
            </ul>
              </div> 
          </div>
        );
      })}
    </ArticleSection>
  );
};

export default LineUp;
