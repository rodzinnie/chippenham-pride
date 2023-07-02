import React from "react";
import { ArticleSection } from "../../common";
import { data } from "../../data";
const EventDetailsGeneral = () => {
  console.log(data.generalInfo);
  return (
    <ArticleSection header={"Information about the Pride"}>
      <p
        dangerouslySetInnerHTML={{ __html: data.generalEventInfo.paragraphs }}
      ></p>
    </ArticleSection>
  );
};

export default EventDetailsGeneral;
