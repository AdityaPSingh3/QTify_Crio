import React from "react";
import styles from "../Hero/Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../../assets/headp.png")}
          alt="headphone"
          width={212}
        />
      </div>
    </div>
  );
}

export default Hero;
