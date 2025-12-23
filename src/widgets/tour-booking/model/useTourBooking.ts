'use client';

import { useState, useMemo } from 'react';

export const useTourBooking = (price: number) => {
  const [dateRange, setDateRange] = useState<[string, string] | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const totalPrice = useMemo(() => {
    return price * adults + price * 0.5 * children;
  }, [price, adults, children]);

  return {
    dateRange,
    setDateRange,
    adults,
    setAdults,
    children,
    setChildren,
    totalPrice,
  };
};
