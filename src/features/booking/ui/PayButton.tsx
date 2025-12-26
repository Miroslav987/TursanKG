'use client';

import { Button } from 'antd';
import { useState } from 'react';
import { usePayment } from '../payment/model/usePayment';

export const PayButton = ({ amount, title }: {
  amount: number;
  title: string;
}) => {
  const { createPayment } = usePayment();
  const [loading, setLoading] = useState(false);

  const onPay = async () => {
    setLoading(true);
    try {
      await createPayment({
        amount,
        detail: title,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="primary"
      size="large"
      block
      loading={loading}
      onClick={onPay}
    >
      Оплатить {amount} сом
    </Button>
  );
};
