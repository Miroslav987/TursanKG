import styles from './styles.module.scss';

interface Props {
  title: string;
  imageUrl: string;
  clipPath: string;
}

export const RegionCard = ({ title, imageUrl, clipPath }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.layerBottom}>
        <div 
          className={styles.imageInText} 
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {title}
        </div>
      </div>

      <div className={styles.layerTop} style={{ clipPath }}>
        <div 
          className={styles.fullImage} 
          style={{ backgroundImage: `url(${imageUrl})` }} 
        />
        <div className={styles.textWhite}>{title}</div>
      </div>
    </div>
  );
};