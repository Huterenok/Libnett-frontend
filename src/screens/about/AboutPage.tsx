import Image from "next/image";

import TextBlock from "components/TextBlock/TextBlock";
import { images } from "./images";

import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <Image
          src="/images/about/schema.png"
          alt="Picture of the author"
          width={1400}
          height={285}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.leftSide}>
          <TextBlock>
            Welcome to LIBNET, a revolutionary step into the world of web3
            services. Liberate your bookworm within and explore a global library
            network that breaks all boundaries.
          </TextBlock>
          <TextBlock>
            LIBNET allows you to create offline libraries, save hefty expenses,
            and even profit from your personal book collection.
          </TextBlock>
          <div className={styles.imgLibrary}>
            {images.map((img) => (
              <Image
                src={img.path}
                alt={img.alt}
                width={180}
                height={120}
                key={img.path}
              />
            ))}
          </div>
        </div>
        <div className={styles.rightSide}>
          <TextBlock>
            Book owners have the opportunity to rent out their books and
            generate income through this platform.
          </TextBlock>
          <TextBlock>
            "By creating your own library, the barriers to entry are
            significantly reduced. There's no need to individually purchase
            books, and advertising costs are eliminated since your library will
            be visible on the application's map.
          </TextBlock>
          <TextBlock>
            For readers, this platform ensures that all kinds of books become
            easily accessible to people from diverse backgrounds.
          </TextBlock>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
