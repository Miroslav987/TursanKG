"use client";
import styles from '../styles.module.scss';
import { FC } from "react";

export type TourInfoProps = {
  info?: string;
};

const TourInfo: FC<TourInfoProps> = () => {
  return (
    <p className={styles.info}>
 Обратите внимание: стоимость бронирования увеличивается при количестве участников более 4-х человек (один билет рассчитан на группу до 4-х человек).
    </p>
  );
};

export default TourInfo;
