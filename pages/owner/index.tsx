import type { NextPage } from 'next';
import Head from 'next/head';
import OwnerPage from 'screens/owner/OwnerPage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Owner Page</title>
      </Head>
      <OwnerPage />
    </>
  );
};

export default Home;
