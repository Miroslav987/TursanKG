"use client";

import styles from "./styles.module.scss";
import { Checkbox, DatePicker, Radio, Select } from "antd";
import AppButton from "@shared/ui/AppButton";
import { useState } from "react";
import TourInfo from "./components/TourInfo";
import { Dayjs } from "dayjs";
import { TourType } from "@entities/tour/model/types";
import { USD_TO_KGS } from "@entities/tour/config/tours";
import { Routes } from "@shared/consts/routes";
import Link from "next/link";
import Icon from "@shared/ui/Icon";

type TourBookingProps = {
  tour: TourType;
};

export const TourBooking = ({ tour }: TourBookingProps) => {
  // const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);
  const [adults, setAdults] = useState(1);
  const [bank, setBank] = useState("demir");
const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const groupCount = Math.ceil(adults / 4);

  const totalUsd = groupCount * tour.price;
  const totalKgs = totalUsd * USD_TO_KGS;

  const handlePay = async () => {
    
    // try {
    //   setLoading(true);

    //   const dateRange = dates
    //     ? `${dates[0].format("DD.MM.YYYY")} - ${dates[1].format("DD.MM.YYYY")}`
    //     : "не выбраны";

    //   const detail = `${tour.title} | Даты: ${dateRange} | Людей: ${adults}`;

    //   const returnUrl = `${window.location.origin}/payment/result`;

    //   const payload = {
    //     amount: Math.round(totalKgs * 100), // сом * 100
    //     currency: "417",
    //     detail,
    //     language: "EN",
    //     return_url: returnUrl,
    //   };

    //   const res = await fetch("/api/payment", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });

    //   const data = await res.json();

    //   if (!res.ok || !data.proceed_url) {
    //     message.error("Ошибка при создании оплаты");
    //     return;
    //   }

    //   window.location.href = data.proceed_url;
    // } catch (e) {
    //   console.error("FULL ERROR 👉", e);
    //   message.error("Ошибка оплаты");
    // } finally {
    //   setLoading(false);
    // }
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
              <Select.Option key={n} value={n.toString()}>
                {n}
              </Select.Option>
            ))}
          </Select>
        </div>

        <TourInfo />
      </div>

      <p>Выберите Банк для оплаты</p>
      <Radio.Group
        className={styles.paymentMethod}
        onChange={(e) => setBank(e.target.value)}
        value={bank}
      >
        <Radio value={"demir"}>
          <Icon width={100} height={50} name="demir_bank" />
        </Radio>
        <Radio value={"freedom"}>
          <Icon width={100} height={50} name="freedom_bank" />
        </Radio>
      </Radio.Group>

      <Checkbox
      className={styles.acceptedPolicy}
        value={acceptedPolicy}
        onChange={(e) => setAcceptedPolicy(e.target.value)}
      >
        Я соглашаюсь с {" "}
        <Link href={Routes.PRIVACE_POLICY}>Политикой Конфиденциальности</Link>
      </Checkbox>

      <div className={styles.totalValue}>
        ${totalUsd.toLocaleString()} ≈ {Math.round(totalKgs).toLocaleString()}{" "}
        сом
      </div>

      <AppButton
        className={styles.submitBtn}
        // loading={loading}
        onClick={handlePay}
        disabled={!acceptedPolicy}
      >
        Подтвердить и оплатить
      </AppButton>
    </aside>
  );
};
