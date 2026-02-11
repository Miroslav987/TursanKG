"use client";

import styles from "./styles.module.scss";
import { Checkbox, InputNumber, message, Radio } from "antd";
import AppButton from "@shared/ui/AppButton";
import { useState } from "react";
import { TourType } from "@entities/tour/model/types";
import { USD_TO_KGS } from "@entities/tour/config/tours";
import Icon from "@shared/ui/Icon";
import Link from "next/link";
import { Routes } from "@shared/consts/routes";

type TourBookingProps = {
  tour: TourType;
};

export const TourCustomBooking = ({ tour }: TourBookingProps) => {
  const [loading, setLoading] = useState(false);
  const [customPrice, setCustomPrice] = useState<number | null>(null);
  const [bank, setBank] = useState("demir");
const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const totalKgs = customPrice ? customPrice * USD_TO_KGS : 0;

  const handlePay = async () => {
    // if (!customPrice || customPrice <= 0) {
    //   message.warning("Пожалуйста, укажите корректную сумму");
    //   return;
    // }

    // try {
    //   setLoading(true);

    //   const detail = `${tour.title} | Оплата пользователем`;
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


<div className={styles.totalValue} translate="no"> 
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
