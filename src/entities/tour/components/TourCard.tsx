"use client";
import styles from "./styles.module.scss";
import { FC } from "react";
import { TourType } from "../model/types";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@shared/consts/routes";

export type TourCardProps = {
  tour: TourType;
  id:number
};

const TourCard: FC<TourCardProps> = ({ tour,id }) => {
  return (
    <Card className={styles.tourCard}>
      <Link href={Routes.TOURS(id)}>
      <Image
        src={tour.img}
        alt={tour.title}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className={styles.overlay}>
        <h3>{tour.title}</h3>
      </div>
      </Link>
    </Card>
  );
};

export default TourCard;
