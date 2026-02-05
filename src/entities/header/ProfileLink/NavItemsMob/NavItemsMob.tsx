import BurgerMenu from '@entities/header/BurgerMenu';
import styles from './styles.module.scss'
import ProfileLink from '..';

const NavItemsMob = () => {
    return (
        <div className={styles.navItemsMob}>
        <ProfileLink />
        <BurgerMenu/>
        </div>
    );
};

export default NavItemsMob;