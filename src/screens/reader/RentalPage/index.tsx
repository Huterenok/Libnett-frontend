import React from 'react';
import styles from './RentalPage.module.scss';
import Input, { InputSize } from 'components/Input/Input';
import Button from 'components/Button';

const RentalPage = () => {
  const [title, setTitle] = React.useState('');
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
        <Input value={title} style={{ flex: 1 }} setValue={setTitle} title="term:" />
        <Input value={title} style={{ flex: 1 }} setValue={setTitle} title="price:" />
        <Button title="pay" style={{ flex: 1, height: 40 }} />
      </div>
    </div>
  );
};

export default RentalPage;
