import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper } from 'swiper/react';
import { SWIPER_SETTING } from 'Music/constants/swiper';
import { getMusicList } from 'Music/store/feature/PlayListSlice';
import { useAppDispatch } from 'common/hooks/useReduxStore';

const useSwiper = (slideitems) => {
  const dispatch = useAppDispatch();
  const [swiperModule, setSwiperModule] = useState<SwiperCore>();

  const handleNextSlide = () => {
    if (!swiperModule) return;
    swiperModule.slideNext(1000);
    const idx = swiperModule.realIndex + 1;
    dispatch(getMusicList(Number(idx)));
  };
  const handlePrevSlide = () => {
    if (!swiperModule) return;
    swiperModule.slidePrev(1000);
    const idx = swiperModule.realIndex + 1;
    dispatch(getMusicList(Number(idx)));
  };

  const swiper = (
    <Swiper {...SWIPER_SETTING} onSwiper={setSwiperModule}>
      {slideitems}
    </Swiper>
  );

  return { swiper, handleNextSlide, handlePrevSlide };
};
export default useSwiper;
