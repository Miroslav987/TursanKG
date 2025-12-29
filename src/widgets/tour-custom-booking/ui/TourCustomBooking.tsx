"use client";

import styles from "./styles.module.scss";
import { InputNumber, message } from "antd";
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

  // считаем один раз
  const totalKgs = customPrice ? customPrice * USD_TO_KGS : 0;

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
        amount: Math.round(totalKgs * 100), // сом * 100
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
    } catch (e) {
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
          <p className={styles.label}>
            Сумма к оплате (указывается в долларах)
          </p>

          <InputNumber
            className={styles.input}
            min={1}
            value={customPrice}
            onChange={(val) => setCustomPrice(val)}
            placeholder="Введите сумму в $"
            style={{ width: "100%" }}
          />
        </div>

        <p className={styles.info}>
          Оплата производится в сомах по текущему курсу
        </p>
      </div>


      <div className={styles.totalValue}>
        {customPrice ? (
          <>
            ${customPrice.toLocaleString()} ≈{" "}
            {Math.round(totalKgs).toLocaleString()} сом
          </>
        ) : (
          "Введите сумму"
        )}
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
