"use client"; 


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./styles.module.scss";
import PopularToursBadge from "../PopularToursBadge";
import PopularToursInfo from "../PopularToursInfo";

const PopularToursSlider = () => {
  const popularTour = [
      { 
        img: "https://4kwallpapers.com/images/wallpapers/bugatti-chiron-cozy-1920x1200-14235.jpg",
        title: "Каппадокию 3",
        people_limit: "567",
      },
      { 
        img: "https://vkplay.ru/hotbox/content_files/news/2021/06/24/2967e6e7bf2e4ea48d3bacb50c61d729.jpg",
        title: "Каппадокию 3",
        people_limit: "567",
      },
      {
        img: "https://wallpaper.forfun.com/fetch/8e/8e1cb3994e6860f80ced8f98f314a986.jpeg",
        title: "Каппадокию 3",
        people_limit: "254",
      },
    {
      img: "https://etalongame.com/wp-content/uploads/2018/12/forza-horizon-4-polnyj-spisok-mashin.jpg",
      title: " Каппадокию",
      people_limit: "97",
    },
  ];

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
        {popularTour.map((e, i) => (
          <SwiperSlide key={i} className={styles.slideImage}>
            <PopularToursBadge/>
            <PopularToursInfo infoTour={e}/>

              <Image
                fill
                style={{ objectFit: "cover" }}
                src={e.img}
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
