
import styles from './styles.module.scss'
import { FC } from 'react';
import AppButton from '@shared/ui/AppButton';

type PopularToursInfoType = {
    infoTour: {
        title: string;
        people_limit: string;
    }
}

const PopularToursInfo: FC<PopularToursInfoType> = ({infoTour}) => {
    return (
        <div className={styles.popularToursInfo}>
            <p className={styles.tourTitle}>Тур в  <span>{infoTour.title}</span></p>
            <p className={styles.tourLimit}>Вместимость туристических групп составляет <span>{infoTour.people_limit}</span> человек.</p>
            <AppButton>Забронировать тур</AppButton>
            <p className={styles.ourContact}>Свяжитесь с нами через WhatsApp по номеру: +996(557)123-456 
для более подробной информации.</p>
        </div>
    );
};

export default PopularToursInfo;