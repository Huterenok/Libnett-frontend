import { ReactNode, useEffect } from "react";
import Head from "next/head";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <link rel="" href="" />
        <meta name="" content="" />
        <meta property="og:image" content="" />
        <meta name="og:title" content="" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
