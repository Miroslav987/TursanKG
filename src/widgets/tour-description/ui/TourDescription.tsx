"use client";
import styles from './styles.module.scss'
import { FC } from "react";

export type TourDescriptionProps = {
  description:string
};

const TourDescription: FC<TourDescriptionProps> = ({description}) => {
  return (
    <div className={styles.tourDescription}>
        <h3 className={styles.title}>Описание</h3>
        <div className={styles.description}>
            <p>{description} </p>
        </div>
    </div>
  );
};

export default TourDescription;