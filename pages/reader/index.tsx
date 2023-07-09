import type { NextPage } from 'next';
import Head from 'next/head';
import ReaderPage from 'screens/reader/readerPage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reader Page</title>
      </Head>
      <ReaderPage />
    </>
  );
};

export default Home;
