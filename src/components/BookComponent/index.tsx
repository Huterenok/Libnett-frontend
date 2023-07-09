import React, { ReactNode } from "react";

import styles from "./BookComponent.module.scss";
import Button from "components/Button";

interface BookComponentProps {
  onClick?: () => void;
  text?: string | ReactNode;
  author: string;
  title: string;
  term: string;
  src: string;
}

const BookComponent = ({
  onClick,
  text = "Return the book",
  author,
  term,
  title,
  src,
}: BookComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgCon}>
        <img className={styles.img} src={src} />
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <p className={styles.title}>Title:</p>
          <p className={styles.value}>{title}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.title}>Author:</p>
          <p className={styles.value}>{author}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.title}>Term:</p>
          <p className={styles.value}>{term}</p>
        </div>
        <Button onClick={onClick} style={{ height: 28 }} title={text} />
      </div>
    </div>
  );
};

export default BookComponent;
