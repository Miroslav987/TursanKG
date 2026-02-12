import ProfileBlock from "@widgets/profile-block/ui/ProfileBlock";
import styles from './styles.module.scss'
import ListBookedTours from "@features/profile/booked-tours/ui/ListBookedTours";
const ProfileView = () => {
    return (
        <div className={`${styles.profileView} container`}>
            <ProfileBlock/>
            <ListBookedTours/>
        </div>
    );
};

export default ProfileView;