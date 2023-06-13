import { useSelector } from "react-redux";
import prog from '../../assets/pride_programme.pdf' 
import map from '../../assets/Map.pdf' 
import { ArticleSection, LineUp } from "../../common";
import styles from "./index.module.css";
import { data } from "../../data";
const DetailsNav = () => {
  const lineup = useSelector((state) => state.data.lineup);

  return (
    <>
    <ArticleSection header={'the Programme'}>
      <img
        src="https://i.postimg.cc/Bbyv9jCM/IMG-1677.jpg"
        alt="Pride programme"
        style={{ display: "block" }}
      />
      <p style={{ width: "fit-content", margin: "40px auto" }}>
        <a href={prog} download>
          Download Programme
        </a>
      </p>
      <p style={{ width: "fit-content", margin: "40px auto" }}>
        <a href={map} download>
          Download Map
        </a>
      </p>
      </ArticleSection>
      <ArticleSection header={"the event"}>
        <div
          className={styles.list}
          dangerouslySetInnerHTML={{ __html: data.eventDetailTexts.list }}
        ></div>
      </ArticleSection>
    </>
  );
};

export default DetailsNav;
