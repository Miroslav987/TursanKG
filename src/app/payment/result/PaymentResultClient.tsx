"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Spin, Result, Button } from "antd";

export default function PaymentResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paymentId = searchParams.get("payment_id");

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (!paymentId) {
      setSuccess(false);
      setLoading(false);
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch("/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ payment_id: paymentId }),
        });

        const data = await res.json();
        setSuccess(data.success === true);
      } catch (e) {
        console.error("VERIFY ERROR:", e);
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [paymentId]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
        <Spin size="large" />
      </div>
    );
  }

  if (success) {
    return (
      <Result
        status="success"
        title="Оплата прошла успешно!"
        subTitle="Спасибо за бронирование тура."
        extra={[
          <Button type="primary" key="home" onClick={() => router.push("/")}>
            На главную
          </Button>,
        ]}
      />
    );
  }

  return (
    <Result
      status="error"
      title="Платёж не прошёл"
      subTitle="Попробуйте снова или выберите другой способ оплаты."
      extra={[
        <Button type="primary" key="retry" onClick={() => router.back()}>
          Попробовать снова
        </Button>,
      ]}
    />
  );
}
