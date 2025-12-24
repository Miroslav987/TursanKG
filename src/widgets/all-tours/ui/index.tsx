"use client";

import TourCard from "@entities/tour/components/TourCard";
import { TourType } from "@entities/tour/model/types";
import {  Row } from "antd";
import { FC } from "react";
import styles from "./styles.module.scss";

const tours: TourType[] = [
  {
    title: "Лодочная экскурсия в Бодрум",
    people_limit: "354",
    img: "https://vkplay.ru/hotbox/content_files/news/2021/06/24/2967e6e7bf2e4ea48d3bacb50c61d729.jpg",
  },
  {
    title: "Экскурсия в AYVALIK TOUR",
    people_limit: "354",
    img: "https://wallpaper.forfun.com/fetch/8e/8e1cb3994e6860f80ced8f98f314a986.jpeg",
  },
  {
    title: "Поездка на Греческие Острова",
    people_limit: "354",
    img: "https://etalongame.com/wp-content/uploads/2018/12/forza-horizon-4-polnyj-spisok-mashin.jpg",
  },
  {
    title: "Поездка на Греческие Острова",
    people_limit: "354",
    img: "https://4kwallpapers.com/images/wallpapers/bugatti-chiron-cozy-1920x1200-14235.jpg",
  },
];

// export type AllToursProps = {
//   tours: TourType;
// };

const AllTours: FC = () => {
  return (
    <section className={`${styles.allTours} container`}>
      <h2>Все туры</h2>
      <Row className={styles.listTours} >
      {tours.map((tour,id) => (
            <TourCard key={id} tour={tour} id={id}/>
      ))}
      </Row>
    </section>
  );
};

export default AllTours;
