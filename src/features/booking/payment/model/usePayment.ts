'use client';

import axios from 'axios';

export const usePayment = () => {
  const createPayment = async (data: {
    amount: number;
    detail: string;
  }) => {
    const res = await axios.post(
      'http://146.190.175.84:8000/api/payment/create',
      {
        amount: data.amount,
        currency: '417',
        detail: data.detail,
        language: 'ru',
        return_url: `${window.location.origin}/payment/result`,
      }
    );

    window.location.href = res.data.proceed_url;
  };

  return { createPayment };
};
