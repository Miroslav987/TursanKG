// TourSubmit.tsx
'use client';

import styles from '../styles.module.scss';
import AppButton from '@shared/ui/AppButton';

interface TourSubmitProps {
  onClick?: () => void;
}

export const TourSubmit = ({ onClick }: TourSubmitProps) => (
  <AppButton onClick={onClick} className={styles.submitBtn}>
    Подтвердить
  </AppButton>
);