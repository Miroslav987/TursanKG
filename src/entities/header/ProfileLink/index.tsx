import Link from 'next/link';
import Icon from "@shared/ui/Icon";
import { Routes } from "@shared/consts/routes";
import styles from "./styles.module.scss";

const ProfileLink = () => {
    return (
<Link className={styles.profileLink} href={Routes.PROFILE}><Icon name="user"/></Link>
    );
};

export default ProfileLink;