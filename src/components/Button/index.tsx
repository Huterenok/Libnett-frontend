import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  title: string | ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset' | undefined;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, style, type = 'button' }) => {
  return (
    <div onClick={() => onClick?.()} className={styles.wrapper} style={{ ...style }}>
      <p className={styles.title}>
        <button type={type}>{title}</button>
      </p>
    </div>
  );
};

export default Button;
