
'use client'
import { useModal } from '@shared/context/Modal';
import styles from './styles.module.scss'
import AppButton from '@shared/ui/AppButton';
const LogoutProfileModal = () => {
      const {closeModal } = useModal();
    return (
        <div className={styles.logoutProfileModal}>
            <p className={styles.title}>Выйти из аккаунта?</p>
            <div className={styles.btns}>
                <AppButton outlined onClick={closeModal}>Отмена</AppButton>
                <AppButton onClick={closeModal}>Выйти</AppButton>
            </div>
        </div>
    );
};

export default LogoutProfileModal;