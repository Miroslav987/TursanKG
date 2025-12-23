"use client";

import { DatePicker } from "antd";
import styles from "../styles.module.scss";

type Props = {
  dateRange: [string, string] | null;
  onChange: (dates: [string, string]) => void;
};

export const TourDate = ({}: Props) => {
  return (
    <div className={styles.field}>
      <p className={styles.label}>Бронь тура</p>
      <DatePicker.RangePicker
        className={styles.input}
        placeholder={["Начало", "Конец"]}
      />
    </div>
  );
};
