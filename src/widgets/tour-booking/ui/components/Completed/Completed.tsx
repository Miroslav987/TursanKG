import Icon from '@shared/ui/Icon';
import styles from './styles.module.scss';
import AppButton from '@shared/ui/AppButton';
import { useModal } from '@shared/context/Modal';

const Completed = () => {
    const {closeModal} = useModal()
    return (
        <div className={styles.completed}>
            <Icon width={300} height={100} name='completed' ></Icon>
            <p>Вы успешно забронировали тур</p>
            <AppButton onClick={closeModal}>Закрыть</AppButton>
        </div>
    );
};

export default Completed;