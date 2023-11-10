import * as Styled from './GenreMusic.styled';
import { useEffect } from 'react';
import { getMusicList } from 'Music/store/feature/GenreMusicSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';
import { MainHeader } from '../../Header/MainHeader';
import GenreMusicItem from '../GenreMusicItem';

const GenreMusicLayout = () => {
  const dispatch = useAppDispatch();
  const { music_list } = useAppSelector((state) => state.music.genreMusic.genre);

  useEffect(() => {
    if (music_list.length) return;
    dispatch(getMusicList(1));
  }, []);

  return (
    <Styled.Layout>
      <MainHeader title="M U S I C" />
      {music_list &&
        music_list.map(({ name, id, img_url, source_url }) => (
          <GenreMusicItem key={id} id={id} name={name} img_url={img_url} source_url={source_url}></GenreMusicItem>
        ))}
    </Styled.Layout>
  );
};

export default GenreMusicLayout;
