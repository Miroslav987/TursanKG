"use client"
import AppButton from "@shared/ui/AppButton";
import styles from './styles.module.scss'
import { useModal } from "@shared/context/Modal";
import LogoutProfileModal from "../LogoutProfileModal";

const LogoutProfileBtn = () => {
  const { openModal } = useModal();
    return (
        <AppButton onClick={()=>openModal(<LogoutProfileModal/>)} className={styles.logoutProfileBtn}>
            Выйти
        </AppButton>
    );
};

export default LogoutProfileBtn;