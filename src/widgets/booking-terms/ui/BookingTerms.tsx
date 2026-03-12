"use client";
import { bookingTermsContent } from "../content/bookingTerms.ru";
import styles from "./BookingTerms.module.scss";

const BookingTerms = () => {
  return (
    <div className={`${styles.bookingTerms} container`}>
      <h1>{bookingTermsContent.title}</h1>

      <div className={styles.info}>
        {bookingTermsContent.paragraphs.map((paragraph, index) => {
          if (paragraph.startsWith("•")) {
            return (
              <p key={index} className={styles.listItem}>
                {paragraph.replace("•", "").trim()}
              </p>
            );
          }

          if (
            paragraph.endsWith(":") &&
            paragraph.length < 80 &&
            !paragraph.includes(".")
          ) {
            return (
              <h3 key={index} className={styles.subtitle}>
                {paragraph}
              </h3>
            );
          }

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

export default BookingTerms;