import { BookedTourType } from '../../model/types';
import CardBookedTour from './components/CardBookedTour';
import styles from './styles.module.scss'

const ListBookedTours = () => {
    const list:BookedTourType[]=[
        {
            name:"5 дневный тур",
            peopleCount:"1",
            date:['01.03.2026','06.03.2026'],
            priceKG: 712000 ,
            priceEN: 8000,
            status:'completed'
        },
        {
            name:"15 дневный тур",
            peopleCount:"1",
            date:['01.03.2026','06.03.2026'],
            priceKG: 712000 ,
            priceEN: 8000,
            status:'pending'
        },
        {
            name:"30 дневный тур",
            peopleCount:"1",
            date:['01.03.2026','06.03.2026'],
            priceKG: 712000 ,
            priceEN: 8000,
            status:'canceled'
        }
    ]
    return (
        <div className={styles.ListBookedTours}>
            <h2>Мои туры</h2>
            <div className={styles.list}>
                {list.map((e,i)=><CardBookedTour key={i} tour={e}/>)}
            </div>
        </div>
    );
};

export default ListBookedTours;