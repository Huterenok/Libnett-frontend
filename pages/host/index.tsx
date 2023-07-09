import type { NextPage } from "next";
import Head from "next/head";

import HostPage from "screens/host/HostPage/HostPage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Become a Host</title>
      </Head>
      <HostPage />
    </div>
  );
};

export default Home;
