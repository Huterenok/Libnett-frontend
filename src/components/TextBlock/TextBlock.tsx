import { ReactNode } from "react";
import styles from "./TextBlock.module.scss";

interface TextBlockProps {
  children: ReactNode;
}

const TextBlock = ({ children }: TextBlockProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default TextBlock;
