import { useRef } from "react";
import { useAccount, useContractWrite } from "wagmi";
import Image from "next/image";

import Input from "components/Input/Input";
import Button from "components/Button";

import { inputs } from "./inputs";
import { bookRentalContract } from "utils/contract/index";

import styles from "./Registration.module.scss";

interface RegistrationPage {
  setIsHost: (s: boolean) => void;
}

const RegistrationPage = ({ setIsHost }: RegistrationPage) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { address } = useAccount();

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: bookRentalContract.address as `0x${string}`,
    abi: [bookRentalContract.abi],
    functionName: "becomeHost",
  });

  const sendData = () => {
    if (!formRef.current || !address) {
      return;
    }
    const formData = new FormData(formRef.current);

    const [
      name,
      country,
      city,
      location_address,
      contact,
      speciality,
      host_fee,
      owner_fee,
    ] = [
      formData.get("LIBRARY NAME"),
      formData.get("COUNTRY"),
      formData.get("CITY"),
      formData.get("ADDRESS"),
      formData.get("CONTACT"),
      formData.get("SPECIALITY"),
      formData.get("HOSTING FEE"),
      formData.get("OWNER FEE"),
    ];

    write({
      args: [address, Number(owner_fee), Number(host_fee)],
    });

    setIsHost(true);
  };

  return (
    <form ref={formRef} className={styles.wrapper}>
      <div className={styles.leftSide}>
        {inputs.map((input) => (
          <Input
            size={input.size}
            name={input.title}
            title={input.title}
            key={input.title}
          />
        ))}
      </div>
      <div className={styles.rightSide}>
        <Image
          src="/images/host/form_sheme 1.png"
          alt="Host Schema"
          width={625}
          height={490}
        />
        <Image
          src="/images/host/form_1.png"
          className={styles.img1}
          alt="Books"
          width={140}
          height={93}
        />
        <Image
          src="/images/host/form_2.png"
          className={styles.img2}
          alt="Books"
          width={140}
          height={93}
        />
        <Button
          onClick={sendData}
          title="BECOME A HOST"
          style={{ width: 335, height: 40, marginTop: "30px" }}
        />
      </div>
    </form>
  );
};

export default RegistrationPage;
