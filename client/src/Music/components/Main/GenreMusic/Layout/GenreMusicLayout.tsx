import * as Styled from './GenreMusic.styled';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { getMusicList, handleFetching } from 'Music/store/feature/GenreMusicSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';
import GenreMusicItem from '../GenreMusicItem';
import MainHeaderLayout from '../../Header/Layout/Layout';
import { useGenreMusicObserver } from 'Music/hooks/useGenreMusicObserver';
import GenreMusicSpinner from '../GenreMusicSpinner';
import { Spinner } from 'shared/components';

const GenreMusicLayout = () => {
  const dispatch = useAppDispatch();
  const genreMusicStore = useAppSelector((state) => state.music.genreMusic);
  const { page, size, isLastPage, music_list, isFetching, isSpinner, genre_id } = genreMusicStore.store;

  const fetchMusics = useCallback(async () => {
    dispatch(getMusicList({ id: genre_id, size, page: page + 1 }));
  }, [page, genre_id]);

  const ref = useGenreMusicObserver(async (entry, observer) => {
    observer.unobserve(entry.target);
    dispatch(handleFetching(true));
  });

  const musics = useMemo(() => {
    return music_list;
  }, [music_list]);

  useEffect(() => {
    dispatch(getMusicList({ id: genre_id, size, page: 0 }));
  }, [genre_id, size]);

  useEffect(() => {
    if (isFetching && !isLastPage) {
      fetchMusics();
    } else if (isLastPage) {
      dispatch(handleFetching(true));
    }
  }, [isFetching, isLastPage]);

  return (
    <Styled.Layout>
      <MainHeaderLayout title="M U S I C" />
      {isSpinner ? (
        <GenreMusicSpinner />
      ) : (
        <>
          {musics &&
            musics.map(({ name, id, img_url, source_url }) => (
              <GenreMusicItem key={id} id={id} name={name} img_url={img_url} source_url={source_url}></GenreMusicItem>
            ))}
          {isFetching && !isLastPage && <Spinner />}
          <div ref={ref} style={{ opacity: 0 }} />
        </>
      )}
    </Styled.Layout>
  );
};

export default memo(GenreMusicLayout);
