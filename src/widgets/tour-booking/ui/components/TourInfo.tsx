"use client";
import styles from '../styles.module.scss';
import { FC } from "react";

export type TourInfoProps = {
  info?: string;
};

const TourInfo: FC<TourInfoProps> = () => {
  return (
    <p className={styles.info}>
      Для детей от 0 до 6 лет вход бесплатный. Пожалуйста, учитывайте эту
      информацию при бронировании.
    </p>
  );
};

export default TourInfo;
