"use client";

import { TourGallery } from "@entities/tour/ui/TourGallery/TourGallery";
import styles from "./styles.module.scss";
import { TourBooking } from "@widgets/tour-booking/ui/TourBooking";
import OpenBook from "@widgets/tour-booking/ui/OpenBook/OpenBook";
import TourDescription from "@widgets/tour-description/ui/TourDescription";
import { TourType } from "@entities/tour/model/types";

type Props = {
  tour: TourType;
};

export default function TourDetails({ tour }: Props) {
  return (
    <div className={`container ${styles.tourDetails}`}>
      <h2 className={styles.title}>{tour.title}</h2>
      <div className={styles.galleryAndBooking}>
        <TourGallery images={tour.imgTours} />


        <div className={styles.mobileOnly}>
          <OpenBook tour={tour} />
        </div>


        <div className={styles.desktopOnly}>
          <TourBooking tour={tour} />
        </div>
      </div>

      <TourDescription description={tour.description} />
    </div>
  );
}
