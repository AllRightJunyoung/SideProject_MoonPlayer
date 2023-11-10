import { getMusicList } from 'Music/store/feature/GenreMusicSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';
import type { GenreListItemProps } from './GenreListItem.types';

import * as Styled from './GenreListItem.styled';

export const GenreListItem = ({ image_url, genre_id }: GenreListItemProps) => {
  const dispatch = useAppDispatch();
  const isInGenre = useAppSelector((state) => state.music.genreMusic.genre.genre_id) === genre_id ? true : false;

  const handleCardImage = () => {
    dispatch(getMusicList(Number(genre_id)));
  };

  return <Styled.CardImage onClick={handleCardImage} src={image_url} key={genre_id} disabled={isInGenre} />;
};

export default GenreListItem;
