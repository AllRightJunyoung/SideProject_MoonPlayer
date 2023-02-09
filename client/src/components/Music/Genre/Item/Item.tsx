import styled from 'styled-components';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Image from 'components/Global/style/Image';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';
import { GenreDataType } from 'types/app/genre';
type ItemProps = Pick<GenreDataType, 'image_url' | 'genre_id'>;

export const Item = ({ image_url, genre_id }: ItemProps) => {
  const dispatch = useAppDispatch();
  const isInGenre = useAppSelector((state) => state.music.playList.genre.genre_id) === genre_id ? true : false;

  const handleCardImage = () => {
    dispatch(fetchmusicList(`http://localhost:4000/api/music/genre/${genre_id}`));
  };

  return <CardImage onClick={handleCardImage} src={image_url} key={genre_id} disabled={isInGenre} />;
};

interface CardImageProps {
  disabled: boolean;
}
interface ImageProps {
  src: string;
}

const CardImage = styled.img.attrs(({ src }: ImageProps) => ({
  src: src,
}))<CardImageProps>`
  object-fit: fill;
  max-width: 100%;
  transition-duration: 0.4s;

  opacity: ${(props) => (!props.disabled ? '0.34' : '1')};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 7px;

  cursor: pointer;
`;
export default Item;
