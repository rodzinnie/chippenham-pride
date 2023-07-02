import React from "react";

import { Button } from "../";
import styles from "./index.module.css";
import gofundme from "../../assets/gofundme.png";
import sticky from "../../assets/sticky.gif";

function GoFundMe({ noImage, light, text, handleClick }) {
  const gofundmeClick = () => {
    window.location.assign("https://www.gofundme.com/f/chippenham-pride-2023");
  };
  const stickyClick = (e) => {
    window
      .open(
        "https://sticky.to/go/flow/a90fbb2a-6695-4dc9-882f-649eaf617844",
        "_blank"
      )
      .focus();
  };
  return (
    <>
      <div className={styles.right}>
        {!noImage && (
          <>
            <img className={styles.img} src={gofundme} />
            <Button
              text={"Donate"}
              variant={light ? "light" : "dark"}
              className={styles.button}
              handleClick={handleClick ? handleClick : gofundmeClick}
            />
          </>
        )}
      </div>
      <div className={styles.right}>
        {!noImage && <img className={styles.img} src={sticky} />}
        <Button text="Donate" variant="dark" handleClick={stickyClick} />
      </div>
    </>
  );
}

export default GoFundMe;
