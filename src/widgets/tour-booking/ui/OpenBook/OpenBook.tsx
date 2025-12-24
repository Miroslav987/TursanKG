"use client";
import { useModal } from '@shared/context/Modal';
import AppButton from '@shared/ui/AppButton';
import { TourBooking } from '../TourBooking';
type Props = {
  price: number;
};

const OpenBook = ({price}:Props) => {

     const {openModal} = useModal()
    return (
        <AppButton onClick={()=> openModal(<TourBooking price={price}/>)}>
            Заброировать тур
        </AppButton>
    );
};

export default OpenBook;