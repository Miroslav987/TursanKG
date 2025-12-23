'use client';

import styles from '../styles.module.scss';

type Props = {
  value: number;
};

export const TourPrice = ({ value }: Props) => (
  <div className={styles.totalInfo}>
    <span className={styles.totalValue}>{value.toLocaleString()} сом</span>
  </div>
);
