import BookComponent from 'components/BookComponent';
import React from 'react';
import styles from './SearchPage.module.scss';
import SearchInput from 'components/SearchInput';

const SearchPage = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.left}>
          <p>This page displays the books you have rented.</p>
          <SearchInput value={searchValue} setValue={setSearchValue} />
        </div>
        <div className={styles.right}>
          <p>
            Thanks to your utilization of the LIBNET service, you can save a significant amount of
            money compared to purchasing paper books from a store. Also the selection of books
            available is wider compared to city libraries.
          </p>
          <p>We appreciate your trust in our service.</p>
        </div>
      </div>
      <div className={styles.grid}>
        <BookComponent />
        <BookComponent />
        <BookComponent />
        <BookComponent />
      </div>
    </div>
  );
};

export default SearchPage;
