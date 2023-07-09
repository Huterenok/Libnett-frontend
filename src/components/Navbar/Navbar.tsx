import React from "react";
import Link from "next/link";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";

import { getTitle } from "./lib";
import { links } from "./links";

import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [shortAddress, setShortAddress] = React.useState<string>("");

  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { disconnect } = useDisconnect();

  const { pathname } = useRouter();

  const connectWallet = () => {
    openConnectModal!();
  };

  React.useEffect(() => {
    setIsMounted(true);
    setShortAddress(`${address?.slice(0, 6)}...`);
  }, [shortAddress, address]);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.leftSide}>
          <Link href={"/"}>ABOUT</Link>
          {isMounted &&
            (!isConnected ? (
              <div className={styles.connectBtn} onClick={connectWallet}>
                CONNECT WALLET
              </div>
            ) : (
              address && (
                <p className={styles.address} onClick={() => disconnect()}>
                  {address?.slice(0, 6)}...
                </p>
              )
            ))}
        </div>
        {isMounted && isConnected && (
          <div className={styles.rightSide}>
            {links.map((link) => (
              <Link href={link.path} key={link.path}>
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className={styles.bottomBar}>{getTitle(pathname)}</div>
    </nav>
  );
};

export default Navbar;
