// src/widgets/RegionGrid/index.tsx
import { RegionCard } from "@shared/ui/RegionCard";
import styles from "./styles.module.scss";

const REGIONS = [
  {
    id: 1,
    title: "Стамбул",
    imageUrl:
      "https://picsum.photos/seed/231/800/600",
    link: "/regions/istanbul",
    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
  },
  {
    id: 2,
    title: "Греческие Острова",
    imageUrl:
      "https://picsum.photos/seed/232/800/600",
    link: "/regions/greece",
    clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",
  },
  {
    id: 3,
    title: "Баликли Гёл",
    imageUrl:
      "https://picsum.photos/seed/233/800/600",
    link: "/regions/balikli",
    clipPath: "polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)",
  },
  {
    id: 4,
    title: "Анталия",
    imageUrl:
      "https://picsum.photos/seed/234/800/600",
    link: "/regions/antalya",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  {
    id: 5,
    title: "Бодрум",
    imageUrl:
      "https://picsum.photos/seed/240/800/600",
    link: "/regions/bodrum",
    clipPath: " polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%",
  },
  {
    id: 6,
    title: "Фетхие-Олудениз",
    imageUrl:
      "https://picsum.photos/seed/236/800/600",
    link: "/regions/fethiye",
    clipPath: "polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)",
  },
];

export const RegionList = () => {
  return (
    <section className={` ${styles.regionList} container`}>
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
    </section>
  );
};
