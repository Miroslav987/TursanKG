import { TourType } from "../model/types";

export const tours:TourType[] = [
  {
    id: "1",
    title: "Горное приключение",
    imgTours: [
      "https://picsum.photos/seed/101/800/600",
      "https://picsum.photos/seed/102/800/600",
      "https://picsum.photos/seed/103/800/600",
      "https://picsum.photos/seed/104/800/600",
    ],
    people_limit: 10,
    price: 12000,
  },
  {
    id: "2",
    title: "Экскурсия по озеру",
    imgTours: [
      "https://picsum.photos/seed/201/800/600",
      "https://picsum.photos/seed/202/800/600",
      "https://picsum.photos/seed/203/800/600",
      "https://picsum.photos/seed/204/800/600",
    ],
    people_limit: 8,
    price: 9000,
  },
  {
    id: "3",
    title: "Исторический тур",
    imgTours: [
      "https://picsum.photos/seed/301/800/600",
      "https://picsum.photos/seed/302/800/600",
      "https://picsum.photos/seed/303/800/600",
      "https://picsum.photos/seed/304/800/600",
    ],
    people_limit: 12,
    price: 15000,
  },
  {
    id: "4",
    title: "Пляжный отдых",
    imgTours: [
      "https://picsum.photos/seed/401/800/600",
      "https://picsum.photos/seed/402/800/600",
      "https://picsum.photos/seed/403/800/600",
      "https://picsum.photos/seed/404/800/600",
    ],
    people_limit: 15,
    price: 18000,
  },
];