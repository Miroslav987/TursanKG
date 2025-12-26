// app/payment/result/page.tsx
import { Suspense } from 'react';
import PaymentResultClient from './PaymentResultClient';
import styles from './styles.module.scss';

export default function PaymentResultWrapper() {
  return (
    <Suspense fallback={<div className={styles.center}>Loading…</div>}>
      <PaymentResultClient />
    </Suspense>
  );
}
