"use client";

import { FC } from "react";
import styles from './styles.module.scss'
import AppLogo from "@shared/ui/AppLogo";
import NavItems from "@entities/header/NavItems/ui";
import NavItemsMob from "@entities/header/ProfileLink/NavItemsMob/NavItemsMob";


const Header: FC= () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <AppLogo/>
        <NavItems/>
        <NavItemsMob/>
      </nav>
    </header>
  );
};

export default Header;