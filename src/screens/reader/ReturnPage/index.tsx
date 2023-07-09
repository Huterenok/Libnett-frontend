import React from 'react';
import styles from './ReturnPage.module.scss';
import Input, { InputSize } from 'components/Input/Input';
import Button from 'components/Button';
import { useRouter } from 'next/router';

const ReturnPage = () => {
  const [title, setTitle] = React.useState('');

	const {query} = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.left}>
          <Input size={InputSize.L} value={title} setValue={setTitle} title="title:" />
          <Input size={InputSize.L} value={title} setValue={setTitle} title="Author's name:" />
          <Input size={InputSize.L} value={title} setValue={setTitle} title="Author's surname:" />
          <Input size={InputSize.L} value={title} setValue={setTitle} title="host:" />
        </div>
        <div className={styles.imgCon}>
          <img className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <Button title="return" style={{ flex: 1, height: 40 }} />
      </div>
    </div>
  );
};

export default ReturnPage;
