'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules'; 
import type { Swiper as SwiperType } from 'swiper/types';
import AppButton from '@shared/ui/AppButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import styles from './styles.module.scss';
import Icon from '@shared/ui/Icon';
import Image from 'next/image';

interface TourGalleryProps {
  images: string[];
}

export const TourGallery = ({ images }: TourGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  const handlePrev = () => {
    mainSwiper?.slidePrev();
  };

  const handleNext = () => {
    mainSwiper?.slideNext();
  };

  return (
    <div className={styles.galleryWrapper}>
      <Swiper
        onSwiper={setMainSwiper} 
        spaceBetween={10}
        navigation={false} 
        loop={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className={styles.mainSlider}
      >
        <div className={styles.navigation}>
          <AppButton onClick={handlePrev} className={styles.navButton}>
            <Icon sizes='small' name="arrow"/>
          </AppButton>
          <AppButton   onClick={handleNext} className={styles.navButton}>
            <Icon sizes='small' name="arrow"/>
          </AppButton>
        </div>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image fill src={img} alt={`Tour photo ${index}`} />
          </SwiperSlide>
        ))}
        

      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.thumbsSlider}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className={styles.thumbSlide}>
            <Image fill src={img} className={styles.thumbImage} alt="preview" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};