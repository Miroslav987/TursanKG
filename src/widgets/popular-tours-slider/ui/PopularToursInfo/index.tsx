import styles from "./styles.module.scss";
import { FC } from "react";
import OpenBook from "@widgets/tour-booking/ui/OpenBook/OpenBook";
import { TourType } from "@entities/tour/model/types";
import Link from "next/link";

type PopularToursInfoType = {
  infoTour: TourType;
};

const PopularToursInfo: FC<PopularToursInfoType> = ({ infoTour }) => {
  return (
    <div className={styles.popularToursInfo}>
      <p className={styles.tourTitle}>
        Тур в <span>{infoTour.title}</span>
      </p>
      {/* <p className={styles.tourLimit}>
        Вместимость туристических групп составляет 
        <span> { infoTour.people_limit}</span> человек.
      </p> */}
      <OpenBook tour={infoTour} />
      <p className={styles.ourContact}>
        Свяжитесь с нами через WhatsApp по номеру:  <Link href='https://wa.me/996505150470'>+996 505 150 470</Link> для более
        подробной информации.
      </p>
    </div>
  );
}; 

export default PopularToursInfo;
