"use client";

import { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import { scrollToElement } from "@shared/lib/scroll/scrollTo";
import AppButton from "@shared/ui/AppButton";
import { tourCustom } from "@widgets/all-tours/ui";
import { TourCustomBooking } from "@widgets/tour-custom-booking/ui/TourCustomBooking";
import { useModal } from "@shared/context/Modal";
import ProfileLink from "@entities/header/ProfileLink";

const NavItems: FC = () => {
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();
  const { openModal } = useModal();

  const navItems = [
    { name: "Главная страница", href: "#" },
    // { name: "Часто задаваемые вопросы", href: "#faq" },
    { name: "Связаться с нами", href: "#contact_us" },
  ];

  const handleClick = (href: string) => {
    setActive(href);
    const isHomePage = pathname === "/";

    if (isHomePage) {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetId = href.replace("#", "");
        scrollToElement(targetId);
      }
      return;
    }

    router.push(`/${href}`);
  };

  return (
    <div className={styles.navItems}>
      {navItems.map((nav) => (
        <AppButton
          key={nav.href}
          onClick={() => handleClick(nav.href)}
          className={`${styles.navBtn} ${
            active === nav.href ? styles.navBtnActive : ""
          }`}
        >
          {nav.name}
        </AppButton>
      ))}
      <AppButton
        onClick={() => openModal(<TourCustomBooking tour={tourCustom} />)}
      >
        Выборочный Тур
      </AppButton>
      <ProfileLink />
    </div>
  );
};

export default NavItems;
