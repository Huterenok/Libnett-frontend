import { ChangeEvent, useRef } from "react";

import styles from "./Input.module.scss";

export enum InputSize {
  L,
  M,
}

interface InputProps<T> {
  size?: InputSize;
  value?: T;
  setValue?: (state: T) => void;
  title?: string;
  name?: string;
  style?: React.CSSProperties;
}

function Input<T extends string | number>({
  size = InputSize.M,
  setValue,
  value,
  title = "",
  name = "",
  style,
}: InputProps<T>) {
  const ref = useRef<HTMLInputElement>(null);

  const width = size == InputSize.L ? "570px" : "250px";
  const inputWidth = size == InputSize.L ? "350px" : "110px";

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value as T);
    }
  };

  const inputFocus = () => {
    ref.current?.focus();
  };

  return (
    <div
      className={styles.wrapper}
      style={{ width, ...style }}
      onClick={inputFocus}
    >
      <div className={styles.title}>{title?.toUpperCase()}</div>
      <input
        ref={ref}
        type="text"
        onChange={changeValue}
        className={styles.input}
        value={value}
        style={{ width: inputWidth }}
        name={name}
      />
    </div>
  );
}

export default Input;
