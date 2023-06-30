import * as Styled from './GenreSlider.styled';

import { useAppSelector } from 'common/hooks/useReduxStore';
import { SwiperSlide } from 'swiper/react';
import { GenreItem } from '../GenreItem';
import { useSwiper } from 'Music/hooks';

export const GenreSlider = () => {
  const genreItems = useAppSelector((state) => state.music.genre.list);

  const slideItems = genreItems.map(({ image_url, genre_id }) => (
    <SwiperSlide key={genre_id}>
      <GenreItem image_url={image_url} key={genre_id} genre_id={genre_id}></GenreItem>
    </SwiperSlide>
  ));

  const { swiper, handleNextSlide, handlePrevSlide } = useSwiper(slideItems);

  return (
    <Styled.Layout direction="row">
      <Styled.CustomIconButton name="arrowLeft" size="2x" color="white" onClick={handlePrevSlide} />
      {swiper}
      <Styled.CustomIconButton name="arrowRight" size="2x" color="white" onClick={handleNextSlide} />
    </Styled.Layout>
  );
};

export default GenreSlider;
