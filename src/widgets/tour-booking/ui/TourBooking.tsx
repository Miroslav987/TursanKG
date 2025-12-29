"use client";

import styles from "./styles.module.scss";
import { DatePicker, Select, message } from "antd";
import AppButton from "@shared/ui/AppButton";
import { useState } from "react";
import TourInfo from "./components/TourInfo";
import  { Dayjs } from "dayjs";
import { TourType } from "@entities/tour/model/types";
import { USD_TO_KGS } from "@entities/tour/config/tours";

type TourBookingProps = {
  tour:TourType
}

export const TourBooking = ({ tour }: TourBookingProps) => {
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);
  const [adults, setAdults] = useState(1);
  // const [children, setChildren] = useState(0);
  const groupCount = Math.ceil(adults / 4);


  const handlePay = async () => {
    try {
      setLoading(true);

      const dateRange = dates
        ? `${dates[0].format("DD.MM.YYYY")} - ${dates[1].format("DD.MM.YYYY")}`
        : "не выбраны";

      const detail = `${tour.title} | Даты: ${dateRange} | Людей: ${adults}`;


      const returnUrl =`${window.location.origin}/payment/result`;

      const payload = {
        amount: groupCount * tour.price * 100,
        currency: "417", 
        detail,
        language: "EN",
        return_url: returnUrl,
      };


      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();


      if (!res.ok || !data.proceed_url) {
        message.error("Ошибка при создании оплаты");
        return;
      }

      window.location.href = data.proceed_url;
    } catch (e: any) {
      console.error("FULL ERROR 👉", e);
      message.error("Ошибка оплаты");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className={styles.tourBooking}>
      <h3 className={styles.title}>Оплата</h3>

      <div className={styles.form}>
        <div className={styles.field}>
          <p className={styles.label}>Бронь тура</p>
          <DatePicker.RangePicker
            className={styles.input}
            placeholder={["Начало", "Конец"]}
            value={dates}
            onChange={(val) => setDates(val as [Dayjs, Dayjs])}
          />
        </div>

        <div className={styles.field}>
          <p className={styles.label}>Сколько будет людей?</p>
          <Select
            value={adults.toString()}
            className={styles.select}
            onChange={(val) => setAdults(Number(val))}
            >
            {Array.from({ length: 100 }, (_, i) => i + 1).map((n) => (
              <Select.Option key={n} value={n.toString()}>{n}</Select.Option>
            ))}
            {/* <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
            <Select.Option value="4">4</Select.Option>
            <Select.Option value="5">5</Select.Option> */}
          </Select>
        </div>

        <div className={styles.field}>
          {/* <p className={styles.label}>Сколько будет детей?</p> */}
          {/* <Select
            value={children.toString()}
            className={styles.select}
            onChange={(val) => setChildren(Number(val))}
          >
            <Select.Option value="0">0</Select.Option>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
            <Select.Option value="4">4</Select.Option>
            <Select.Option value="5">5</Select.Option>
          </Select> */}
        </div>

        <TourInfo />
      </div>

      <div className={styles.totalInfo}>
        <span className={styles.totalValue}>{ groupCount * tour.price * USD_TO_KGS } СОМ</span>
        <span className={styles.totalValue}>{ groupCount * tour.price } $</span>
      </div>

      <AppButton
        className={styles.submitBtn}
        loading={loading}
        onClick={handlePay}
      >
        Подтвердить и оплатить
      </AppButton>
    </aside>
  );
};
