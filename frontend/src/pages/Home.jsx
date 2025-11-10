import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <marquee className={styles.marquee}>BM Hospital</marquee>
        <h1>Welcome to BM Hospital</h1>
        <p>Book your doctor appointments easily online</p>
      </div>
    </div>
  );
}
