

import styles from './styles.module.scss'
import UserInfo from '@entities/user/ui/UserInfo';
import LogoutProfileBtn from '@features/profile/logout/LogoutProfileBtn';

const ProfileBlock = () => {
    return (
        <div className={styles.profileBlock}>
            <UserInfo/>
            <div className={styles.profileBtns}>

            {/* <EditProfileBtn/> */}
            <LogoutProfileBtn/>
            </div>
        </div>
    );
};

export default ProfileBlock;