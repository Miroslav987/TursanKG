'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { Result, Spin, Button } from 'antd';
import styles from './styles.module.scss';

type VerifyResponse = {
  success: boolean;
  status_code: number;
  message?: string;
};

export default function PaymentResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Банк может вернуть paymentId или payment_id
  const paymentId =
    searchParams.get('payment_id') || searchParams.get('paymentId');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!paymentId) {
      setError('Платёж не найден');
      setLoading(false);
      return;
    }

    const processPayment = async () => {
      try {
        // 1️⃣ Проверяем оплату
        const verify = await axios.post<VerifyResponse>('/api/payment/verify', {
          payment_id: paymentId,
        });

        if (!verify.data.success) {
          setError(verify.data.message || 'Оплата не подтверждена');
          return;
        }

        // 2️⃣ Сохраняем заказ
        await axios.post('/api/orders/create', {
          payment_id: paymentId,
          status: 'paid',
        });
      } catch {
        setError('Ошибка подтверждения платежа');
      } finally {
        setLoading(false);
      }
    };

    processPayment();
  }, [paymentId]);

  if (loading) {
    return (
      <div className={styles.center}>
        <Spin size="large" />
        <p className={styles.text}>Проверяем оплату…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.wrapper}>
        <Result
          status="error"
          title="Оплата не прошла"
          subTitle={error}
          extra={
            <Button type="primary" onClick={() => router.push('/')}>
              На главную
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Result
        status="success"
        title="Оплата успешна 🎉"
        subTitle="Заказ успешно сохранён"
        extra={
          <Button type="primary" onClick={() => router.push('/')}>
            На главную
          </Button>
        }
      />
    </div>
  );
}
