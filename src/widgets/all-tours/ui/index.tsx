"use client";

import TourCard from "@entities/tour/components/TourCard";
import {  Row } from "antd";
import { FC } from "react";
import styles from "./styles.module.scss";
import { tours } from "@entities/tour/config/tours";



// export type AllToursProps = {
//   tours: TourType;
// };

const AllTours: FC = () => {
  return (
    <section className={`${styles.allTours} container`}>
      <h2>Все туры</h2>
      <Row className={styles.listTours} >
      {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
      ))}
      </Row>
    </section>
  );
};

export default AllTours;
