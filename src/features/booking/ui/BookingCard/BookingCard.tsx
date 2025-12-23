"use client";

import { Card, DatePicker, Select, Button, Typography } from "antd";
import styles from "./styles.module.scss";

const { Title, Text } = Typography;

interface BookingCardProps {
  tourId: string;
  pricePerPerson: number;
}

export const BookingCard = ({ pricePerPerson }: BookingCardProps) => {
  return (
    <Card className={styles.bookingCard} bordered={false}>
        <p>Оплата</p>
      <Title level={3} className={styles.price}>
        от {pricePerPerson.toLocaleString()} сом
      </Title>

      <div className={styles.field}>
        <Text strong className={styles.label}>Даты тура</Text>
        <DatePicker.RangePicker className={styles.input} placeholder={['Начало', 'Конец']} />
      </div>

      <div className={styles.field}>
        <Text strong className={styles.label}>Количество человек</Text>
        <Select defaultValue="1" className={styles.input}>
          <Select.Option value="1">1 взрослый</Select.Option>
          <Select.Option value="2">2 взрослых</Select.Option>
          <Select.Option value="3">3 взрослых</Select.Option>
        </Select>
      </div>

      <div className={styles.totalInfo}>
        <div className={styles.totalRow}>
          <Text>Итого:</Text>
          <Text strong>{pricePerPerson} сом</Text>
        </div>
        <Text type="secondary" className={styles.disclaimer}>
          Бесплатная отмена за 48 часов до начала
        </Text>
      </div>

      <Button type="primary" size="large" block className={styles.submitBtn}>
        Забронировать
      </Button>
    </Card>
  );
};