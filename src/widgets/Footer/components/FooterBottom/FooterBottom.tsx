import Link from "next/link";
import styles from "../../ui/styles.module.scss";
import { Routes } from "@shared/consts/routes";

export const FooterBottom = () => (
  <div className={styles.footerBottom}><p >Все права защищены © 2026</p> <Link href={Routes.PRIVACE_POLICY}>Политика конфиденциальности</Link> <Link href={Routes.PUBLIC_OFFER}>Публичная оферта </Link></div>
);
