import NavItems from '@entities/Footer/NavItems';
import styles from './styles.module.scss';
import AppLogo from '@shared/ui/AppLogo';
import { FooterBottom } from '../components/FooterBottom/FooterBottom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className='container'>
            <NavItems/>
            <br />
            <AppLogo/>
            <FooterBottom/>
            </nav>
        </footer>
    );
};

export default Footer;