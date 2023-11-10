import * as Styled from './GenreSlider.styled';

import { useAppSelector } from 'shared/hooks/useReduxStore';
import { SwiperSlide } from 'swiper/react';
import { useSwiper } from 'Music/hooks';
import GenreListItem from '../GenreListItem';

export const GenreSlider = () => {
  const genreItems = useAppSelector((state) => state.music.genreList.list);

  const slideItems = genreItems.map(({ image_url, genre_id }) => (
    <SwiperSlide key={genre_id}>
      <GenreListItem image_url={image_url} key={genre_id} genre_id={genre_id}></GenreListItem>
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
