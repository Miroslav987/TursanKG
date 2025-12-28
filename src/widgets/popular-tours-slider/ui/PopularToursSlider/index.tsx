/* eslint-disable react-hooks/purity */
"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./styles.module.scss";
import PopularToursBadge from "../PopularToursBadge";
import PopularToursInfo from "../PopularToursInfo";
import { tours } from "@entities/tour/config/tours";

const PopularToursSlider = () => {
  const randomImageIndexMap = useRef<Record<string, number>>({});

  if (Object.keys(randomImageIndexMap.current).length === 0) {
    tours.forEach((tour) => {
      randomImageIndexMap.current[tour.id] =
        Math.floor(Math.random() * tour.imgTours.length);
    });
  }

  const settingOurTeamSwiper = {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    speed: 2000,
    effect: "fade" as const,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, EffectFade],
  };

  return (
    <div className={styles.popuparToursSwiper}>
      <Swiper {...settingOurTeamSwiper} className={styles.swiperImage}>
        {tours.map((tour, i) => {
          const imageIndex = randomImageIndexMap.current[tour.id];

          return (
            <SwiperSlide key={tour.id} className={styles.slideImage}>
              <PopularToursBadge />
              <PopularToursInfo infoTour={tour} />

              <Image
                fill
                style={{ objectFit: "cover" }}
                src={tour.imgTours[imageIndex]}
                alt={tour.title}
                priority={i === 0}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularToursSlider;
