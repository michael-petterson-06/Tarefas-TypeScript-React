import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.react_ts}>
        <span>React + TS Todo</span> @ 2023
      </p>
      <p>
        Michael Petterson
      </p>
    </footer>
  );
};

export default Footer;