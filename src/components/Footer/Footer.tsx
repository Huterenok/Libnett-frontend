import { FC } from "react";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.title}>ETH BCN</div>
      <div className={styles.date}>7-9.08.2023</div>
    </footer>
  );
};

export default Footer;
