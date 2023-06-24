import React from "react";
import { ArticleSection } from "../../common";
import { data } from "../../data";
function About() {
  const data2023 = data.archive.year2023;
  return (
    <>
      <ArticleSection header="Pride 2023 - 17th June">
        <div dangerouslySetInnerHTML={{ __html: data2023.summary }}></div>
        {data2023.images.map((e, i) => {
          return (
            <div key={i} style={{ width: "280px", margin: "auto" }}>
              <img alt={e.alt} src={e.src} style={{ width: "280px" }} />
            </div>
          );
        })}
      </ArticleSection>
    </>
  );
}

export default About;
