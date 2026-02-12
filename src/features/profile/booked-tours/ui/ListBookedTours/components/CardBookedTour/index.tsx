import { FC } from 'react';
import Status from './components/Status';
import styles from './styles.module.scss'
import { BookedTourType } from '@features/profile/booked-tours/model/types';




type CardBookedTourType = {
 tour:BookedTourType
}



const CardBookedTour:FC<CardBookedTourType> = ({tour}) => {
    return (
        <div className={styles.CardBookedTour}>
            <div className={styles.left}>
                <div>
                <p className={styles.name}>{tour.name}</p>
                <p className={styles.peopleCount}>Количество людей: <span>{tour.peopleCount}</span></p>
                </div>
                <div className={styles.date}>
                    {tour.date? 
                    tour.date.map((e,i)=><p key={i}>{e}</p>)
                    :null}
                </div>
            </div>
            <div className={styles.right}>
                <Status status={tour.status}/>
                <div className={styles.prices}>
                    <p >{tour.priceKG} сом</p>
                    <p>{tour.priceEN} $</p>

                </div>
            </div>
        </div>
    );
};

export default CardBookedTour;