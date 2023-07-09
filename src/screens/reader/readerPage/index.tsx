import React from "react";
import { useRouter } from "next/router";

import styles from "./ReaderPage.module.scss";
import BookComponent from "components/BookComponent";
import Button from "components/Button";
import { books } from "contexts/index";

const ReaderPage = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.left}>
          <p>This page displays the books you have rented.</p>
          <Button
            title="RENT a book"
            onClick={() => router.push("/reader/search")}
          />
        </div>
        <div className={styles.right}>
          <p>
            Thanks to your utilization of the LIBNET service, you can save a
            significant amount of money compared to purchasing paper books from
            a store. Also the selection of books available is wider compared to
            city libraries.
          </p>
          <p>We appreciate your trust in our service.</p>
        </div>
      </div>
      <div className={styles.grid}>
        {books.map((book) => (
          <BookComponent
            src={book.path}
            author={book.name + book.surname}
            title={book.title}
            term={book.term}
            text={"ACCEPT"}
						key={book.path}
          />
        ))}
      </div>
    </div>
  );
};

export default ReaderPage;
