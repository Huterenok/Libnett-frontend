import Link from "next/link";

import TextBlock from "components/TextBlock/TextBlock";
import Button from "components/Button";
import BookComponent from "components/BookComponent";

import styles from "./MainHostPage.module.scss";

const MainHostPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <TextBlock>
            This page displays a list of books that belong to your library.
          </TextBlock>
          <Button
            title={<Link href={"/host/addBook"}>ADD A BOOK</Link>}
            style={{ width: 335, height: 40 }}
          />
        </div>
        <div className={styles.rightHeader}>
          <TextBlock>
            You are the host and you have your own library! Really, great? In
            addition to helping readers have a great opportunity to enjoy paper
            books for a small price, you also make money yourself and help
            owners make money. To make your library bigger you don't need to buy
            new books, just rent and add them to your library using the button.
          </TextBlock>
          <TextBlock>We appreciate your trust in our service.</TextBlock>
        </div>
      </div>
      <div className={styles.books}>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"ACCEPT"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"RETURN"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"RETURN"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"ACCEPT"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"ACCEPT"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"RETURN"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"RETURN"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"ACCEPT"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"ACCEPT"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"RETURN"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"RETURN"}
        ></BookComponent>
        <BookComponent
          src="/images/host/list_1.png"
          author={"Margaret Atwood"}
          title={"Tne Handmaid’s Tale"}
          term={"07.09.2023"}
          text={"ACCEPT"}
        ></BookComponent>
      </div>
    </div>
  );
};

export default MainHostPage;
