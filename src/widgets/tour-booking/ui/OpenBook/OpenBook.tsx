"use client";
import styles from './styles.module.scss'
import { useModal } from '@shared/context/Modal';
import AppButton from '@shared/ui/AppButton';
import { TourBooking } from '../TourBooking';
import { TourType } from '@entities/tour/model/types';
type Props = {
  tour: TourType;
};

const OpenBook = ({tour}:Props) => {

     const {openModal} = useModal()
    return (
        <AppButton className={styles.OpenBook} onClick={()=> openModal(<TourBooking tour={tour}/>)}>
            Забронировать тур
        </AppButton>
    );
};

export default OpenBook;