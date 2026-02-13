"use client";

import { useState } from "react";
import { Checkbox, DatePicker, message, Select } from "antd";
import { Dayjs } from "dayjs";
import Link from "next/link";

import styles from "./styles.module.scss";
import AppButton from "@shared/ui/AppButton";
import TourInfo from "./components/TourInfo";

import { TourType } from "@entities/tour/model/types";
import { USD_TO_KGS } from "@entities/tour/config/tours";
import { Routes } from "@shared/consts/routes";
import { paymentApi } from "@shared/api/payment.service";

type TourBookingProps = {
  tour: TourType;
};

export const TourBooking = ({ tour }: TourBookingProps) => {
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);
  const [adults, setAdults] = useState(1);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const groupCount = Math.ceil(adults / 4);
  const totalUsd = groupCount * tour.price;
  const totalKgs = totalUsd * USD_TO_KGS;

const handlePay = async () => {
  if (!dates || !acceptedPolicy) return message.warning("Заполните все поля");

  try {
  setLoading(true);

      const baseUrl = window.location.origin; 

      const payload = {
        amount: Number(totalKgs.toFixed(2)),
        currency: "KGS",
        description: `Tour: ${tour.title}`.slice(0, 100),
        language: "ru",
        client_ip: "127.0.0.1",
        order_id: `tursan_${Date.now()}`,
        success_url: `${baseUrl}/payment/success`,
        failure_url: `${baseUrl}/payment/failure`,
      };

      console.log("🚀 Отправка с URL:", payload.success_url);

      const { data } = await paymentApi.createPayment(payload);

      if (data.pg_status === "ok" && data.pg_redirect_url) {
        window.location.href = data.pg_redirect_url;
      } else {
        message.error(data.pg_error_description || "Ошибка");
      }
    } catch (e: any) {
      console.error("❌ ОШИБКА:", e.response?.data);
      message.error("Ошибка при создании платежа");
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
            value={dates}
            onChange={(val) => setDates(val as [Dayjs, Dayjs])}
          />
        </div>
        <div className={styles.field}>
          <p className={styles.label}>Количество людей</p>
          <Select
            value={adults.toString()}
            className={styles.select}
            onChange={(val) => setAdults(Number(val))}
          >
            {[1, 2, 3, 4, 5, 10].map((n) => (
              <Select.Option key={n} value={n.toString()}>{n}</Select.Option>
            ))}
          </Select>
        </div>
        <TourInfo />
      </div>

      <Checkbox
        className={styles.acceptedPolicy}
        checked={acceptedPolicy}
        onChange={(e) => setAcceptedPolicy(e.target.checked)}
      >
        Я соглашаюсь с <Link href={Routes.PRIVACE_POLICY} target="_blank">Политикой</Link>
      </Checkbox>

      <div className={styles.totalValue}>
        ${totalUsd.toLocaleString()} ≈ {Math.round(totalKgs).toLocaleString()} сом
      </div>

      <AppButton
        className={styles.submitBtn}
        loading={loading}
        onClick={handlePay}
        type="primary"
      >
        Подтвердить и оплатить
      </AppButton>
    </aside>
  );
};