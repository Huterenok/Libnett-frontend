import type { NextPage } from 'next';
import Head from 'next/head';
import SearchPage from 'screens/reader/SearchPage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Book Search</title>
      </Head>
      <SearchPage />
    </>
  );
};

export default Home;
