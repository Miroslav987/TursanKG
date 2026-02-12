import { FC } from 'react';
import styles from './styles.module.scss';

export type StatusType = {
  status:"completed"|"pending"|"canceled"
}

const Status:FC<StatusType> = ({ status }) => {
  const statusClass = {
    completed: styles.completed,
    pending: styles.pending,
    canceled: styles.canceled,
  }[status];

  const statusText = {
    completed: "Оплачено",
    pending: "Ожидание оплаты",
    canceled: "Оплата не прошла",
  }[status];

  return (
    <div className={`${styles.status} ${statusClass || ''}`}>
      <p>{statusText || ''}</p>
    </div>
  );
};

export default Status;
