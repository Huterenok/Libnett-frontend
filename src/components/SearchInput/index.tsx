import React from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  value: string;
  setValue: (v: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, setValue }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgCon}>
        <img className={styles.img} src="/images/searchIcon.png" />
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
