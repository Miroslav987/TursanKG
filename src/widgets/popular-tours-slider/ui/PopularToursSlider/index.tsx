"use client"; 


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
    <div className={`${styles.popuparToursSwiper} `}>
      {/* <div className='container'> */}
        {/* </div> */}
      <Swiper {...settingOurTeamSwiper} className={styles.swiperImage}>
        {tours.map((e, i) => (
          <SwiperSlide key={i} className={styles.slideImage}>
            <PopularToursBadge/>
            <PopularToursInfo infoTour={e}/>

              <Image
                fill
                style={{ objectFit: "cover" }}
                src={e.imgTours[0]}
                alt={e.title}
                priority={i === 0} 
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularToursSlider;
