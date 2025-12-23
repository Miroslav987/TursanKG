'use client';

import { Select } from 'antd';
import styles from '../styles.module.scss';


export const TourGuests = () => {
  return (
    <>
      <div className={styles.field}>
        <p className={styles.label}>Сколько будет взрослых?</p>
        <Select defaultValue="1" className={styles.select}>
          <Select.Option value="1">1 </Select.Option>
          <Select.Option value="2">2 </Select.Option>
          <Select.Option value="3">3 </Select.Option>
        </Select>
      </div>
      <div className={styles.field}>
        <p className={styles.label}>Сколько будет детей?</p>
        <Select defaultValue="1" className={styles.select}>
          <Select.Option value="1">1 </Select.Option>
          <Select.Option value="2">2 </Select.Option>
          <Select.Option value="3">3 </Select.Option>
        </Select>
      </div>
      </>
  );
};
