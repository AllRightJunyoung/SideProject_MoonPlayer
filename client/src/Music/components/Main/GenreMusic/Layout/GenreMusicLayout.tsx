import * as Styled from './GenreMusic.styled';
import { memo, useEffect, useMemo, useState } from 'react';
import { getMusicList } from 'Music/store/feature/GenreMusicSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';
import GenreMusicItem from '../GenreMusicItem';
import MainHeaderLayout from '../../Header/Layout/Layout';

const GenreMusicLayout = () => {
  const dispatch = useAppDispatch();
  const genreMusicStore = useAppSelector((state) => state.music.genreMusic.genre);
  const [page, setPage] = useState(0);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const musics = useMemo(() => {
    return genreMusicStore.music_list;
  }, [genreMusicStore]);

  useEffect(() => {
    if (musics.length) return;
    dispatch(getMusicList(1));
  }, []);

  console.log(musics);

  return (
    <Styled.Layout>
      <MainHeaderLayout title="M U S I C" />

      {musics &&
        musics.map(({ name, id, img_url, source_url }) => (
          <GenreMusicItem key={id} id={id} name={name} img_url={img_url} source_url={source_url}></GenreMusicItem>
        ))}
    </Styled.Layout>
  );
};

export default memo(GenreMusicLayout);
