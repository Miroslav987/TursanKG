"use client";

import TourCard from "@entities/tour/components/TourCard";
import { FC } from "react";
import styles from "./styles.module.scss";
import { tours } from "@entities/tour/config/tours";
import Link from "next/link";
import { Routes } from "@shared/consts/routes";
import { TourType } from "@entities/tour/model/types";
import { useModal } from "@shared/context/Modal";
import { TourCustomBooking } from "@widgets/tour-custom-booking/ui/TourCustomBooking";




 export const tourCustom:TourType = {
    id:'5',
    title:'Выборочный тур',
    imgTours:['https://avatars.mds.yandex.net/get-altay/5480011/2a0000017d154fa6982ed3ace100f4dd8358/orig'],
    description:'',
    price:0
  }

const AllTours: FC = () => {
  const {openModal} = useModal()

  return (
    <section className={`${styles.allTours} container`}>
      <h2>Все туры</h2>
      <div className={styles.listTours} >
      {tours.map((tour) => (
        <Link key={tour.id} href={Routes.TOURS(tour.id)}>
            <TourCard  tour={tour} />
        </Link>
      ))}
      <div onClick={()=>openModal(<TourCustomBooking tour={tourCustom}/>, `${tourCustom.title}`)} style={{width:'100%'}}>
      <TourCard tour={tourCustom}  />
      </div>
      
      </div>
    </section>
  );
};

export default AllTours;
