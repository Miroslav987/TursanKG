"use client";

import styles from "./styles.module.scss";
import {  InputNumber, message } from "antd";
import AppButton from "@shared/ui/AppButton";
import { useState } from "react";
import { TourType } from "@entities/tour/model/types";
import { USD_TO_KGS } from "@entities/tour/config/tours";

type TourBookingProps = {
  tour: TourType;
};

export const TourCustomBooking = ({ tour }: TourBookingProps) => {
  const [loading, setLoading] = useState(false);
  const [customPrice, setCustomPrice] = useState<number | null>(null);

  const handlePay = async () => {
    if (!customPrice || customPrice <= 0) {
      message.warning("Пожалуйста, укажите корректную сумму");
      return;
    }

    try {
      setLoading(true);



      const detail = `${tour.title} | Оплата пользователем`;
      const returnUrl = `${window.location.origin}/payment/result`;

      const payload = {
       
        amount: customPrice * 100,
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
          <p className={styles.label}>Введите сумму к оплате в СОМ</p>
          <InputNumber
            className={styles.input}
            min={1}
            value={customPrice}
            onChange={(val) => setCustomPrice(val)}
            placeholder="Введите сумму в СОМ"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <div className={styles.totalInfo}>
        <span className={styles.totalValue}>
          {customPrice ? `${customPrice * USD_TO_KGS} СОМ` : "0 СОМ"}
        </span>
        <span className={styles.totalValue}>

          {customPrice ? `${customPrice } $` : "0 $"}
        </span>
      </div>

      <AppButton
        className={styles.submitBtn}
        loading={loading}
        onClick={handlePay}
        disabled={!customPrice}
      >
        Подтвердить и оплатить
      </AppButton>
    </aside>
  );
};