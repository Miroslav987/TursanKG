"use client";
import { privacyPolicyContent } from "../content/privacyPolicy.ru";
import styles from "./PrivacyPolicyPage.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={`${styles.privacyPolicy} container`}>
      <h1>{privacyPolicyContent.title}</h1>

      <div className={styles.info}>
        {privacyPolicyContent.paragraphs.map((paragraph, index) => {
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

export default PrivacyPolicy;