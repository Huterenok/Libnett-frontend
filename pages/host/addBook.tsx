import type { NextPage } from "next";
import Head from "next/head";

import AddBookPage from "screens/host/AddBookPage/AddBookPage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Add Book</title>
      </Head>
      <AddBookPage/>
    </div>
  );
};

export default Home;
