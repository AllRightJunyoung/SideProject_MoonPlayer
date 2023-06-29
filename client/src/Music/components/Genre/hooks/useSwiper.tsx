import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper } from 'swiper/react';
import { SWIPER_SETTING } from '../constants';
import { fetchmusicList } from 'Music/store/feature/PlayListSlice';
import { useAppDispatch } from 'common/hooks/useReduxStore';

export const useSwiper = (slideitems) => {
  const dispatch = useAppDispatch();
  const [swiperModule, setSwiperModule] = useState<SwiperCore>();

  const handleNextSlide = () => {
    if (!swiperModule) return;
    swiperModule.slideNext(1000);
    const idx = swiperModule.realIndex + 1;
    dispatch(fetchmusicList(`http://localhost:4001/api/music/genre/${idx}`));
  };
  const handlePrevSlide = () => {
    if (!swiperModule) return;
    swiperModule.slidePrev(1000);
    const idx = swiperModule.realIndex + 1;
    dispatch(fetchmusicList(`http://localhost:4001/api/music/genre/${idx}`));
  };

  const swiper = (
    <Swiper {...SWIPER_SETTING} onSwiper={setSwiperModule}>
      {slideitems}
    </Swiper>
  );

  return { swiper, handleNextSlide, handlePrevSlide };
};
