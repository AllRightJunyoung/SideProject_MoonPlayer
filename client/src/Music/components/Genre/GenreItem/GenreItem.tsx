import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';
import type { GenreItemProps } from './GernreItem.types';

import * as Styled from './GenreItem.styled';

export const GenreItem = ({ image_url, genre_id }: GenreItemProps) => {
  const dispatch = useAppDispatch();
  const isInGenre = useAppSelector((state) => state.music.playList.genre.genre_id) === genre_id ? true : false;

  const handleCardImage = () => {
    dispatch(fetchmusicList(`http://localhost:4001/api/music/genre/${genre_id}`));
  };

  return <Styled.CardImage onClick={handleCardImage} src={image_url} key={genre_id} disabled={isInGenre} />;
};

export default GenreItem;
