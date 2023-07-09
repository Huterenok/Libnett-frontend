import React from "react";
import styles from "./OwnerPage.module.scss";
import { useRouter } from "next/router";
import BookComponent from "components/BookComponent";
import Button from "components/Button";

import { books } from "contexts";

const OwnerPage = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.left}>
          <p>This page displays a list of books that you have lended.</p>
          <Button
            title="FInd a host"
            onClick={() => router.push("/reader/search")}
            style={{ width: 335, height: 40 }}
          />
        </div>
        <div className={styles.right}>
          <p>
            Thanks to your utilization of the LIBNET service and lending books,
            you not only earn money but also contribute to saving readers'
            expenses and benefiting the environment.
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

export default OwnerPage;
