import { useAccount, useContractRead } from "wagmi";
import { useEffect, useState } from "react";

import RegistrationPage from "./registration/RegistrationPage";
import MainHostPage from "./main/MainHostPage";

import {bookRentalContract} from "utils/contract/index"

const HostPage = () => {
  const [isHost, setIsHost] = useState<boolean>(false);
  const { address } = useAccount();

  const { data } = useContractRead({
    address: bookRentalContract.address as `0x${string}`,
    abi: [bookRentalContract.abi],
    functionName: "hosts",
    args: [address],
  });

  useEffect(() => {
    if (data) {
      setIsHost(true);
    }
  }, [data]);

  return isHost ? <MainHostPage/> : <RegistrationPage setIsHost={setIsHost}/> ;
};

export default HostPage;
