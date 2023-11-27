import { memo, useCallback } from 'react';
import * as Styled from './GenreListItem.styled';
import { getMusicList, handleSpinner } from 'Music/store/feature/GenreMusicSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';
import type { GenreListItemProps } from './GenreListItem.types';

export const GenreListItem = ({ image_url, genre_id }: GenreListItemProps) => {
  const dispatch = useAppDispatch();
  const isInGenre = useAppSelector((state) => state.music.genreMusic.store.genre_id) === genre_id ? true : false;

  const handleCardImage = useCallback(() => {
    dispatch(getMusicList({ id: genre_id, size: 11, page: 0 }));
    dispatch(handleSpinner(true));
  }, [genre_id]);

  return (
    <Styled.CardImage onClick={handleCardImage} src={image_url} key={genre_id} disabled={isInGenre} alt="장르 목록" />
  );
};

export default memo(GenreListItem);
