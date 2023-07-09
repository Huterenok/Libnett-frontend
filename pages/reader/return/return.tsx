import type { NextPage } from 'next';
import Head from 'next/head';
import ReturnPage from 'screens/reader/ReturnPage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Return Book</title>
      </Head>
      <ReturnPage />
    </>
  );
};

export default Home;
