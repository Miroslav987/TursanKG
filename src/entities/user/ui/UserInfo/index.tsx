// import Image from 'next/image';
import styles from "./styles.module.scss";
import Icon from "@shared/ui/Icon";

const UserInfo = () => {
  const userAva = true;
  return (
    <div className={styles.userInfo}>
      <div className={styles.userAvatar}>
        {userAva ? (
          <Icon sizes={60} name="user" />
        ) : (
          // <Image src={""} width={150} height={150} />
          null
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.name}>Антон</p>
        <p className={styles.email}>anton@gmail.com</p>
      </div>
    </div>
  );
};

export default UserInfo;
