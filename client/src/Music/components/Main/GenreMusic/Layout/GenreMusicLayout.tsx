import uuid from 'react-uuid';
import * as Styled from './GenreMusic.styled';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { getFirstMusicList, getMusicList, handleFetching } from 'Music/store/feature/GenreMusicSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';
import GenreMusicItem from '../GenreMusicItem';
import MainHeaderLayout from '../../Header/Layout/Layout';
import { useGenreMusicObserver } from 'Music/hooks/useGenreMusicObserver';
import GenreMusicSpinner from '../GenreMusicSpinner';

const GenreMusicLayout = () => {
  const dispatch = useAppDispatch();
  const genreMusicStore = useAppSelector((state) => state.music.genreMusic);
  const { page, size, genre_id, isLastPage, music_list, isFetching, isSpinner } = genreMusicStore.store;

  const fetchMusics = useCallback(async () => {
    dispatch(getMusicList({ id: genre_id, size, page: page + 1 }));
  }, [page]);

  const ref = useGenreMusicObserver(async (entry, observer) => {
    observer.unobserve(entry.target);
    dispatch(handleFetching(true));
  });

  const musics = useMemo(() => {
    return music_list;
  }, [music_list]);

  useEffect(() => {
    if (musics.length) return;
    dispatch(getFirstMusicList(genre_id));
  }, []);

  useEffect(() => {
    if (isFetching && !isLastPage) {
      fetchMusics();
    } else if (isLastPage) {
      dispatch(handleFetching(true));
    }
  }, [isFetching]);

  return (
    <Styled.Layout>
      <MainHeaderLayout title="M U S I C" />
      {isSpinner ? (
        <GenreMusicSpinner />
      ) : (
        <>
          {musics &&
            musics.map(({ name, id, img_url, source_url }) => (
              <GenreMusicItem
                key={uuid()}
                id={id}
                name={name}
                img_url={img_url}
                source_url={source_url}
              ></GenreMusicItem>
            ))}

          <div ref={ref} style={{ opacity: 0 }} />
        </>
      )}
    </Styled.Layout>
  );
};

export default memo(GenreMusicLayout);
