import { useCallback, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper } from 'swiper/react';
import { SWIPER_SETTING } from 'Music/constants/swiper';
import { getMusicList } from 'Music/store/feature/GenreMusicSlice';
import { useAppDispatch } from 'shared/hooks/useReduxStore';

const useSwiper = (slideitems) => {
  const dispatch = useAppDispatch();
  const [swiperModule, setSwiperModule] = useState<SwiperCore>();

  const handleNextSlide = useCallback(() => {
    if (!swiperModule) return;
    swiperModule.slideNext(1000);
    const idx = swiperModule.realIndex + 1;

    const req = { id: Number(idx), size: 11, page: 0 };
    dispatch(getMusicList(req));
  }, [swiperModule]);
  const handlePrevSlide = useCallback(() => {
    if (!swiperModule) return;
    swiperModule.slidePrev(1000);
    const idx = swiperModule.realIndex + 1;
    const req = { id: Number(idx), size: 11, page: 0 };

    dispatch(getMusicList(req));
  }, [swiperModule]);

  const swiper = (
    <Swiper {...SWIPER_SETTING} onSwiper={setSwiperModule}>
      {slideitems}
    </Swiper>
  );

  return { swiper, handleNextSlide, handlePrevSlide };
};
export default useSwiper;
