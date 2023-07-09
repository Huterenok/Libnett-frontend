import type { NextPage } from "next";
import Head from "next/head";

import AboutPage from "screens/about/AboutPage"

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <AboutPage/>
    </div>
  );
};

export default Home;
