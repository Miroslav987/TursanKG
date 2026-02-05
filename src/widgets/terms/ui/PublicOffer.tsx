"use client";
import { publicOfferContent } from "../content/terms.ru";
import styles from "./PublicOffer.module.scss";

const PublicOffer = () => {
  return (
    <div className={`${styles.offerContainer} container`}>
      <h1>{publicOfferContent.title}</h1>

      <div className={styles.content}>
        {publicOfferContent.paragraphs.map((paragraph, index) => {
          // Основные разделы (1., 2., 3. и т.д.)
          if (/^\d+\.\s/.test(paragraph)) {
            return (
              <h2 key={index} className={styles.sectionTitle}>
                {paragraph}
              </h2>
            );
          }

          // Подпункты (1.1., 3.2.4., 5.3. и т.д.)
          if (/^\d+\.\d+(\.\d+)?\s/.test(paragraph)) {
            return (
              <h3 key={index} className={styles.subsection}>
                {paragraph}
              </h3>
            );
          }

          // Элементы списка, начинающиеся с •
          if (paragraph.startsWith("•")) {
            return (
              <p key={index} className={styles.listItem}>
                {paragraph.replace("•", "").trim()}
              </p>
            );
          }

          // Обычный текст / абзац
          return (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PublicOffer;