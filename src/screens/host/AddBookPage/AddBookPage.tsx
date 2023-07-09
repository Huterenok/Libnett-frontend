import { useRef, useState } from "react";
import { useAccount, useContractWrite } from "wagmi";

import Input from "components/Input/Input";
import FileInput from "components/FileInput";
import Button from "components/Button";

import { bookRentalContract } from "utils/contract";
import { inputs } from "./inputs";

import styles from "./AddBookPage.module.scss";

const AddBookPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<Blob | null | undefined>();
  const { address } = useAccount();

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: bookRentalContract.address as `0x${string}`,
    abi: [bookRentalContract.abi],
    functionName: "createBook",
  });

  const sendData = () => {
    if (!formRef.current || !address) {
      return;
    }
    const formData = new FormData(formRef.current);

    const [title, surname, name, year, isbn, wallet_address, term, price] = [
      formData.get("TITLE"),
      formData.get("AUTHER'S SURNAME"),
      formData.get("AUTHER'S NAME"),
      formData.get("PUBLISHING YEAR"),
      formData.get("ISBN"),
      formData.get("WALLET ADDRESS"),
      formData.get("TERM"),
      formData.get("PRICE"),
    ];

    write({
      //FIX
      args: [title, isbn, wallet_address, Number(price)],
    });
  };

  return (
    <form ref={formRef} action={sendData} className={styles.wrapper}>
      <div className={styles.leftSide}>
        {inputs.map((input) => (
          <Input
            key={input.title}
            size={input.size}
            title={input.title}
            name={input.title}
          />
        ))}
      </div>
      <div className={styles.rightSide}>
        <FileInput value={file} setValue={setFile} />
        <Button
          type="submit"
          title="ADD A BOOK"
          style={{ width: 335, height: 40 }}
        />
      </div>
    </form>
  );
};

export default AddBookPage;
