"use client";

import { useState } from "react";
import Link from "next/link";
import { Checkbox, InputNumber, message } from "antd";

import styles from "./styles.module.scss";
import AppButton from "@shared/ui/AppButton";
import { TourType } from "@entities/tour/model/types";
import { USD_TO_KGS } from "@entities/tour/config/tours";
import { Routes } from "@shared/consts/routes";
import { paymentApi } from "@shared/api/payment.service";

type TourBookingProps = {
  tour: TourType;
};

export const TourCustomBooking = ({ tour }: TourBookingProps) => {
  const [loading, setLoading] = useState(false);
  const [customPrice, setCustomPrice] = useState<number | null>(null);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const totalKgs = customPrice ? customPrice * USD_TO_KGS : 0;

const handlePay = async () => {
    if (!customPrice || customPrice <= 0) return message.warning("Введите сумму");
    if (!acceptedPolicy) return message.warning("Примите соглашение");

    try {
      setLoading(true);

      const baseUrl = window.location.origin;

      const payload = {
        amount: Number(totalKgs.toFixed(2)),
        currency: "KGS",                  
        description: `Оплата тура: ${tour.title} `.slice(0, 100),
        language: "ru",
        client_ip: "127.0.0.1",           
        order_id: `tursan_${Date.now()}`,    
        success_url: `${baseUrl}/payment/success`,
        failure_url: `${baseUrl}/payment/failure`,
      };

      console.log("🚀 Боевой Payload:", payload);

      const { data } = await paymentApi.createPayment(payload);

      if (data.pg_status === "ok" && data.pg_redirect_url) {
        // Уходим на страницу оплаты FreedomPay
        window.location.href = data.pg_redirect_url;
      } else {
        message.error(data.pg_error_description || "Ошибка платежной системы");
      }
    } catch (e: any) {
      console.error("❌ PAYMENT_ERROR:", e.response?.data);
      const errorMsg = e.response?.data?.detail || "Не удалось создать платеж";
      message.error(errorMsg);
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

      <Checkbox
        className={styles.acceptedPolicy}
        checked={acceptedPolicy}
        onChange={(e) => setAcceptedPolicy(e.target.checked)}
      >
        Я соглашаюсь с{" "}
        <Link href={Routes.PRIVACE_POLICY} target="_blank">
          Политикой Конфиденциальности
        </Link>
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
        type="primary"
      >
        Подтвердить и оплатить
      </AppButton>
    </aside>
  );
};