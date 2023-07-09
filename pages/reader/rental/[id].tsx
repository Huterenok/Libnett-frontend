import type { NextPage } from 'next';
import Head from 'next/head';
import RentalPage from 'screens/reader/RentalPage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Book Rental</title>
      </Head>
      <RentalPage />
    </>
  );
};

export default Home;
