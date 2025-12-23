"use client";

import styles from "./styles.module.scss";
import { useTourBooking } from "../model/useTourBooking";
import { TourDate } from "./components/TourDate";
import { TourGuests } from "./components/TourGuests";
import { TourPrice } from "./components/TourPrice";
import { TourSubmit } from "./components/TourSubmit";
import TourInfo from "./components/TourInfo";
import { useModal } from "@shared/context/Modal";
import Completed from "./components/Completed/Completed";

type Props = {
  price: number;
};

export const TourBooking = ({ price }: Props) => {
  const booking = useTourBooking(price);
  const {openModal} = useModal()

  return (
    <aside className={styles.tourBooking}>
      <h3 className={styles.title}>Оплата</h3>
      <div className={styles.form}>
        <TourDate
          dateRange={booking.dateRange}
          onChange={booking.setDateRange}
        />
        <TourGuests
        />
        <TourInfo/>
      </div>
      <TourPrice value={booking.totalPrice} />
      <TourSubmit onClick={()=>openModal(<Completed/>)} />
    </aside>
  );
};
