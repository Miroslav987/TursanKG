
import styles from "./styles.module.scss";
import { Accordion } from "@shared/ui/Accordion";
import { FAQ_DATA } from "../config/data";


export const FaqBlock = () => {
  const items = FAQ_DATA.map((item) => ({
    key: item.id,
    label: <span className={styles.label}>{item.question}</span>,
    children: <div className={styles.content}>{item.answer}</div>,
  }));

  return (
    <section id='faq' className={` container`}>
      <div className={styles.faqBlock}>
        <h2 >
          Часто задаваемые вопросы
        </h2>
        <Accordion items={items} ghost />
      </div>
    </section>
  );
};
