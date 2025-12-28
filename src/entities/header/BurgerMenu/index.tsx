"use client";

import React, { useState } from "react";
import { Menu, Popover } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { scrollToElement } from "@shared/lib/scroll/scrollTo";
import styles from "./styles.module.scss";

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Главная", href: "#" },
    // { name: "Вопросы", href: "#faq" },
    { name: "Связаться с нами", href: "#contact_us" },
  ];

  const handleNavigation = (href: string) => {
    setOpen(false); // Закрываем меню сразу после клика
    
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

  const menuContent = (
    <Menu
      selectable={false}
      className={styles.customMenu}
      onClick={({ key }) => handleNavigation(key)}
      items={navItems.map((item) => ({
        key: item.href,
        label: item.name,
      }))}
    />
  );

  return (
    <Popover
      content={menuContent}
      trigger="click"
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
      arrow={false}
      overlayClassName={styles.popoverOverlay}
    >
      <button 
        className={`${styles.burger} ${open ? styles.open : ""}`}
        type="button"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </Popover>
  );
};

export default BurgerMenu;