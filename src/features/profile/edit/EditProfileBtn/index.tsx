import AppButton from "@shared/ui/AppButton";
import styles from './styles.module.scss'

const EditProfileBtn = () => {
   
    return (
        <AppButton className={styles.editProfileBtn}>
            Изменить
        </AppButton>
    );
};

export default EditProfileBtn;