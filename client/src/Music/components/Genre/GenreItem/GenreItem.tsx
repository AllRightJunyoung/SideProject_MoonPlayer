import { getMusicList } from 'Music/store/feature/GenreMusicSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';
import type { GenreItemProps } from './GernreItem.types';

import * as Styled from './GenreItem.styled';

export const GenreItem = ({ image_url, genre_id }: GenreItemProps) => {
  const dispatch = useAppDispatch();
  const isInGenre = useAppSelector((state) => state.music.genreMusic.genre.genre_id) === genre_id ? true : false;

  const handleCardImage = () => {
    dispatch(getMusicList(Number(genre_id)));
  };

  return <Styled.CardImage onClick={handleCardImage} src={image_url} key={genre_id} disabled={isInGenre} />;
};

export default GenreItem;
