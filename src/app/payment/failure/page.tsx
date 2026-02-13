"use client";

import { Result, Button, Typography, Spin } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const { Paragraph, Text } = Typography;

 function FailureContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('pg_payment_id') || searchParams.get('payment_id');

  return (
    <div style={{ padding: '100px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <Result
        status="error"
        title="Оплата не удалась"
        subTitle="Пожалуйста, проверьте данные вашей карты или попробуйте другой способ оплаты."
        extra={[
          <Button type="primary" key="retry">
            <Link href="/">Попробовать снова</Link>
          </Button>,
        ]}
      >
        <div className="desc">
          <Paragraph>
            <Text strong style={{ fontSize: 16 }}>
              Возможные причины ошибки:
            </Text>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined style={{ color: 'red' }} /> Недостаточно средств на карте.
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined style={{ color: 'red' }} /> Превышен лимит на интернет-операции.
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined style={{ color: 'red' }} /> Операция отклонена банком-эмитентом.
          </Paragraph>
          {paymentId && (
            <Paragraph style={{ marginTop: 20 }}>
              <Text type="secondary">ID транзакции: {paymentId}</Text>
            </Paragraph>
          )}
        </div>
      </Result>
    </div>
  );
}
export default function PaymentFailurePage() {
  return (
    <div >
      <Suspense fallback={<Spin size="large" tip="Загрузка..." />}>
        <FailureContent />
      </Suspense>
    </div>
  );
}