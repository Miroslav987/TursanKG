// src/widgets/RegionGrid/index.tsx
import { RegionCard } from "@shared/ui/RegionCard";
import styles from "./styles.module.scss";

const REGIONS = [
  {
    id: 1,
    title: "Стамбул",
    imageUrl:
      "https://vkplay.ru/hotbox/content_files/news/2021/06/24/2967e6e7bf2e4ea48d3bacb50c61d729.jpg", // Замените на реальные пути
    link: "/regions/istanbul",
    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
  },
  {
    id: 2,
    title: "Греческие Острова",
    imageUrl:
      "https://wallpaper.forfun.com/fetch/8e/8e1cb3994e6860f80ced8f98f314a986.jpeg",
    link: "/regions/greece",
    clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",
  },
  {
    id: 3,
    title: "Баликли Гёл",
    imageUrl:
      "https://etalongame.com/wp-content/uploads/2018/12/forza-horizon-4-polnyj-spisok-mashin.jpg",
    link: "/regions/balikli",
    clipPath: "polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)",
  },
  {
    id: 4,
    title: "Анталия",
    imageUrl:
      "https://vkplay.ru/hotbox/content_files/news/2021/06/24/2967e6e7bf2e4ea48d3bacb50c61d729.jpg",
    link: "/regions/antalya",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  {
    id: 5,
    title: "Бодрум",
    imageUrl:
      "https://wallpaper.forfun.com/fetch/8e/8e1cb3994e6860f80ced8f98f314a986.jpeg",
    link: "/regions/bodrum",
    clipPath: " polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%",
  },
  {
    id: 6,
    title: "Фетхие-Олудениз",
    imageUrl:
      "https://4kwallpapers.com/images/wallpapers/bugatti-chiron-cozy-1920x1200-14235.jpg",
    link: "/regions/fethiye",
    clipPath: "polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)",
  },
];

export const RegionList = () => {
  return (
    <div className={` ${styles.regionList} container`}>
      <h2>Регионы</h2>

      <div className={styles.list}>
        {REGIONS.map((region) => (
          <RegionCard
            key={region.id}
            title={region.title}
            imageUrl={region.imageUrl}
            clipPath={region.clipPath}
          />
        ))}
      </div>
    </div>
  );
};
