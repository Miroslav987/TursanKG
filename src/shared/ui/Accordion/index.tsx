// src/shared/ui/Accordion/index.tsx
import { Collapse, CollapseProps } from 'antd';
import styles from './styles.module.scss';

export const Accordion = (props: CollapseProps) => {
  return (
    <Collapse 
      {...props} 
      className={`${styles.customAccordion} ${props.className || ''}`}
      expandIconPosition="end" 
    />
  );
};