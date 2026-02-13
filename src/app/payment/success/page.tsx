"use client";

import { useEffect, useState, Suspense } from "react"; // Добавили Suspense
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Result, Button, Spin, message } from "antd";
import { paymentApi } from "@shared/api/payment.service";
import styles from "./styles.module.scss";

// 1. Выносим логику в отдельный внутренний компонент
function SuccessContent() {
  const searchParams = useSearchParams();
  const [checking, setChecking] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const paymentId = searchParams.get("pg_payment_id");

  useEffect(() => {
    const verifyPayment = async () => {
      if (!paymentId) {
        setChecking(false);
        return;
      }

      try {
        const { data } = await paymentApi.checkStatus(paymentId);
        
        if (data.status === "ok" || data.pg_status === "ok") {
          setIsSuccess(true);
        } else {
          message.error("Платеж еще обрабатывается или отклонен");
        }
      } catch (e) {
        console.error("Ошибка проверки статуса:", e);
        setIsSuccess(true); 
      } finally {
        setChecking(false);
      }
    };

    verifyPayment();
  }, [paymentId]);

  if (checking) {
    return (
      <div className={styles.container}>
        <Spin size="large" tip="Проверяем статус платежа..." />
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <Result
        status={isSuccess ? "success" : "warning"}
        title={isSuccess ? "Оплата прошла успешно!" : "Платеж обрабатывается"}
        subTitle={
          isSuccess 
            ? "Ваше бронирование подтверждено. Детали тура отправлены на почту."
            : "Мы ожидаем подтверждения от банка. Это может занять пару минут."
        }
        extra={[
          <Link key="home" href="/">
            <Button type="primary">На главную</Button>
          </Link>
        ]}
      />
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className={styles.container}>
      <Suspense fallback={
        <div className={styles.container}>
          <Spin size="large" tip="Загрузка страницы..." />
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </div>
  );
}